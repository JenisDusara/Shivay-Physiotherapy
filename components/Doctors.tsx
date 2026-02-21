'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPhoneAlt, FaCheckCircle, FaUserMd } from 'react-icons/fa'

export default function Doctors() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const doctors = [
    {
      name: 'Dr. Deep Rami',
      qualification: 'BPT',
      specialization: 'Orthopedic & Sports Rehabilitation',
      phone: '+91 9510314824',
      image: '/images/deep-rami1.jpeg',
      imagePosition: 'object-center',
      achievements: ['Certified Manual Therapist', 'Sports Injury Specialist', 'Advanced Orthopedic Rehabilitation'],
    },
    {
      name: 'Dr. Riddhi Vekariya',
      qualification: 'BPT',
      specialization: 'Neurological & Pediatric Physiotherapy',
      phone: '+91 6353272474',
      image: '/images/riddhi.jpeg',
      imagePosition: 'object-top',
      achievements: ['Pediatric Physiotherapy Expert', 'Neuro Rehabilitation Specialist', 'Womens Health Physiotherapy'],
    },
  ]

  return (
    <section id="doctors" className="py-10 bg-gray-50 flex items-center min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">

        <motion.div ref={ref} initial={{ opacity: 0, y: -10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-blue mb-2">
            Meet Our <span className="text-primary-green">Doctors</span>
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mb-3 rounded-full"></div>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Highly qualified physiotherapists dedicated to providing the best care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {doctors.map((doctor, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group h-full">

              <div className="relative w-full sm:w-[40%] h-[220px] sm:h-auto shrink-0 bg-gray-100 overflow-hidden">
                <img src={doctor.image} alt={doctor.name} className={`w-full h-full object-cover ${doctor.imagePosition} group-hover:scale-105 transition-transform duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 sm:bg-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-primary-green text-white text-[10px] uppercase font-extrabold px-2 py-1 rounded shadow-sm tracking-wide">
                  Specialist
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow bg-white">
                <div className="mb-3 border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">{doctor.name}</h3>
                    <span className="bg-blue-50 text-primary-blue font-bold text-[10px] px-2 py-0.5 rounded border border-blue-100 flex items-center gap-1">
                      <FaUserMd className="text-[10px]" /> {doctor.qualification}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Specialization</p>
                  <p className="text-primary-blue font-semibold text-sm leading-snug">{doctor.specialization}</p>
                </div>

                <div className="mb-5 flex-grow">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Expertise</p>
                  <ul className="space-y-1.5">
                    {doctor.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-[12px] md:text-[13px] font-medium">
                        <FaCheckCircle className="text-primary-green mt-[3px] shrink-0 text-[12px]" />
                        <span className="leading-tight">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={`tel:${doctor.phone}`}
                  className="mt-auto flex items-center justify-center gap-2 w-full bg-primary-blue hover:bg-primary-blue/90 text-white font-medium text-sm py-2.5 rounded transition-colors duration-200">
                  <FaPhoneAlt className="text-[12px]" />
                  Call {doctor.name.split(' ')[1]}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}