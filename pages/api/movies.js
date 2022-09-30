import * as dotenv from 'dotenv';
dotenv.config()

const TMDB_API_KEY = process.env.TMDB_API_KEY
const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN

export async function getThisWeekTrendingMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`)
    const data = await response.json()
    return data
}

export async function getTodayTrendingMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}`)
    const data = await response.json()
    return data
}

export async function getPopularMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`)
    const data = await response.json()
    return data
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

export async function requestToken() {
    const response = await fetch(`https://api.themoviedb.org/4/auth/request_token`, {
        method: 'POST',
        body: JSON.stringify({
            "redirect_to": "http://localhost:3000/account"
        }),
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${TMDB_ACCESS_TOKEN}`
        }
    })
    const data = await response.json()
    return data
}

export async function accessToken(requestToken) {
    const response = await fetch(`https://api.themoviedb.org/4/auth/access_token`, {
        method: 'POST',
        body: JSON.stringify({
            "request_token": requestToken
          }),
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${TMDB_ACCESS_TOKEN}`
        }
    })
    const data = await response.json()
    return data
}

export async function getAccountLists(accountId) {
    const response = await fetch(`https://api.themoviedb.org/4/account/${accountId}/lists`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${TMDB_ACCESS_TOKEN}`
        }
    })
    const data = await response.json()
    return data
}

