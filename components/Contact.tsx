'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: ['Shop 131, Palm Arcade', 'Opp. Chanakya Vidya School', 'Sukan Cross Road, Nikol', 'Ahmedabad, Gujarat 382350'],
      link: 'https://maps.google.com/?q=Shop+131+Palm+Arcade+Nikol+Ahmedabad',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+91 9510314824', '+91 6353272474'],
      link: 'tel:+919510314824',
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Mon - Sat: 10:00 AM - 8:00 PM', 'Sunday: Closed'],
    },
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Visit us at our clinic or get in touch for any inquiries. We're here to help you on your path to recovery.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl text-primary-blue flex-shrink-0">{info.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                    {info.link && (
                      <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="inline-block mt-3 text-primary-green hover:text-primary-blue font-semibold transition-colors">
                        {info.title === 'Address' ? 'View on Map →' : 'Call Now →'}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="grid grid-cols-2 gap-4 pt-4">
              <a href="tel:+919510314824" className="btn-primary flex items-center justify-center space-x-2">
                <FaPhone />
                <span>Call Us</span>
              </a>
              <a href="https://wa.me/919510314824" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center space-x-2">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.234567890123!2d72.6234567!3d23.0567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAzJzI0LjQiTiA3MsKwMzcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Shivay Physiotherapy Location" />
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="mt-12 text-center bg-primary-blue/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-primary-blue mb-3">Easy to Find</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">Located conveniently opposite Chanakya Vidya School on Sukan Cross Road, Nikol. Easy access from Naroda, Vastral, Odhav, and surrounding areas. Ample parking space available for patients.</p>
        </motion.div>
      </div>
    </section>
  )
}
