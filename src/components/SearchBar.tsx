'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    if(!query) return alert('Please enter a search term.')
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/search/${query}`)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs md:max-w-md flex gap-2 text-black">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border rounded px-4 py-2 w-full"
        placeholder="Enter movie title"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  )
}
