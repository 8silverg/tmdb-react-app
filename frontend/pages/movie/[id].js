import Head from 'next/head'
import { Grid, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react';
import fetch from 'node-fetch'
import useSWR from 'swr'
import PlayButton from '../../components/PlayButton'

export default function MovieDetail() {
    const router = useRouter()
    const { id } = router.query

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    var { data, error } = useSWR(`${process.env.URL_MOVIE_DETAIL}/${id}?api_key=${process.env.API_KEY}`, fetcher)

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
                        {data.original_title}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={2}
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
                                <b>Release date: </b>{data.release_date}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                                <b>Original language: </b>{data.original_language}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                                <b>Revenue: </b>{data.revenue} $
                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                                <b>Runtime: </b>{data.runtime} min
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
                            <PlayButton Title={data.original_title} />
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
