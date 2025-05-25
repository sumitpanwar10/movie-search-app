export interface MovieSearchItem {
  Title: string
  Year: string
  imdbID: string
  Type: 'movie' | 'series' | 'episode'
  Poster: string
}

export interface MovieSearchResponse {
  Search: MovieSearchItem[]
  totalResults: string
  Response: 'True' | 'False'
  Error?: string
}

export interface SearchResultsParams {
  params: { query: string }
  searchParams: { page?: string }
}

export interface MovieDetailParams {
  params: { id: string }
}
