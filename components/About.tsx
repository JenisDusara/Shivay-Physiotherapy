'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAward, FaHeart, FaUserMd, FaCheckCircle } from 'react-icons/fa'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    { icon: <FaUserMd />, title: 'Expert Doctors', description: 'Highly qualified and experienced physiotherapists' },
    { icon: <FaHeart />, title: 'Patient-Centered Care', description: 'Personalized treatment plans for every patient' },
    { icon: <FaAward />, title: 'Modern Equipment', description: 'State-of-the-art facilities and equipment' },
  ]

  const points = ['Evidence-based treatment approaches', 'Comprehensive assessment and diagnosis', 'Manual therapy and exercise prescription', 'Post-surgical rehabilitation', 'Sports injury management', 'Pain management techniques', 'Home visit service available']

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">About Shivay Physiotherapy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Dedicated to providing exceptional physiotherapy and rehabilitation services to help you achieve optimal health and wellness.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-4">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">At Shivay Physiotherapy & Rehabilitation Clinic, we are committed to delivering high-quality, evidence-based physiotherapy services. Our team of experienced physiotherapists uses the latest techniques and equipment to ensure the best possible outcomes for our patients.</p>
            <div className="space-y-2">
              {points.map((point, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary-green text-lg mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative mt-6 md:mt-0">
            <div className="relative h-[280px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/clinic.jpeg" alt="Physiotherapy clinic" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center md:text-left">
              <div className="text-3xl text-primary-blue mb-3 flex justify-center md:justify-start">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}