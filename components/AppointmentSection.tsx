'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendarCheck, FaWhatsapp, FaSpinner } from 'react-icons/fa'

export default function AppointmentSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '', doctor: '', problem: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const timeSlots = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM']
  const doctors = ['Dr. Deep Rami', 'Dr. Riddhi Vekariya']

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.doctor) {
      alert('Please fill in all required fields')
      setIsSubmitting(false)
      return
    }
    const message = `*New Appointment Request*

*Patient Name:* ${formData.name}
*Phone:* ${formData.phone}
*Preferred Date:* ${formData.date}
*Preferred Time:* ${formData.time}
*Doctor:* ${formData.doctor}
*Problem/Reason:* ${formData.problem || 'Not specified'}

_Please confirm this appointment._`
    const whatsappNumber = '919510314824'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setTimeout(() => {
      setFormData({ name: '', phone: '', date: '', time: '', doctor: '', problem: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="appointment" className="section-padding bg-gradient-to-br from-primary-blue to-primary-green">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Appointment</h2>
          <p className="text-white/90 max-w-2xl mx-auto">Fill out the form below and we will contact you via WhatsApp to confirm your appointment.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition" placeholder="Enter your full name" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition" placeholder="10 digit mobile number" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} min={today} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time *</label>
                  <select id="time" name="time" value={formData.time} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition">
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (<option key={slot} value={slot}>{slot}</option>))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="doctor" className="block text-sm font-semibold text-gray-700 mb-2">Select Doctor *</label>
                <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition">
                  <option value="">Select a doctor</option>
                  {doctors.map((doctor) => (<option key={doctor} value={doctor}>{doctor}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="problem" className="block text-sm font-semibold text-gray-700 mb-2">Reason for Visit (Optional)</label>
                <textarea id="problem" name="problem" value={formData.problem} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition resize-none" placeholder="Describe your problem or reason for appointment" />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-primary-green hover:bg-primary-green/90 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (<><FaSpinner className="animate-spin" /><span>Sending...</span></>) : (<><FaWhatsapp /><span>Send via WhatsApp</span></>)}
              </button>
              <p className="text-sm text-gray-500 text-center">* Required fields. Your request will be sent via WhatsApp.</p>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center"><FaCalendarCheck className="mr-3 text-yellow-300" />Clinic Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center"><span className="font-semibold">Monday - Saturday</span><span>10:00 AM - 8:00 PM</span></div>
                <div className="flex justify-between items-center text-yellow-300"><span className="font-semibold">Sunday</span><span>Closed</span></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Book With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Same-day appointments available</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Experienced & certified physiotherapists</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Modern equipment & facilities</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Personalized treatment plans</span></li>
                <li className="flex items-start"><span className="text-yellow-300 mr-2">✓</span><span>Affordable pricing</span></li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="mb-4">For urgent appointments, call us directly:</p>
              <div className="space-y-2">
                <a href="tel:+919510314824" className="block bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold text-center hover:bg-yellow-300 transition">📞 +91 9510314824</a>
                <a href="tel:+916353272474" className="block bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold text-center hover:bg-yellow-300 transition">📞 +91 6353272474</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


