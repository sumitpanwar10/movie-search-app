import AddFavorite from "@/components/AddFavorite"
import MovieImage from "@/components/MovieImage"
import fetchMovieDetails from "@/utils/api/fetchMovieDetails"
import { Star } from "lucide-react"

export default async function MovieDetail({ params }: any) {
  const movie = await fetchMovieDetails(params.id)

  return (
    <div className="p-4 mx-auto container flex flex-col gap-4  w-full md:w-1/3">
     <div className="flex flex-row justify-between items-center">
      <h1 className="text-lg md:text-3xl font-bold mt-2 w-4/5">{movie.Title}</h1>
      <AddFavorite movie={movie} />
     </div>
      <div className="h-[2px] w-full bg-gray-200" />
      <div className="w-full">
       <MovieImage imageSrc={movie.Poster} alt={movie.Title} />
      </div>
      <div className="flex flex-col justify-start items-start mt-2 gap-1 ">
       <p><strong>Plot:</strong> {movie.Plot}</p>
       <p><strong>Genre:</strong> {movie.Genre}</p>
       <p><strong>Director:</strong> {movie.Director}</p>
       <p><strong>Cast:</strong> {movie.Actors}</p>
       <div className="flex flex-row gap-1">
        <p>
         <strong>Rating:</strong> {movie.imdbRating}
        </p>
        <Star className="text-yellow-400 fill-yellow-400"/>
       </div>
      </div>

    </div>
  )
}
