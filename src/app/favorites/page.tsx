'use client'

import { useEffect, useState } from 'react'
import Results from '@/components/Results'

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([])

  useEffect(() => {
    const storedItems = localStorage.getItem('favorites')
    if (storedItems) setFavorites(JSON.parse(storedItems))
  }, [])

  return (
    <div className="p-4 w-full flex flex-col justify-center items-center">
      <h2 className="text-lg md:text-xl mb-4 self-start">My Favorites:</h2>
      <Results movies={favorites} />
    </div>
  )
}
