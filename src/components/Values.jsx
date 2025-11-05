import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiHeart, HiLightningBolt, HiShieldCheck, HiTrendingUp } from 'react-icons/hi'

const Values = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: HiHeart,
      title: 'Sustainability',
      description: 'We are committed to sustainable sourcing and environmentally responsible practices throughout our supply chain.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: HiLightningBolt,
      title: 'Innovation',
      description: 'Continuously developing new products and improving processes to meet evolving market demands and exceed expectations.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      icon: HiShieldCheck,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control at every stage ensures our products meet the highest international standards.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: HiTrendingUp,
      title: 'Partnership',
      description: 'Building long-term relationships with our clients through transparency, reliability, and exceptional customer service.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  return (
    <section id="values" ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-forest-50 to-transparent opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-forest-100 text-forest-700 rounded-full text-sm font-semibold">
              Our Values
            </span>
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-6">
            Why Choose
            <span className="text-forest-600"> BTE International</span>
          </h2>

          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Our core values drive everything we do, ensuring excellence in every product
            and building lasting partnerships with our clients
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sage-100 hover:shadow-2xl transition-all h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </motion.div>

                <h3 className="text-2xl font-bold text-earth-900 mb-4">
                  {value.title}
                </h3>

                <p className="text-earth-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-natural-50 to-forest-50 rounded-3xl p-8 md:p-12">
            <h3 className="font-display text-3xl font-bold text-earth-900 mb-6">
              Certified & Compliant
            </h3>
            <p className="text-earth-600 text-lg mb-8 max-w-3xl mx-auto">
              Our products meet international standards including ISO certifications, HACCP,
              FDA compliance, and various organic certifications. Quality and safety are never compromised.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-earth-700">
              <span className="px-6 py-3 bg-white rounded-full shadow-md">ISO 9001</span>
              <span className="px-6 py-3 bg-white rounded-full shadow-md">HACCP</span>
              <span className="px-6 py-3 bg-white rounded-full shadow-md">FDA Compliant</span>
              <span className="px-6 py-3 bg-white rounded-full shadow-md">Organic Certified</span>
              <span className="px-6 py-3 bg-white rounded-full shadow-md">GMP</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Values
