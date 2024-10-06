import React from 'react'
import { Instagram, Facebook } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Renovo Pilates</h3>
            <p className="text-sm">Rejuvenate • Renovate • Transform</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent transition duration-300"><Instagram size={24} /></a>
            <a href="#" className="hover:text-accent transition duration-300"><Facebook size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Renovo Pilates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer