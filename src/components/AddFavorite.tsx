'use client'
import { BookmarkIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function AddFavorite({movie}: {movie: any}) {
 const [isFavorite, setIsFavorite] = useState(false)


 const toggleFavorite = () => {
    const stored = JSON.parse(localStorage.getItem('favorites') || '[]')
    const exists = stored.some((m: any) => m.imdbID === movie.imdbID)

    if (exists) {
      // Remove from favorites
      const updated = stored.filter((m: any) => m.imdbID !== movie.imdbID)
      localStorage.setItem('favorites', JSON.stringify(updated))
      setIsFavorite(false)
    } else {
      // Add to favorites
      localStorage.setItem('favorites', JSON.stringify([...stored, movie]))
      setIsFavorite(true)
    }
 }

  // Load favorite status on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites') || '[]')
    const exists = stored.some((m: any) => m.imdbID === movie.imdbID)
    setIsFavorite(exists)
  }, [movie.imdbID])
  
  return (
    <BookmarkIcon
       onClick={toggleFavorite}
       className="mt-2 h-6 w-6 md:h-8 md:w-8 cursor-pointer transition hover:fill-blue-500"
       strokeWidth={2}
       fill={isFavorite ? '#3B82F6' : 'none'} // Tailwind blue-500 hex
       stroke={isFavorite ? '#3B82F6' : '#3B82F6'} // keeps border color same
     />
  )
}
