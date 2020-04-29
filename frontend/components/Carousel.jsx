import React from 'react';
import fetch from 'node-fetch'
import useSWR from 'swr'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Grid, Typography } from '@material-ui/core'
import Router, { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        overflowX: 'auto',
        cursor: 'pointer',
    },
    title: {
        color: 'ffffff',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function Carousel({ fetchType }) {
    const classes = useStyles();
    const router = useRouter();

    const { fetchUrl, header } = getFetchUrl(fetchType);
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    var { data, error } = useSWR(fetchUrl, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const results = data.results

    const handleClick = (e, ID) => {
        e.preventDefault()
        goToDetailPage(fetchType, ID)
    }

    return (
        <Grid item style={{ marginBottom: 24 }}>
            <Typography variant="h5">
                {header}
            </Typography>

            <GridList className={classes.gridList} cellHeight={300} cols={8}>
                {results.map((tile) => (
                    <GridListTile key={tile.id} cols={2} onClick={(e) => handleClick(e, tile.id)}>
                        <img src={tile.poster_path ? `http://image.tmdb.org/t/p/w342${tile.poster_path}` : "/default_movie_img.jpg"} alt={tile.title ? tile.title : tile.name} />
                        <GridListTileBar
                            title={tile.title ? tile.title : tile.name}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </Grid >
    )
}

function getFetchUrl(fetchType) {
    switch (fetchType) {
        case 'movies_popular':
            return { fetchUrl: `${process.env.URL_MOVIE_POPULAR}?api_key=${process.env.API_KEY}`, header: 'Popular movies' }
        case 'series_popular':
            return { fetchUrl: `${process.env.URL_SERIES_POPULAR}?api_key=${process.env.API_KEY}`, header: 'Popular series' }
        case 'genre_family':
            return { fetchUrl: `${process.env.URL_GENRE_FAMILY}?api_key=${process.env.API_KEY}`, header: 'Family' }
        case 'genre_documentary':
            return { fetchUrl: `${process.env.URL_GENRE_DOCUMENTARY}?api_key=${process.env.API_KEY}`, header: 'Documentary' }
        default:
            return { fetchUrl: null, header: null }
    }
}

function goToDetailPage(fetchType, ID) {
    switch (fetchType) {
        case 'movies_popular':
            Router.push('/movie/[id]', `/movie/${ID}`)
            break;
        case 'series_popular':
            Router.push('/series/[id]', `/series/${ID}`)
            break;
        case 'genre_family':
            Router.push('/movie/[id]', `/movie/${ID}`)
            break;
        case 'genre_documentary':
            Router.push('/movie/[id]', `/movie/${ID}`)
            break;
        default:
            Router.push('/index')
            break
    }
}