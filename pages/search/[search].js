import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/Layout'

import { getSearchMovies } from '../api/movies'

function Search({ search }) {
    const router = useRouter()
    const goBack = () => router.back()
    console.log(search)

    return (
        <Layout
            title="Search Results"
            description="Search results."
        >
            <button onClick={goBack}>Go Back</button>
            <h1>
                Search: {search.search}
            </h1>
            {search.results.length > 0 ?
                search.results.map(movie => (
                    <li key={movie.id}>
                        <Link href={`/movies/${movie.id}`}>
                            <a>{movie.title}</a>
                        </Link>
                    </li>
                )) : (
                    <p>Sorry, we couldn't find any movies for your search. Please, try another search.</p>
                )}
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const search = await getSearchMovies(params.search)
    return {
        props: {
            search
        }
    }
}

export default Search
