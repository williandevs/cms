const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 fixed bottom-0 left-0 w-full">
      © {new Date().getFullYear()} Meu Site. Todos os direitos reservados.
    </footer>
  )
}

export default Footer;
