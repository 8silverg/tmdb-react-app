import React from 'react';
import { Grid, Typography } from '@material-ui/core'

export default function Footer() {
    return (
        <Grid container direction="row" spacing={2} alignItems="center" justify="flex-start" style={{ marginTop: 48 }}>
            <Grid item xs={12}>
                <Typography variant="body2">
                    © 2020 | ZP | Version: beta(2020.4) |
                    {' Node env: '}
                    {process.env.NODE_ENV}
                </Typography>
            </Grid>
        </Grid>
    )
};


