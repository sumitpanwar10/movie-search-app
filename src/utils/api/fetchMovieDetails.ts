const API_KEY = process.env.OMDB_API_KEY

export default async function fetchMovieDetails(id: string){
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
  return res.json()
}