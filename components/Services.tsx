'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    { title: 'Physical Therapy', description: 'Physical therapy is one of the major services which we offer. Our therapists works closely with patients to help them improve their movement potential and gain a healthier and more...', image: '/images/physical.jpeg' },
    { title: 'Neddling Therapy', description: 'A practitioner inserts a hair-thin needle directly into a tight knot or "trigger point." There\'s no medicine involved; the physical touch of the needle simply tells the muscle to stop cramping and relax.', image: '/images/niddle.jpg' },
    { title: 'Chiropractic Therapy', description: 'We are one of the most advanced chiropractic clinics and carry the latest chiropractic equipment which helps our doctors diagnose and treat back pains, spinal problems, neck pains and...', image: '/images/chiropractice.webp' },
    { title: 'Work Injuries', description: 'If an injury at work has impeded your performance in the workplace, our work injury rehabilitation program provides an aggressive yet cautious approach to getting you back to work quickly...', image: '/images/work.jpg' },
    { title: 'Clinical Pilates', description: 'Pilates is an exercise regime designed to stimulate the deep spinal muscles, or core muscles to function more efficiently. The Pilates exercises were initially developed to assist people...', image: 'images/clinical1.webp' },
    { title: 'Sport Injuries', description: 'We are dedicated to sports medicine and focus our attention on the aggressive treatment of our athletes as well as the prevention of sports-related injuries. Whether you are a professional...', image: 'images/sport1.jpg' },
    { title: 'Knee pain', description: 'Knee pain is essentially discomfort or stiffness in the joint where your thigh bone meets your shin bone. It can feel like a sharp sting, a dull ache, or a "grinding" sensation.', image: 'images/knee.webp' },
    { title: 'Cupping Therapy', description: 'Cupping therapy uses suction cups placed on the skin to pull muscle tissue upward. This increases blood flow to the area, which helps relieve pain, reduce muscle tightness, and promote relaxation.', image: 'images/cupping.webp' },
    { title: 'Stroke/Paralysis', description: 'Stroke and paralysis recovery involves specialized physiotherapy to restore movement and function. Our experts provide targeted therapy to help patients regain independence.', image: 'images/stroke.jpg' },

  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Comprehensive physiotherapy services tailored to your specific needs, delivered with care and expertise.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                <a href="#appointment" className="text-primary-blue hover:text-primary-green font-semibold text-sm transition-colors inline-flex items-center">
                  Find out More <span className="ml-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.8 }} className="text-center mt-10">
          <p className="text-gray-600 mb-4 text-sm md:text-base">Not sure which service is right for you?</p>
          <a href="#appointment" className="btn-primary inline-block">Book a Consultation</a>
        </motion.div>
      </div>
    </section>
  )
}