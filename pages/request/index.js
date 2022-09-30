import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { requestToken } from '../api/movies'

function Request({ data }) {
    const router = useRouter()
    const [error, setError] = useState('')

    useEffect(() => {
        if (data?.success) {
            router.push(`https://www.themoviedb.org/auth/access?request_token=${data.request_token}`)
            localStorage.setItem('request_token', data.request_token)
        } else {
            setError(data?.status_message)
        }
    }, [data])

    return (
        <Layout
            title="Request 3rd party authorization"
            description="Request 3rd party authorization."
        >
            <button onClick={() => router.back()}>Back</button>
            <h1>
                Request 3rd party authorization
            </h1>
            {error && (
                <p>{error}</p>
            )}
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await requestToken()

    return {
      props: {
        data
      },
    }
  }

export default Request
