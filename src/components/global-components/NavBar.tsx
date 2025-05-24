'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import { ArrowLeft, BookmarkCheck, Home } from 'lucide-react'

export default function NavBar() {
  const router = useRouter()
  const pathname = usePathname()

  // Hide navbar on the home page
  if (pathname === '/') return null

  return (
    <nav className="bg-blue-400 shadow-md p-4 flex justify-between items-center sticky top-0 z-50 md:px-16">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1 text-white hover:underline"
      >
        <ArrowLeft size={24} />
      </button>
      <div className='flex gap-2 md:gap-6 justify-end items-center'>
       <Link href="/favorites" className="flex items-center text-white hover:underline">
         <BookmarkCheck size={24} />
       </Link>
       <Link href="/" className="flex items-center text-white hover:underline fill-white">
         <Home size={24} />
       </Link>
      </div>
    </nav>
  )
}
