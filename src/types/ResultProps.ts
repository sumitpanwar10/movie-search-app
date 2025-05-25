// types/ResultsProps.ts
import { MovieSearchItem } from './MovieSearchResult'
import { FavoriteMovie } from './FavoriteMovie'

export interface ResultsProps {
  movies: (MovieSearchItem | FavoriteMovie)[]
}
