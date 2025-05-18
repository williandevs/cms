import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { Code, Monitor, Smartphone } from 'lucide-react'

const services = [
  {
    icon: <Monitor size={32} className="text-blue-500" />,
    title: 'Websites Responsivos',
    description:
      'Desenvolvemos websites modernos, rápidos e responsivos, que se adaptam perfeitamente a qualquer tamanho de tela. Garantimos uma experiência de navegação fluida e intuitiva em computadores, tablets e smartphones.',
  },
  {
    icon: <Code size={32} className="text-green-500" />,
    title: 'Sistemas Sob Medida',
    description:
      'Criamos soluções personalizadas para atender às necessidades específicas do seu negócio. Desde painéis administrativos até integrações com APIs, nossos sistemas são seguros, escaláveis e fáceis de usar.',
  },
  {
    icon: <Smartphone size={32} className="text-purple-500" />,
    title: 'Design Mobile First',
    description:
      'Pensamos primeiro na experiência mobile para garantir máxima usabilidade e acessibilidade. Layouts otimizados, carregamento rápido e navegação simplificada para o público que acessa seu site pelo celular.',
  },
]


const Services = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50 mt-[100px] mb-[100px]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Nossos Serviços</h2>
        <p className="text-gray-600">Soluções digitais sob medida para o seu sucesso.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Services
