import React from 'react'
import MovieCard from './MovieCard'
import ErrorBoundary from './global-components/ErrorBoundary'
import { ResultsProps } from '@/types/ResultProps'
import { FavoriteMovie } from '@/types/FavoriteMovie'
import { MovieSearchItem } from '@/types/MovieSearchResult'

export default function Results({ movies }: ResultsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-full md:container">
      {movies.map((movie: MovieSearchItem | FavoriteMovie) => (
        <ErrorBoundary key={movie.imdbID}>
          <MovieCard movie={movie} />
        </ErrorBoundary>
      ))}
    </div>
  )
}
