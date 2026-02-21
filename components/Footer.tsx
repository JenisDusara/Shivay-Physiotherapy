'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = ['Orthopedic Physiotherapy', 'Sports Injury Rehabilitation', 'Neurological Rehabilitation', 'Pediatric Physiotherapy', 'Post-Surgical Care', 'Manual Therapy']

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">Shivay Physiotherapy</h3>
              <p className="text-sm text-primary-green">& Wellness Center</p>
            </div>
            <p className="text-gray-400 mb-4 text-sm">Providing expert physiotherapy care with personalized treatment plans to restore mobility and enhance quality of life.</p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-primary-blue rounded-full flex items-center justify-center transition-colors"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-primary-blue rounded-full flex items-center justify-center transition-colors"><FaInstagram /></a>
              <a href="https://wa.me/919510314824" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-primary-green rounded-full flex items-center justify-center transition-colors"><FaWhatsapp /></a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}><a href={link.href} className="text-gray-400 hover:text-primary-green transition-colors text-sm">{link.name}</a></li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">• {service}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-green mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">Shop 131, Palm Arcade, Opp. Chanakya Vidya School, Sukan Cross Road, Nikol, Ahmedabad, Gujarat 382350</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-green flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:+919510314824" className="hover:text-primary-green transition">+91 9510314824</a><br />
                  <a href="tel:+916353272474" className="hover:text-primary-green transition">+91 6353272474</a>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-xs font-semibold text-primary-green mb-1">Clinic Hours</p>
                <p className="text-gray-400 text-sm">Mon - Sat: 10:00 AM - 9:00 PM</p>
                <p className="text-gray-400 text-sm">Sunday: 10:00 AM - 1:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">© {currentYear} Shivay Physiotherapy & Wellness Center. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-green transition">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-primary-green transition">Terms of Service</a>
              <span className="text-gray-600">|</span>
              <a href="#appointment" className="text-gray-400 hover:text-primary-green transition">Book Appointment</a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">Designed with care for your health and wellness</p>
        </motion.div>
      </div>
    </footer>
  )
}
