'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'

export default function MovieImage({ imageSrc, alt }: { imageSrc: string; alt: string }) {
  const fallbackImage = '/images/fallback.webp'
  const [imgSrc, setImgSrc] = useState(fallbackImage) 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Only use imageSrc if it's a valid URL
    if (imageSrc && imageSrc !== 'N/A') {
      setImgSrc(imageSrc)
    }
  }, [imageSrc])

  const handleError = () => {
    setImgSrc(fallbackImage)
  }

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  return (
    <div className="relative w-full h-72">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white z-10">
          <Spinner />
        </div>
      )}

      <Image
        src={imgSrc}
        onError={handleError}
        onLoadingComplete={handleLoadingComplete}
        alt={alt}
        fill
        className="object-cover rounded"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    </div>
  )
}
