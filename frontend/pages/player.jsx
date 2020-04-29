import { useRouter } from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core'
const ShakaPlayer = dynamic(import('shaka-player-react'), { ssr: false });


export default function Player() {
    const router = useRouter()

    const handleClick = e => {
        e.preventDefault()
        router.back()
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/shaka-player/2.5.10/controls.min.css"></link>
            </Head>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item xs={8}>
                    <Typography variant="h4">
                        {router.query ? router.query.title : ''}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton aria-label="close" onClick={handleClick}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </Grid>
            {/* Not working with given url. Probably due to CORS policy. */}
            {/* <ShakaPlayer autoPlay src={'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'} /> */}
            {/* Another streams are used to verify functionality.  */}
            {/* <ShakaPlayer autoPlay src={'https://akamai-axtest.akamaized.net/routes/lapd-v1-acceptance/www_c4/Manifest.m3u8'} /> */}
            <ShakaPlayer autoPlay src={'https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8'} />
        </>
    )
}
