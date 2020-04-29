import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import Router from 'next/router'



export default function Navigation() {


    return (

        <Grid container direction="row" spacing={2} alignItems="center" justify="flex-start" style={{ marginBottom: 48 }}>
            <Grid item xs={8}>
                <Grid container direction="row" spacing={3} alignItems="center" justify="flex-start" >
                    <Grid item>
                        <img src="/logo.png" alt="Logo" style={{ height: 48 }} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h3">
                            MOVIE APP
                </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => Router.push("/index")}
                        >
                            Home
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => Router.push("/search")}

                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}