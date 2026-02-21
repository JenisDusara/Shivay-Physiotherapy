'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
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
        <div className="flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center space-x-3">
            <img src="images/logo1.jpeg" alt="Shivay Physiotherapy Logo" className="w-10 h-10 object-contain" />
            <div className="block">
              <h1 className="text-lg font-bold text-primary-blue leading-tight">Shivay Physiotherapy</h1>
              <p className="text-xs text-primary-green">& Rehabilitation Clinic</p>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a key={item.name} href={item.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-700 hover:text-primary-blue font-medium transition-colors duration-300 text-sm">
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop Call Button */}
          <motion.a href="tel:+919510314824" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-2 btn-primary text-sm">
            <FaPhoneAlt />
            <span>Call Now</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-primary-blue text-2xl p-1">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <nav className="container-custom px-4 py-2">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center py-3 px-2 text-gray-700 hover:text-primary-blue hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium border-b border-gray-50 last:border-0">
                  {item.name}
                </a>
              ))}
              <div className="py-3">
                <a href="tel:+919510314824" className="flex items-center justify-center space-x-2 btn-primary w-full">
                  <FaPhoneAlt />
                  <span>Call Now</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}