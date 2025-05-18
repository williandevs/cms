'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const posts = [
  {
    id: '1',
    titulo: 'Tecnologia da Informação',
    resumo: 'Explore as últimas tendências em TI e como elas estão transformando o mundo dos negócios e a vida cotidiana.',
    imagem: 'https://blog.ead.unipar.br/wp-content/uploads/2021/04/ti.jpg',
  },
  {
    id: '2',
    titulo: 'Programação',
    resumo: 'Descubra as linguagens de programação em alta, dicas para codificação eficiente e as melhores práticas para desenvolvedores.',
    imagem: 'https://blog.hubdodesenvolvedor.com.br/wp-content/uploads/2024/03/capa-linguagens-em-alta.jpg',
  },
  {
    id: '3',
    titulo: 'Marketing Digital',
    resumo: 'Saiba como alavancar sua marca e alcançar mais clientes utilizando estratégias eficazes de marketing online.',
    imagem: 'https://uplevelmarketingdigital.com.br/wp-content/uploads/2021/03/Marketing-Digital-e-importante-para-as-empresas-scaled.jpeg',
  },
  {
    id: '4',
    titulo: 'Inteligência Artificial',
    resumo: 'Entenda o impacto da IA na automação de processos, inovação tecnológica e o futuro das indústrias.',
    imagem: 'https://phoenixnap.com/glossary/wp-content/uploads/2024/07/what-is-ai-as-a-service.jpg',
  },
]

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition duration-300">
            <img
              src={post.imagem}
              alt={post.titulo}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle className="text-xl">{post.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">{post.resumo}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-500 hover:underline font-medium"
              >
                Ler mais →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Blog
