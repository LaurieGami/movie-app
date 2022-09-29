import { useRouter } from 'next/router'
import { useState } from 'react'

import Layout from '../components/Layout'

function Home() {
  const router = useRouter()
  const [search, setSearch] = useState('')

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

  return (
    <Layout
      title="The Movies"
      description="Search for and create list of your favourite movies."
    >
      <h1>
        Welcome to The Movies
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </Layout>
  )
}

export default Home
