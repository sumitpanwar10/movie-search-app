'use client'

import { useEffect, useState } from 'react'
import Results from '@/components/Results'
import { FavoriteMovie } from '@/types/FavoriteMovie'

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([])

  useEffect(() => {
    const storedItems = localStorage.getItem('favorites')
    if (storedItems) {
      try {
        const parsed: FavoriteMovie[] = JSON.parse(storedItems)
        setFavorites(parsed)
      } catch (error) {
        console.error('Failed to parse favorites from localStorage:', error)
      }
    }
  }, [])

  return (
    <div className="p-4 w-full flex flex-col justify-center items-center">
      <h2 className="text-lg md:text-xl mb-4 self-start">My Favorites:</h2>
      <Results movies={favorites} />
    </div>
  )
}
