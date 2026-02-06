'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      title: 'Physical Therapy',
      description: 'Physical therapy is one of the major services which we offer. Our therapists works closely with patients to help them improve their movement potential and gain a healthier and more...',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    },
    {
      title: 'Massage Therapy',
      description: 'Massage therapy is a hands-on treatment that involves manipulation of the soft tissue structures of the body to prevent and alleviate pain, discomfort and muscle spasm. Massage therapy...',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    },
    {
      title: 'Chiropractic Therapy',
      description: 'We are one of the most advanced chiropractic clinics and carry the latest chiropractic equipment which helps our doctors diagnose and treat back pains, spinal problems, neck pains and...',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    },
    {
      title: 'Work Injuries',
      description: 'If an injury at work has impeded your performance in the workplace, our work injury rehabilitation program provides an aggressive yet cautious approach to getting you back to work quickly...',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&q=80',
    },
    {
      title: 'Clinical Pilates',
      description: 'Pilates is an exercise regime designed to stimulate the deep spinal muscles, or core muscles to function more efficiently. The Pilates exercises were initially developed to assist people...',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    },
    {
      title: 'Sport Injuries',
      description: 'We are dedicated to sports medicine and focus our attention on the aggressive treatment of our athletes as well as the prevention of sports-related injuries. Whether you are a professional...',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80',
    },
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive physiotherapy services tailored to your specific needs, delivered with care and expertise.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-56 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <a href="#appointment" className="text-primary-blue hover:text-primary-green font-semibold text-sm transition-colors inline-flex items-center">
                  Find out More 
                  <span className="ml-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.8 }} className="text-center mt-12">
          <p className="text-gray-600 mb-4">Not sure which service is right for you?</p>
          <a href="#appointment" className="btn-primary inline-block">Book a Consultation</a>
        </motion.div>
      </div>
    </section>
  )
}