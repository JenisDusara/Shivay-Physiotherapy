'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendarCheck, FaWhatsapp, FaSpinner, FaPhoneAlt } from 'react-icons/fa'

export default function AppointmentSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '', doctor: '', problem: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const timeSlots = ['Morning (10 AM - 12 PM)', 'Afternoon (12 PM - 4 PM)', 'Evening (4 PM - 8 PM)']
  const doctors = ['Dr. Deep Rami', 'Dr. Riddhi Vekariya']

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.doctor) {
      alert('Please fill in all required fields')
      setIsSubmitting(false)
      return
    }
    const message = `*New Appointment Request*\n\n*Patient Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Preferred Date:* ${formData.date}\n*Preferred Time:* ${formData.time}\n*Doctor:* ${formData.doctor}\n*Problem/Reason:* ${formData.problem || 'Not specified'}\n\n_Please confirm this appointment._`
    window.open(`https://wa.me/919510314824?text=${encodeURIComponent(message)}`, '_blank')
    setTimeout(() => {
      setFormData({ name: '', phone: '', date: '', time: '', doctor: '', problem: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const today = new Date().toISOString().split('T')[0]

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue/40 transition bg-gray-50 placeholder-gray-400"

  return (
    <section id="appointment" className="section-padding bg-gradient-to-br from-primary-blue to-primary-green relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3">Appointments</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Appointment</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Fill out the form below and we will contact you via WhatsApp to confirm your appointment.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" className={inputClass} placeholder="10 digit mobile number" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Preferred Date *</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} min={today} required className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Preferred Time *</label>
                  <select name="time" value={formData.time} onChange={handleChange} required className={inputClass}>
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (<option key={slot} value={slot}>{slot}</option>))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Select Doctor *</label>
                <select name="doctor" value={formData.doctor} onChange={handleChange} required className={inputClass}>
                  <option value="">Select a doctor</option>
                  {doctors.map((d) => (<option key={d} value={d}>{d}</option>))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Reason for Visit (Optional)</label>
                <textarea name="problem" value={formData.problem} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} placeholder="Describe your problem or reason for appointment" />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-primary-green hover:bg-primary-green/90 text-white px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (<><FaSpinner className="animate-spin" /><span>Sending...</span></>) : (<><FaWhatsapp className="text-lg" /><span>Send via WhatsApp</span></>)}
              </button>
              <p className="text-xs text-gray-400 text-center">* Required fields. Your request will be sent via WhatsApp.</p>
            </form>
          </motion.div>

          {/* Right side cards */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-4">
            {/* Info card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
              {[
                { icon: <FaCalendarCheck />, label: 'Clinic Hours', lines: ['Mon – Sat: 10:00 AM – 9:00 PM', 'Sun: 10:00 AM – 1:00 PM'] },
                { icon: <FaPhoneAlt />, label: 'Call Us', lines: ['+91 9510314824', '+91 6353272474'], redLast: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-center space-x-4 px-6 py-4 ${i !== 0 ? 'border-t border-white/10' : ''}`}>
                  <div className="w-11 h-11 bg-yellow-300/20 rounded-xl flex items-center justify-center flex-shrink-0 text-yellow-300 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.lines.map((line, idx) => (
                      <p key={idx} className={`text-sm font-medium ${item.redLast && idx === item.lines.length - 1 ? 'text-red-300' : 'text-white'}`}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Why Book card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-5">
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-3">Why Book With Us?</p>
              <ul className="space-y-2">
                {['Same-day appointments available', 'Experienced & certified physiotherapists', 'Modern equipment & facilities', 'Personalized treatment plans', 'Affordable pricing'].map((item) => (
                  <li key={item} className="flex items-center space-x-2 text-sm text-white">
                    <span className="text-yellow-300 font-bold">✓</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating buttons */}
      <div className="fixed right-4 bottom-8 flex flex-col gap-3 z-50">
        <a href="tel:+919510314824" className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
          <FaPhoneAlt className="text-lg" />
        </a>
        <a href="https://wa.me/919510314824" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
          <FaWhatsapp className="text-xl" />
        </a>
      </div>
    </section>
  )
}