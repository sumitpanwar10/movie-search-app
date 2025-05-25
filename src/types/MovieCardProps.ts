// types/MovieCardProps.ts
import { MovieSearchItem } from './MovieSearchResult'
import { MovieDetails } from './MovieDetails'
import { FavoriteMovie } from './FavoriteMovie'

export interface MovieCardProps {
  movie: MovieSearchItem | MovieDetails | FavoriteMovie
}
