'use client'

import { useEffect, useRef, useState } from 'react'

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
    <div className="max-w-6xl mx-auto p-4 mt-28 ">
      <h2 className="text-3xl font-bold  text-center mt-[100] mb-[100px]">Galeria de Fotos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow"
          />
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
