import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white section-transition">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">About Renovo Pilates</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Pilates Studio" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg mb-6 text-gray-700">
              At Renovo Pilates, we believe in the transformative power of Pilates to strengthen your body, improve flexibility, and enhance overall well-being. Our expert instructors are dedicated to helping you achieve your fitness goals in a supportive and motivating environment.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're a beginner or an experienced practitioner, our tailored programs cater to all levels, ensuring you get the most out of every session. Join us and experience the Renovo difference!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About