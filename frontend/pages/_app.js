import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles.css'
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import Head from 'next/head'

const lightTheme = createMuiTheme({
    palette: {
        type: "light",
    }
});

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        background: {
            default: "#000000",
            paper: "#000000"
        }
    }
});

const App = (props) => {
    const { Component, pageProps } = props;
    if (props.router.route != '/player') {
        return (
            <>
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                </Head>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    <Container>
                        <Grid
                            container
                            justify="space-between"
                            direction="column"
                            style={{ paddingTop: '48px' }}
                        >
                            <Navigation />
                            <Grid
                                container
                                justify="flex-start"
                                direction="column"
                            >
                                <Component pageProps={pageProps} />
                            </Grid>
                            <Footer />
                        </Grid>
                    </Container>
                </ThemeProvider>
            </>
        )
    }
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Container>
                    <Grid
                        container
                        justify="space-between"
                        direction="column"
                        spacing={3}
                        style={{ paddingTop: '48px' }}
                    >
                        <Component pageProps={pageProps} />
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default App