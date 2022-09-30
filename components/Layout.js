import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ title = 'The Movie', description = 'The Movie', favicon = '/favicon.ico', children }) {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Account",
            path: "/account"
        },
    ];
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href={favicon} />
            </Head>
            <main>
                <ul>
                    {links.map(link => (
                        <li key={link.title}>
                            <Link href={link.path} key={link.title}><a>{link.title}</a></Link>
                        </li>
                    )
                    )}
                </ul>
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