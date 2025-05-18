'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    imagem: '/banner1.png',
    titulo: 'Tecnologia de Ponta',
    subtitulo: 'Aplicamos as tecnologias mais avançadas para elevar a qualidade dos seus projetos.',
  },

  {
    imagem: '/banner2.jpg',
    titulo: 'Performance e Resultado',
    subtitulo: 'Sites rápidos, otimizados e pensados para gerar resultados reais.',
  },

  {
    imagem: '/banner3.jpg',
    titulo: 'Design e Ergonomia',
    subtitulo: 'Interfaces intuitivas e elegantes para a melhor experiência do usuário.',
  }

];

const Carousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!instanceRef.current) return;

    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [instanceRef]);

  const nextSlide = () => instanceRef.current?.next();
  const prevSlide = () => instanceRef.current?.prev();

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, i) => (
          <div key={i} className="keen-slider__slide relative">
            <Image
              src={slide.imagem}
              alt={slide.titulo}
              width={1200}
              height={600}
              className="w-full h-[600px] object-cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white text-center p-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.titulo}</h2>
              <p className="text-lg md:text-xl">{slide.subtitulo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white z-10"
        aria-label="Próximo slide"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
