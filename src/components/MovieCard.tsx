import Link from 'next/link'
import MovieImage from './MovieImage'
import AddFavorite from './AddFavorite'
export default function MovieCard({ movie }: { movie: any }) {
  const { Title, Poster, Year, imdbID } = movie

  return (
    <div className="border rounded p-2 shadow hover:shadow-lg bg-white transition-all min-w-[300px] flex flex-col items-center justify-between">
      <div className='w-full flex flex-col items-start justify-start'>
        <MovieImage imageSrc={Poster} alt={Title} />
        <h3 className="mt-3 font-bold text-lg line-clamp-2">{Title}</h3>
        <p className="text-sm text-gray-600">{Year}</p>
      </div>
      <div className="flex items-center w-full justify-between mt-2">
        <Link
          href={`/movie/${imdbID}`}
          className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          View Details
        </Link>
        <AddFavorite movie={movie}/>
      </div>
    </div>
  )
}
