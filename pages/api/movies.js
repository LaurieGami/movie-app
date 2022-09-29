import * as dotenv from 'dotenv';
dotenv.config()

const TMDB_API_KEY = process.env.TMDB_API_KEY

export async function getTrendingMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`)
    const data = await response.json()
    return data.results
}

export async function getSearchMovies(search) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
    const data = await response.json()
    return {
        ...data,
        search: decodeURIComponent(search)
    }
}

export async function getSpecificMovie(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`)
    const data = await response.json()
    return data
}