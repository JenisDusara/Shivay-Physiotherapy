'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const testimonials = [
    { name: 'Jenis Dusara', location: 'Bapunagar, Ahmedabad', rating: 5, text: 'Excellent service! Dr. Deep Rami helped me recover from a severe back injury. His treatment approach is professional and effective. Highly recommended!', treatment: 'Back Pain Treatment' },
    { name: 'Priya Patel', location: 'Naroda, Ahmedabad', rating: 5, text: 'Dr. Riddhi Vekariya is amazing! She treated my daughter for cerebral palsy with such care and patience. We saw remarkable improvement within weeks.', treatment: 'Pediatric Physiotherapy' },
    { name: 'Amit Shah', location: 'Vastral, Ahmedabad', rating: 5, text: 'Best physiotherapy clinic in the area! Professional staff, modern equipment, and effective treatments. My sports injury was completely healed.', treatment: 'Sports Injury' },
    { name: 'Sneha Desai', location: 'Odhav, Ahmedabad', rating: 5, text: 'Very satisfied with the treatment for my mother\'s knee arthritis. The doctors are knowledgeable and caring. The clinic is clean and well-maintained.', treatment: 'Arthritis Management' },
    { name: 'Karan Mehta', location: 'Nikol, Ahmedabad', rating: 5, text: 'Post-surgery rehabilitation was smooth and painless thanks to Dr. Deep. His expertise and personalized care made my recovery faster than expected.', treatment: 'Post-Surgical Care' },
    { name: 'Meera Joshi', location: 'Narol, Ahmedabad', rating: 5, text: 'I had chronic neck pain for years. After just a few sessions with Dr. Riddhi, I feel so much better! She explains everything clearly and is very professional.', treatment: 'Neck Pain Relief' },
  ]

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Patient Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Hear what our satisfied patients have to say about their experience with Shivay Physiotherapy.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="text-3xl text-primary-green/20 mb-3"><FaQuoteLeft /></div>
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (<FaStar key={i} className="text-yellow-400 text-sm" />))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">{testimonial.text}</p>
              <div className="mb-3">
                <span className="inline-block bg-primary-green/10 text-primary-green text-xs font-semibold px-3 py-1 rounded-full">{testimonial.treatment}</span>
              </div>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 bg-primary-blue/10 rounded-full flex items-center justify-center text-primary-blue font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="text-center mt-10">
          <p className="text-gray-600 mb-4 text-sm md:text-base">Join hundreds of satisfied patients who trust us with their recovery</p>
          <a href="#appointment" className="btn-primary inline-block">Book Your Appointment</a>
        </motion.div>
      </div>
    </section>
  )
}