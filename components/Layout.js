import Head from 'next/head'
import {
    Container,
    Typography
} from '@mui/material';

import AppBar from './AppBar';

export default function Layout({ title = 'The Movie', description = 'The Movie', favicon = '/favicon.ico', children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href={favicon} />
            </Head>
            <main>
                <AppBar />
                <Container disableGutters>
                    {children}
                </Container>
            </main>
            <footer>
                <Container disableGutters sx={{ display: 'flex', justifyContent: 'center', pt: '20px' }}>
                    <Typography variant="caption">
                        Made with ♡ by Laurie & NextJS
                    </Typography>
                </Container>
            </footer>
        </>
    )
}