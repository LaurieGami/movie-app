import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { accessToken } from '../api/movies'

function Access({ data }) {
    const router = useRouter()
    const [error, setError] = useState('')

    useEffect(() => {
        if (data?.success) {
            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('account_id', data.account_id)
            router.push(`/account`)
        } else {
            setError(data?.status_message)
        }
    }, [data])

    return (
        <Layout
            title="Access"
            description="Access."
        >
            <h1>
                Access
            </h1>
            {error && (
                <>
                    <p>{error}</p>
                    <a href={`https://www.themoviedb.org/auth/access?request_token=${data.request_token}`}>Click here if you need to approve your request token</a>
                </>
            )}
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const results = await accessToken(params.access)

    const data = {
        ...results,
        request_token: params.access
    }

    return {
      props: {
        data,
      },
    }
  }

export default Access
