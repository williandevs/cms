'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const getMockImages = (start: number, count: number): string[] => {
  return Array.from({ length: count }, (_, i) => `https://picsum.photos/400/300?random=${start + i}`)
}

const Galeria = () => {
  const [images, setImages] = useState<string[]>([])
  const [page, setPage] = useState(1)
  const loader = useRef<HTMLDivElement | null>(null)

  // Carregar imagens
  useEffect(() => {
    const newImages = getMockImages((page - 1) * 10, 10)
    setImages((prev) => [...prev, ...newImages])
  }, [page])

  // Observar fim da página
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1)
        }
      },
      { threshold: 1 }
    )

    if (loader.current) observer.observe(loader.current)

    return () => {
      if (loader.current) observer.unobserve(loader.current)
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-4 mt-28">
      <h2 className="text-3xl font-bold text-center mb-[100px]">Galeria de Fotos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full aspect-[4/3] rounded-lg shadow overflow-hidden">
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              priority={index < 10} // prioriza as primeiras 10 imagens para melhor UX inicial
            />
          </div>
        ))}
      </div>

      {/* Loader invisível para o scroll infinito */}
      <div ref={loader} className="h-16 mt-8 flex justify-center items-center">
        <span className="text-gray-500">Carregando mais imagens...</span>
      </div>
    </div>
  )
}

export default Galeria
