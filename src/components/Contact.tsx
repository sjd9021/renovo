import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 section-transition">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <button type="submit" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition duration-300">Send Message</button>
            </form>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-2 text-primary" />
                  <span className="text-gray-700">info@renovopilates.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-primary" />
                  <span className="text-gray-700">(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-primary" />
                  <span className="text-gray-700">123 Pilates St, Fitness City, FC 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact