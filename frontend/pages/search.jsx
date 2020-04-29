import Head from 'next/head'
import React, { useState } from 'react';
import Carousel from '../components/Carousel'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import SearchResults from '../components/SearchResults'

export default function Search() {
    const [query, setQuery] = useState('');

    return (
        <>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item xs={12}>
                    <Typography variant="h4">
                        Search
                    </Typography>
                </Grid>
                <FormControl fullWidth variant="outlined" style={{ marginBottom: 24 }}>
                    <InputLabel htmlFor="outlined-search">Search movie or series</InputLabel>
                    <OutlinedInput
                        id="outlined-search"
                        labelWidth={180}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </FormControl>
            </Grid>
            <SearchResults fetchType="movies" query={query} />
            <SearchResults fetchType="series" query={query} />
        </>
    )
}



