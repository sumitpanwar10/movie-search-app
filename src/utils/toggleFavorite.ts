import { Dispatch, SetStateAction } from 'react'
import { MovieSearchItem } from '@/types/MovieSearchResult'
import { MovieDetails } from '@/types/MovieDetails'

type ToggleFavoriteParams = {
  setIsFavorite: Dispatch<SetStateAction<boolean>>
  movie: MovieSearchItem | MovieDetails
}

export default function toggleFavorite({ setIsFavorite, movie }: ToggleFavoriteParams) {
  const stored: (MovieSearchItem | MovieDetails)[] = JSON.parse(localStorage.getItem('favorites') || '[]')
  const exists = stored.some((m) => m.imdbID === movie.imdbID)

  // If the movie already exists in favorites, remove it; otherwise, add it
  if (exists) {
    const updated = stored.filter((m) => m.imdbID !== movie.imdbID)
    localStorage.setItem('favorites', JSON.stringify(updated))
    setIsFavorite(false)
  } else {
    localStorage.setItem('favorites', JSON.stringify([...stored, movie]))
    setIsFavorite(true)
  }
}
