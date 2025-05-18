import Image from 'next/image'

const Sobre = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 text-gray-800 mt-[100px]">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Sobre Nós</h2>
          <p className="text-lg leading-relaxed mb-4">
            Na <span className="font-semibold text-blue-600">S4MD</span>, transformamos ideias em soluções digitais inovadoras. Somos uma equipe apaixonada por tecnologia e design, dedicada a criar websites e aplicações que aliam performance, usabilidade e estética.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Com foco em inovação e nas melhores práticas do mercado, desenvolvemos projetos sob medida para atender às necessidades únicas de cada cliente. Desde sites institucionais até plataformas complexas, nossa missão é entregar resultados que superem expectativas.
          </p>
          <p className="text-lg leading-relaxed">
            Aqui, acreditamos que a tecnologia deve ser acessível e eficiente, proporcionando experiências digitais que conectam marcas e pessoas de forma simples e impactante.
          </p>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center relative w-full max-w-[600px] h-[450px] rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/sobre.jpg"
            alt="Sobre Nós"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

      </div>
    </section>
  )
}

export default Sobre
