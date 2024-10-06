import React from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/renovo-pilates-logo.png" alt="Renovo Pilates Logo" className="h-12 mr-4" />
          <h1 className="text-2xl font-bold text-primary">Renovo Pilates</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-primary hover:text-secondary transition duration-300">About</a>
          <a href="#services" className="text-primary hover:text-secondary transition duration-300">Services</a>
          <a href="#testimonials" className="text-primary hover:text-secondary transition duration-300">Testimonials</a>
          <a href="#contact" className="text-primary hover:text-secondary transition duration-300">Contact</a>
        </nav>
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <a href="#about" className="block px-4 py-2 text-primary hover:bg-gray-100">About</a>
          <a href="#services" className="block px-4 py-2 text-primary hover:bg-gray-100">Services</a>
          <a href="#testimonials" className="block px-4 py-2 text-primary hover:bg-gray-100">Testimonials</a>
          <a href="#contact" className="block px-4 py-2 text-primary hover:bg-gray-100">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Header