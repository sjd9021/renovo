import React from 'react'

const Services: React.FC = () => {
  const services = [
    { title: 'Mat Pilates', description: 'Classic Pilates exercises performed on a mat to improve core strength and flexibility.' },
    { title: 'Reformer Pilates', description: 'Pilates exercises using the reformer machine for a full-body workout with added resistance.' },
    { title: 'Private Sessions', description: 'One-on-one sessions tailored to your specific needs and goals.' },
    { title: 'Group Classes', description: 'Energizing group sessions for all levels in a motivating atmosphere.' },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 section-transition">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services