import React from 'react';
import Button from '@material-ui/core/Button';
import MovieIcon from '@material-ui/icons/Movie';
import Router from 'next/router'

export default function PlayButton({ Title }) {
    return (
        <Button
            variant="contained"
            color="primary"
            startIcon={<MovieIcon />}
            onClick={() => Router.push(`/player/?title=${Title}`)}
        >
            Play
        </Button>
    )
};


