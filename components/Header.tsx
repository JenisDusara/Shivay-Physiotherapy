'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa'


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <img 
                src="images/logo1.jpeg" 
                alt="Shivay Physiotherapy Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary-blue leading-tight">Shivay Physiotherapy</h1>
              <p className="text-xs text-primary-green">& Wellness Center</p>
            </div>
          </motion.div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a key={item.name} href={item.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-gray-700 hover:text-primary-blue font-medium transition-colors duration-300">
                {item.name}
              </motion.a>
            ))}
          </nav>
          <motion.a href="tel:+919510314824" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="hidden md:flex items-center space-x-2 btn-primary">
            <FaPhoneAlt />
            <span>Call Now</span>
          </motion.a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-primary-blue text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-gray-700 hover:text-primary-blue hover:bg-gray-50 px-4 rounded transition-colors duration-300">
                {item.name}
              </a>
            ))}
            <a href="tel:+919510314824" className="block mt-4 text-center btn-primary">
              <FaPhone className="inline mr-2" />
              Call Now
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  )
}