import { Grid, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react';
import fetch from 'node-fetch'
import useSWR from 'swr'
import PlayButton from '../../components/PlayButton'

export default function SeriesDetail() {
    const router = useRouter()
    const { id } = router.query

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    var { data, error } = useSWR(`${process.env.URL_SERIES_DETAIL}/${id}?api_key=${process.env.API_KEY}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item xs={12}>
                    <Typography variant="h4">
                        {data.name} ({data.original_name})
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={3}
                    >
                        <Grid item>
                            <Typography variant="h5">
                                Description
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                                {data.overview}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                                Metadata
                        </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                                <b>Release date: </b>{data.first_air_date}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                                <b>In production: </b>{data.in_production}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                                <b>Vote average: </b>{data.vote_average}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                                <b>Vote count: </b>{data.vote_count}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <PlayButton Title={`${data.name} (${data.original_name})`} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <img src={data.poster_path ? `${process.env.URL_POSTER}${data.poster_path}` : "/default_movie_img.jpg"} alt={data.original_title} />
                </Grid>
            </Grid>
        </>
    )
}
