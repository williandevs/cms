'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import TopBar from './TopBar';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>

      <TopBar />
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Logo Meu Site"
            className="h-12 w-auto"
          />


          {/* Ícone do menu mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">Sobre</Link>
            <Link href="/services" className="hover:text-blue-600">Serviços</Link>
            <Link href="/plans" className="hover:text-blue-600">Planos</Link>
            <Link href="/galery" className="hover:text-blue-600">Galeria</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="hover:text-blue-600">Contato</Link>
          </nav>
        </div>

        {/* Menu Mobile Dropdown */}
        {menuOpen && (
          <nav className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Sobre</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Serviços</Link>
            <Link href="/plans" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Planos</Link>
            <Link href="/galery" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Galeria</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Blog</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Contato</Link>
          </nav>
        )}
      </header>
    </>


  );
};

export default Header;
