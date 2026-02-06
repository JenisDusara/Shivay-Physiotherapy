'use client'

import { motion } from 'framer-motion'
import { FaCalendarCheck, FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue leading-tight">
              Your Journey to<span className="text-primary-green"> Recovery </span>Starts Here
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg text-gray-600">
              Experience expert physiotherapy care with personalized treatment plans designed to restore your mobility and enhance your quality of life.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToAppointment} className="btn-primary flex items-center justify-center space-x-2">
                <FaCalendarCheck />
                <span>Book Appointment</span>
              </button>
              <a href="https://wa.me/919510314824" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center space-x-2">
                <FaWhatsapp />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue">5000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue">15+</div>
                <div className="text-sm text-gray-600">Treatments</div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/demo.avif" alt="Physiotherapy treatment" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 to-transparent"></div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1 }} className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center">
                  <FaCalendarCheck className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Mon - Sat</div>
                  <div className="text-sm text-gray-600">10:00 - 20:00</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
