import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Layout from '../../components/Layout'

function Account() {
    const router = useRouter()
    const [requestToken, setRequestToken] = useState(null)
    const [accessToken, setAccessToken] = useState(null)

    useEffect(() => {
        const token1 = localStorage.getItem('request_token')
        const token2 = localStorage.getItem('access_token')
        const accountId = localStorage.getItem('account_id')
        if (token1) setRequestToken(token1)
        if (token2) setAccessToken(token2)
        if (accountId) router.push(`/account/${accountId}`)
    }, [])

    return (
        <Layout
            title="My Account"
            description="My account information on The Movie."
        >
            <h1>
                Account
            </h1>

            {!requestToken && (
                <>
                    <p>We need 3rd party authorization to create your first list</p>
                    <Link href={`/request`}><button>Authorize</button></Link>
                </>
            )}
            {requestToken && !accessToken && (
                <>
                    <p>Now login please</p>
                    <Link href={`/access/${requestToken}`}><button>Login</button></Link>
                </>
            )}
        </Layout>
    )
}

export default Account
