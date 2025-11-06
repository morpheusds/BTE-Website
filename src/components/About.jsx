import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="relative py-32 bg-natural-50 overflow-hidden">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="#f9f7f4" className="text-natural-50"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Large decorative element */}
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-sage-200 to-forest-200 opacity-30 blur-3xl"></div>

              {/* Overlapping content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 mx-auto mb-8"
                  >
                    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" className="text-sage-400" strokeDasharray="4 4"/>
                      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" className="text-forest-400" strokeDasharray="4 4"/>
                      <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" className="text-earth-400" strokeDasharray="4 4"/>
                    </svg>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="relative"
                  >
                    <div className="text-8xl font-display font-bold text-forest-600 mb-4">25+</div>
                    <div className="text-xl font-natural text-earth-700">Years of Natural Excellence</div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-sage-200"
            >
              <div className="text-4xl font-bold text-forest-600">500+</div>
              <div className="text-sm text-earth-600 font-natural">Global Partners</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -top-8 -right-8 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-sage-200"
            >
              <div className="text-4xl font-bold text-forest-600">1000+</div>
              <div className="text-sm text-earth-600 font-natural">Natural Products</div>
            </motion.div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-5 py-2 bg-sage-100 text-forest-700 rounded-full text-sm font-semibold font-natural tracking-wide">
                🌿 Our Story
              </span>
            </motion.div>

            <h2 className="font-display text-5xl lg:text-6xl font-bold text-earth-900 mb-8 leading-tight">
              Rooted in Nature,
              <br />
              <span className="text-forest-600">Grown with Care</span>
            </h2>

            <div className="space-y-6 text-lg text-earth-600 leading-relaxed font-natural">
              <p>
                For over 25 years, BTE International has been at the forefront of natural ingredient sourcing,
                bringing the purest flavours, finest fruits, and most authentic herbs to businesses worldwide.
              </p>

              <p>
                What started as a small passion for nature's bounty has blossomed into a global network of
                trusted partnerships. We work directly with sustainable farms and ethical suppliers, ensuring
                every product meets our exacting standards for quality and authenticity.
              </p>

              <p className="text-earth-700 font-medium">
                Our commitment goes beyond business — we're preserving nature's heritage while innovating
                for tomorrow's needs.
              </p>
            </div>

            {/* Key points */}
            <div className="mt-12 space-y-4">
              {[
                'Sustainable sourcing from ethical farms',
                'Nature-identical precision & quality',
                'Global reach with local expertise',
                'ISO certified & organic options'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 rounded-full bg-forest-500"></div>
                  <span className="text-earth-700 font-natural">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 mt-10 px-8 py-4 bg-forest-600 text-white rounded-full font-semibold font-natural hover:bg-forest-700 transition-colors shadow-lg"
            >
              <span>Discover Our Process</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default About
