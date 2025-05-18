import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-gray-200 text-sm px-4 py-2">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">

        {/* Redes sociais - topo no mobile, esquerda no desktop */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Informações de contato */}
        <div className="text-center md:text-right space-y-1 md:space-y-0 md:space-x-6 md:flex md:items-center">
          <span className="block md:inline">Rua Benedito Soares Pinto nº 610 - Centro - Campo Largo - PR. CEP: 83601-040</span>
          <span className="block md:inline">(41) 3292-3957</span>
          <a href="mailto:contato@s4md.com.br" className="block md:inline underline hover:text-gray-300">contato@s4md.com.br</a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
