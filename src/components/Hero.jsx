import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const handleScrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sage-800 via-forest-900 to-earth-900">
      {/* Organic texture overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Large decorative leaves in background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96"
        >
          <svg viewBox="0 0 200 200" fill="currentColor" className="text-forest-400 w-full h-full">
            <path d="M100,10 Q150,50 160,100 Q150,150 100,190 Q80,150 70,100 Q80,50 100,10 Z" opacity="0.4" />
          </svg>
        </motion.div>
        <motion.div
          animate={{
            rotate: [0, -15, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px]"
        >
          <svg viewBox="0 0 200 200" fill="currentColor" className="text-earth-600 w-full h-full">
            <path d="M100,20 Q140,60 145,100 Q140,140 100,180 Q60,140 55,100 Q60,60 100,20 Z" opacity="0.3" />
          </svg>
        </motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
          className="absolute top-1/2 right-1/4 w-64 h-64"
        >
          <svg viewBox="0 0 200 200" fill="currentColor" className="text-sage-500 w-full h-full">
            <path d="M100,30 Q130,70 135,100 Q130,130 100,170 Q70,130 65,100 Q70,70 100,30 Z" opacity="0.35" />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="inline-block mb-8"
          >
            <div className="px-6 py-3 bg-earth-100/20 backdrop-blur-sm rounded-full border-2 border-earth-200/30">
              <span className="text-earth-50 font-natural font-semibold text-sm sm:text-base tracking-wide">
                🌿 From Nature, For Nature
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-earth-50 mb-6 text-balance leading-tight"
          >
            Pure.{' '}
            <span className="text-forest-300">Natural.</span>
            <br />
            <span className="text-sage-300">Authentic.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-earth-100 mb-10 max-w-3xl mx-auto text-balance font-natural leading-relaxed"
          >
            Sourced from Earth's finest gardens, delivering nature-identical flavours,
            premium fruits & authentic herbs to conscious businesses worldwide
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#products"
              className="group px-8 py-4 bg-earth-100 text-earth-900 rounded-full font-semibold text-lg hover:bg-earth-200 transition-all hover:scale-105 shadow-2xl flex items-center space-x-2"
            >
              <span>Discover Our Garden</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-earth-100 text-earth-50 rounded-full font-semibold text-lg hover:bg-earth-100/10 transition-all hover:scale-105"
            >
              Connect With Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-earth-100 hover:text-earth-50 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2 font-natural font-medium">Explore Our Story</span>
          <HiArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Natural gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-natural-50 to-transparent"></div>
    </section>
  )
}

export default Hero
