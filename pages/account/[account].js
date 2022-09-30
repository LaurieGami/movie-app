import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/Layout'

import { getAccountLists } from '../api/movies'

function Acount({ lists }) {
    const router = useRouter()
    const goBack = () => router.back()

    return (
        <Layout
            title="My Acount"
            description="My account details."
        >
            <button onClick={goBack}>Go Back</button>
            <h1>
                Acount
            </h1>
            {
                lists.results.map(list => (
                    <div key={list.id}>{list.name}</div>
                ))
            }
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const lists = await getAccountLists(params.account)
    return {
        props: {
            lists
        }
    }
}

export default Acount
