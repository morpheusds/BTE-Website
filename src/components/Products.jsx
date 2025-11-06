import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Products = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const products = [
    {
      title: 'Nature Identical Flavours',
      description: 'Precisely crafted flavours that replicate nature\'s finest tastes, bringing authentic essence to beverages, confectionery, dairy, and beyond.',
      features: ['100% Natural Profile', 'Consistent Quality', 'Custom Blends', 'Allergen-Free Options'],
      color: 'forest',
      pattern: 'M12,2C12,2 7,4 7,12C7,15.31 9.69,18 13,18V22H11V24H17V22H15V18C18.31,18 21,15.31 21,12C21,4 16,2 16,2',
    },
    {
      title: 'Premium Fruits',
      description: 'Carefully sourced fruits maintaining their natural goodness. From fresh concentrates to rich purees - nature\'s candy in its purest form.',
      features: ['Fresh & Frozen', 'Organic Selections', 'Year-Round Supply', 'Trace-to-Source'],
      color: 'earth',
      pattern: 'M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12C22,14.4 21,16.5 19.3,18',
    },
    {
      title: 'Authentic Herbs',
      description: 'Pure, potent botanicals for food, beverage, and wellness. Sustainably harvested from trusted growers who share our passion for quality.',
      features: ['Certified Organic', 'Whole & Ground', 'Essential Oils', 'Custom Extracts'],
      color: 'sage',
      pattern: 'M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3',
    },
  ]

  return (
    <section id="products" ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 bg-sage-100 text-forest-700 rounded-full text-sm font-semibold font-natural tracking-wide mb-6"
          >
            🌱 Our Garden
          </motion.span>

          <h2 className="font-display text-5xl lg:text-6xl font-bold text-earth-900 mb-6 leading-tight">
            From Earth to You
          </h2>

          <p className="text-xl text-earth-600 font-natural">
            Three pillars of natural perfection, each crafted with care and precision
          </p>
        </motion.div>
      </div>

      {/* Product Sections - Alternating Layout */}
      <div className="space-y-32">
        {products.map((product, index) => (
          <div key={product.title} className="relative">
            {/* Background decoration */}
            <div className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-br from-${product.color}-100 to-${product.color}-200 rounded-full opacity-20 blur-3xl`}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Visual Column */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
                  <div className="relative aspect-square max-w-md mx-auto">
                    {/* Decorative circles */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-0 border-2 border-dashed border-${product.color}-300 rounded-full opacity-30`}
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-8 border-2 border-dashed border-${product.color}-400 rounded-full opacity-20`}
                    />

                    {/* Central icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.2, type: "spring", stiffness: 100 }}
                        className={`w-48 h-48 rounded-full bg-gradient-to-br from-${product.color}-500 to-${product.color}-700 flex items-center justify-center shadow-2xl`}
                      >
                        <svg viewBox="0 0 24 24" fill="white" className="w-24 h-24">
                          <path d={product.pattern} />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <div className={`inline-block px-4 py-1 bg-${product.color}-100 text-${product.color}-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4`}>
                    Product {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="font-display text-4xl lg:text-5xl font-bold text-earth-900 mb-6 leading-tight">
                    {product.title}
                  </h3>

                  <p className="text-lg text-earth-600 leading-relaxed font-natural mb-8">
                    {product.description}
                  </p>

                  {/* Features - flowing list */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.2 + featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-${product.color}-500`}></div>
                        <span className="text-earth-700 font-natural">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ x: 5 }}
                    className={`inline-flex items-center space-x-2 text-${product.color}-700 font-semibold font-natural group`}
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center"
      >
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-forest-700 via-forest-600 to-sage-700 p-16">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="16" cy="16" r="1" fill="white"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"/>
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Need Something Unique?
            </h3>
            <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto font-natural">
              Our experts can create custom blends and formulations tailored to your specific needs
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-5 bg-white text-forest-700 rounded-full font-bold text-lg hover:bg-forest-50 transition-all hover:scale-105 shadow-2xl font-natural"
            >
              Start Your Custom Project
            </a>
          </div>
        </div>
      </motion.div>

      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#fdfcfb"/>
        </svg>
      </div>
    </section>
  )
}

export default Products
