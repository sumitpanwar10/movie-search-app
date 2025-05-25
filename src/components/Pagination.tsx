'use client'
import { PaginationProps } from '@/types/PaginationProps'
import Link from 'next/link'

export default function Pagination({ totalResults, currentPage, query }: PaginationProps) {
  const totalPages = Math.ceil(Number(totalResults) / 10)

  if (totalPages <= 1) return null

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <Link key={i} href={`/search/${query}?page=${i + 1}`}>
          <button
            className={`px-4 py-2 rounded border text-sm transition ${
              Number(currentPage) === i + 1
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-blue-100'
            }`}
          >
            {i + 1}
          </button>
        </Link>
      ))}
    </div>
  )
}
