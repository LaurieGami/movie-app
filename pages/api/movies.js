import * as dotenv from 'dotenv';
dotenv.config()

const TMDB_API_KEY = process.env.TMDB_API_KEY

export async function getTrendingMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`)
    const data = await response.json()
    return data.results
}