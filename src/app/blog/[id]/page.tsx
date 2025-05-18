interface PostProps {
  params: {
    id: string
  }
}

const posts: Record<string, { titulo: string; conteudo: string; imagem: string }> = {
  '1': {
    titulo: 'Tecnologia da Informação',
    conteudo: `Explore as últimas tendências em TI e como elas estão transformando o mundo dos negócios e a vida cotidiana. 
Desde a computação em nuvem até a segurança cibernética, descubra as inovações que estão moldando o futuro.`,
    imagem: 'https://blog.ead.unipar.br/wp-content/uploads/2021/04/ti.jpg',
  },
  '2': {
    titulo: 'Programação',
    conteudo: `Descubra as linguagens de programação em alta, dicas para codificação eficiente e as melhores práticas para desenvolvedores.
Aprofunde seus conhecimentos e melhore sua carreira com conteúdos atualizados e exemplos práticos.`,
    imagem: 'https://blog.hubdodesenvolvedor.com.br/wp-content/uploads/2024/03/capa-linguagens-em-alta.jpg',
  },
  '3': {
    titulo: 'Marketing Digital',
    conteudo: `Saiba como alavancar sua marca e alcançar mais clientes utilizando estratégias eficazes de marketing online.
Entenda SEO, redes sociais, campanhas pagas e ferramentas que potencializam seu negócio.`,
    imagem: 'https://uplevelmarketingdigital.com.br/wp-content/uploads/2021/03/Marketing-Digital-e-importante-para-as-empresas-scaled.jpeg',
  },
  '4': {
    titulo: 'Inteligência Artificial',
    conteudo: `Entenda o impacto da IA na automação de processos, inovação tecnológica e o futuro das indústrias.
Veja como machine learning e deep learning estão sendo aplicados para resolver problemas reais.`,
    imagem: 'https://phoenixnap.com/glossary/wp-content/uploads/2024/07/what-is-ai-as-a-service.jpg',
  },
}

const PostPage = ({ params }: PostProps) => {
  const post = posts[params.id]

  if (!post) {
    return (
      <div className="p-6 text-center text-red-500">
        Post não encontrado
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <img
          src={post.imagem}
          alt={post.titulo}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{post.titulo}</h1>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.conteudo}</p>
        </div>
      </div>
    </div>
  )
}

export default PostPage
