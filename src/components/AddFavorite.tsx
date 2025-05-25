// AddFavorite.tsx
'use client'
import { BookmarkIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { AddFavoriteProps } from '@/types/AddFavoriteProps'

export default function AddFavorite({ movie }: AddFavoriteProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    const stored: AddFavoriteProps['movie'][] = JSON.parse(localStorage.getItem('favorites') || '[]')
    const exists = stored.some((m) => m.imdbID === movie.imdbID)

    if (exists) {
      const updated = stored.filter((m) => m.imdbID !== movie.imdbID)
      localStorage.setItem('favorites', JSON.stringify(updated))
      setIsFavorite(false)
    } else {
      localStorage.setItem('favorites', JSON.stringify([...stored, movie]))
      setIsFavorite(true)
    }
  }

  useEffect(() => {
    const stored: AddFavoriteProps['movie'][] = JSON.parse(localStorage.getItem('favorites') || '[]')
    const exists = stored.some((m) => m.imdbID === movie.imdbID)
    setIsFavorite(exists)
  }, [movie.imdbID])

  return (
    <BookmarkIcon
      onClick={toggleFavorite}
      className="mt-2 h-6 w-6 md:h-8 md:w-8 cursor-pointer transition hover:fill-blue-500"
      strokeWidth={2}
      fill={isFavorite ? '#3B82F6' : 'none'}
      stroke={isFavorite ? '#3B82F6' : '#3B82F6'}
    />
  )
}
