import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import fetch from 'node-fetch';
import useSWR from 'swr';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Router, { useRouter } from 'next/router'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        minHeight: 140,
    },
});


export default function SearchResults({ fetchType, query }) {

    if (query == '') return <></>
    const router = useRouter();
    const classes = useStyles();


    const { fetchUrl, header } = getFetchUrl({ fetchType, query });
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    var { data, error } = useSWR(fetchUrl, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const results = data.results

    const handleClick = (e, ID) => {
        e.preventDefault()
        goToDetailPage(fetchType, ID)
    }


    if (results.length != 0) {
        return (
            <Grid item style={{ marginBottom: 24 }}>
                <Typography variant="h5">
                    {header}
                </Typography>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    {results.map((res) => (
                        <Grid item lg={2} md={3} sm={4} xs={3} key={`${fetchType}-${res.id}`}>
                            <Card className={classes.root}>
                                <CardActionArea onClick={(e) => handleClick(e, res.id)}>
                                    <CardMedia
                                        className={classes.media}
                                        image={res.poster_path ? `http://image.tmdb.org/t/p/w342${res.poster_path}` : "/default_movie_img.jpg"}
                                        src={res.poster_path ? `http://image.tmdb.org/t/p/w342${res.poster_path}` : "/default_movie_img.jpg"}
                                        title={res.title ? res.title : res.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h5">
                                            {res.title ? res.title : res.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        )
    }
    return (
        <>
            <Typography variant="h5">
                {header}
            </Typography>
            <Typography variant="body2">
                No results
        </Typography>
        </>
    )
}

function getFetchUrl({ fetchType, query, page }) {
    page ? page : 1
    switch (fetchType) {
        case 'movies':
            return { fetchUrl: `${process.env.URL_MOVIE_SEARCH}?api_key=${process.env.API_KEY}&page=${page}&query=${query}`, header: 'Movies results' }
        case 'series':
            return { fetchUrl: `${process.env.URL_SERIES_SEARCH}?api_key=${process.env.API_KEY}&page=${page}&query=${query}`, header: 'Series results' }
        default:
            return { fetchUrl: null, header: null }
    }
}

function goToDetailPage(fetchType, ID) {
    switch (fetchType) {
        case 'movies':
            Router.push('/movie/[id]', `/movie/${ID}`)
            break;
        case 'series':
            Router.push('/series/[id]', `/series/${ID}`)
            break;
        default:
            Router.push('/index')
            break
    }
}