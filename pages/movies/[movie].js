import { getTrendingMovies, getSpecificMovie } from '../api/movies'

function Movie({ movie }) {
    return (
        <div>
            <h1>
                {movie.title}
            </h1>
            <ul>
                {movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticPaths() {
    const movies = await getTrendingMovies()
    return {
        paths: movies.map(movie => {
            return { params: { movie: movie.id.toString() } }
        }),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const movie = await getSpecificMovie(params.movie)
    return {
        props: {
            movie
        }
    }
}

export default Movie
