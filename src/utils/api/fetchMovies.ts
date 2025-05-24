const API_KEY = process.env.OMDB_API_KEY

export default async function fetchMovies(query: string, page = 1) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`)
  return res.json()
}


