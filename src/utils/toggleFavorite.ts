export default function toggleFavorite({setIsFavorite, movie, }: {setIsFavorite: (value: boolean) => void, movie: any, imdbID: string}) {
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