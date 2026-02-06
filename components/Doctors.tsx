'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaAward, FaPhone } from 'react-icons/fa'
import Image from 'next/image'

export default function Doctors() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const doctors = [
    {
      name: 'Dr. Deep Rami',
      qualification: 'BPT, MPT (Orthopedics)',
      experience: '10+ Years',
      specialization: 'Orthopedic & Sports Rehabilitation',
      phone: '+91 9510314824',
      image: '/images/deep-rami.jpeg',
      achievements: ['Certified Manual Therapist', 'Sports Injury Specialist', 'Advanced Orthopedic Rehabilitation'],
    },
    {
      name: 'Dr. Riddhi Vekariya',
      qualification: 'BPT, MPT (Neurology)',
      experience: '8+ Years',
      specialization: 'Neurological & Pediatric Physiotherapy',
      phone: '+91 6353272474',
      image: '/images/riddhi-vekariya.jpeg',
      achievements: ['Pediatric Physiotherapy Expert', 'Neuro Rehabilitation Specialist', 'Womens Health Physiotherapy'],
    },
  ]

  return (
    <section id="doctors" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Meet Our Doctors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our team of highly qualified and experienced physiotherapists dedicated to providing you with the best care possible.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-80 overflow-hidden">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-contain bg-gray-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-sm opacity-90">{doctor.qualification}</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-primary-blue">
                    <FaGraduationCap />
                    <span className="text-sm font-semibold">{doctor.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary-green">
                    <FaAward />
                    <span className="text-sm font-semibold">Specialist</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Specialization</h4>
                  <p className="text-gray-600 text-sm">{doctor.specialization}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Achievements</h4>
                  <ul className="space-y-1">
                    {doctor.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-primary-green mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={`tel:${doctor.phone}`} className="flex items-center justify-center space-x-2 btn-primary w-full">
                  <FaPhone />
                  <span>Call {doctor.name.split(' ')[1]}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
