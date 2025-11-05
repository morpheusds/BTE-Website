import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiSparkles, HiGlobe, HiShieldCheck } from 'react-icons/hi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: HiSparkles,
      title: 'Premium Quality',
      description: 'Nature identical flavours crafted to perfection with the highest standards'
    },
    {
      icon: HiGlobe,
      title: 'Global Reach',
      description: 'Serving B2B clients worldwide with reliable and consistent supply chains'
    },
    {
      icon: HiShieldCheck,
      title: 'Certified Excellence',
      description: 'All products meet international quality and safety certifications'
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-forest-50 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-forest-100 text-forest-700 rounded-full text-sm font-semibold">
                About BTE International
              </span>
            </motion.div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-6">
              Bringing Nature's
              <span className="text-forest-600"> Essence</span> to Your Products
            </h2>

            <p className="text-lg text-earth-600 mb-6 leading-relaxed">
              At BTE International, we specialize in providing premium nature identical flavours,
              high-quality fruits, and authentic herbs to the B2B industry. Our commitment to
              excellence and natural authenticity has made us a trusted partner for businesses
              worldwide.
            </p>

            <p className="text-lg text-earth-600 mb-8 leading-relaxed">
              With decades of expertise in sourcing and processing natural ingredients, we deliver
              products that meet the highest standards of quality, consistency, and sustainability.
              From small craft producers to large-scale manufacturers, we tailor our solutions to
              meet your unique needs.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-forest-600 text-white rounded-full font-semibold hover:bg-forest-700 transition-colors shadow-lg"
            >
              Partner With Us
            </motion.a>
          </motion.div>

          {/* Right column - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-sage-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-forest-500 to-forest-600 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-earth-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-earth-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '25+', label: 'Years Experience' },
            { number: '500+', label: 'Global Clients' },
            { number: '1000+', label: 'Products' },
            { number: '50+', label: 'Countries Served' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-forest-600 mb-2">
                {stat.number}
              </div>
              <div className="text-earth-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
