import Pagination from '@/components/Pagination'
import Results from '@/components/Results'
import fetchMovies from '@/utils/api/fetchMovies'

export default async function SearchResults({ params, searchParams }: any) {
  const page = searchParams.page || 1
  const movies = await fetchMovies(params.query, page)

  if (!movies || movies.Response === 'False') return <p>No results found.</p>

  return (
   
    <div className="p-4 w-full flex flex-col justify-center items-center">
      <h2 className="text-lg md:text-xl mb-4 self-start">
        {`Results for ${decodeURIComponent(params.query)}:`}
      </h2>
      <Results movies={movies.Search} />
      <Pagination totalResults={movies.totalResults} currentPage={page} query={params.query} />
    </div>
  )
}
