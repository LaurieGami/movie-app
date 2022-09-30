import Link from 'next/link'
import Head from 'next/head'

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
                <div>
                    {children}
                </div>
            </main>
            <footer>
                <p>Made with love by Laurie and NextJS</p>
            </footer>
        </>
    )
}