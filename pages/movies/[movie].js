import Layout from '../../components/Layout'

import { getSpecificMovie } from '../api/movies'

function Movie({ movie }) {
    return (
        <Layout
            title={movie.title}
            description={`Details about the movie ${movie.title}.`}
        >
            <h1>
                {movie.title}
            </h1>
            <ul>
                {movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const movie = await getSpecificMovie(params.movie)
    return {
        props: {
            movie
        }
    }
}

export default Movie
