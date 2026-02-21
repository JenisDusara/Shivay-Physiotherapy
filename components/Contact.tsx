'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const cards = [
    {
      icon: <FaMapMarkerAlt className="text-primary-blue text-xl" />,
      title: 'Address',
      details: ['Shop 131, Palm Arcade', 'Opp. Chanakya Vidya School', 'Sukan Cross Road, Nikol', 'Ahmedabad, Gujarat 382350'],
      link: { href: 'https://maps.google.com/?q=Shop+131+Palm+Arcade+Nikol+Ahmedabad', label: 'View on Map →' },
    },
    {
      icon: <FaPhoneAlt className="text-primary-blue text-xl" />,
      title: 'Phone',
      details: ['+91 9510314824', '+91 6353272474'],
      link: { href: 'tel:+919510314824', label: 'Call Now →' },
    },
    {
      icon: <FaClock className="text-primary-blue text-xl" />,
      title: 'Working Hours',
      details: ['Mon - Sat: 10:00 AM - 8:00 PM', 'Sunday: Closed'],
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-3">Get In Touch</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Visit us at our clinic or get in touch for any inquiries. We're here to help you on your path to recovery.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Info Cards */}
          <div className="space-y-4">
            {cards.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                    {card.details.map((d, idx) => (
                      <p key={idx} className="text-gray-500 text-sm leading-relaxed">{d}</p>
                    ))}
                    {card.link && (
                      <a href={card.link.href} target={card.link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="inline-block mt-3 text-primary-green hover:text-primary-blue font-semibold text-sm transition-colors">
                        {card.link.label}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Map */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            className="h-[460px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9!2d72.6567!3d23.0419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86c32674b6c5%3A0x5a01b50e3f0c7e9!2sNikol%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Shivay Physiotherapy Location" />
          </motion.div>
        </div>
      </div>

      {/* Floating buttons */}
      <div className="fixed right-4 bottom-8 flex flex-col gap-3 z-50">
        <a href="tel:+919510314824" className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
          <FaPhoneAlt className="text-lg" />
        </a>
        <a href="https://wa.me/919510314824" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
          <FaWhatsapp className="text-xl" />
        </a>
      </div>
    </section>
  )
}