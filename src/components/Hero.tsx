import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-32 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Body and Mind</h2>
        <p className="text-xl mb-8">Experience the power of Pilates at Renovo Pilates Studio</p>
        <a href="#contact" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-secondary transition duration-300">
          Book a Class
        </a>
      </div>
    </section>
  )
}

export default Hero