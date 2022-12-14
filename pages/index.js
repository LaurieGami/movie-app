
import { useRouter } from 'next/router'
import { useState } from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import MovieNav from '../components/movies/MovieNav'
import MovieNavItem from '../components/movies/MovieNavItem'
import MovieList from '../components/movies/MovieList'

import { getThisWeekTrendingMovies, getTodayTrendingMovies, getPopularMovies } from './api/movies'

const trendingCategories = [
  {
    id: 'day',
    displayName: 'Today',
    dataName: 'trendingToday'
  },
  {
    id: 'week',
    displayName: 'This Week',
    dataName: 'trendingThisWeek'
  }
]

function Home(props) {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [trending, setTrending] = useState(trendingCategories[0].id)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search !== '') {
      const encodedSearch = encodeURIComponent(search.toLowerCase())
      router.push(`/search/${encodedSearch}`)
    }
  }

  console.log(props)

  return (
    <Layout
      title="The Movies"
      description="Search for and create list of your favourite movies."
    >
      <Hero />
      
      <section>
        <div>
          <h3>What's Popular</h3>
          <MovieList {...props.popular} />
        </div>
        <div>
          <h3>Trending</h3>
          <MovieNav>
            {trendingCategories.map(category => (
              <MovieNavItem
                key={category.id}
                handleClick={() => setTrending(category.id)}
                isActive={trending === category.id}
              >
                {category.displayName}
              </MovieNavItem>
            ))}
          </MovieNav>
          <MovieList {...props[trendingCategories.find(c => c.id === trending).dataName]} />
        </div>

      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const trendingToday = await getTodayTrendingMovies()
  const trendingThisWeek = await getThisWeekTrendingMovies()
  const popular = await getPopularMovies()
  return {
    props: {
      trendingToday,
      trendingThisWeek,
      popular
    },
  }
}

export default Home
