import React from 'react'

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: 'Sarah M.', text: 'Renovo Pilates has completely transformed my body and mind. The instructors are amazing!' },
    { name: 'John D.', text: 'Ive never felt stronger or more flexible. The personalized attention is unmatched.' },
    { name: 'Emily L.', text: 'As a beginner, I was nervous, but the team at Renovo made me feel welcome and supported.' },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white section-transition">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="mb-4 italic text-gray-700">"{testimonial.text}"</p>
              <p className="font-semibold text-secondary">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials