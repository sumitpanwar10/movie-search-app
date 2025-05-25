// types/AddFavoriteProps.ts
import { MovieSearchItem } from './MovieSearchResult'
import { MovieDetails } from './MovieDetails'
import { FavoriteMovie } from './FavoriteMovie'

export interface AddFavoriteProps {
  movie: MovieSearchItem | MovieDetails | FavoriteMovie
}
