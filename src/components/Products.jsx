import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiSparkles, HiBeaker, HiCube } from 'react-icons/hi'

const Products = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState(null)

  const products = [
    {
      icon: HiSparkles,
      title: 'Nature Identical Flavours',
      description: 'Precisely crafted flavours that replicate nature\'s finest tastes. Perfect for beverages, confectionery, dairy products, and more.',
      features: ['100% Natural Profile', 'Consistent Quality', 'Custom Blends Available', 'Allergen-Free Options'],
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: HiBeaker,
      title: 'Premium Fruits',
      description: 'Carefully sourced and processed fruits maintaining natural goodness. From concentrates to purees and everything in between.',
      features: ['Fresh & Frozen Options', 'Organic Selections', 'Year-Round Availability', 'Trace-to-Source'],
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: HiCube,
      title: 'Authentic Herbs',
      description: 'Pure, potent herbs and botanicals for food, beverage, and wellness applications. Sustainably sourced from trusted growers.',
      features: ['Certified Organic', 'Whole & Ground Forms', 'Essential Oils', 'Custom Extracts'],
      gradient: 'from-green-500 to-emerald-600'
    }
  ]

  return (
    <section id="products" ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-natural-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl"></div>
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
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Our Product Range
            </span>
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-natural-900 mb-6">
            Premium Natural
            <span className="text-primary-600"> Ingredients</span>
          </h2>

          <p className="text-xl text-natural-600 max-w-3xl mx-auto">
            Discover our comprehensive range of nature identical flavours, premium fruits,
            and authentic herbs - all sourced and processed to the highest standards
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <motion.div
                animate={{
                  scale: hoveredCard === index ? 1.05 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl shadow-xl p-8 h-full relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 0.05 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`}
                />

                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: hoveredCard === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                >
                  <product.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-natural-900 mb-4">
                    {product.title}
                  </h3>

                  <p className="text-natural-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.15 + featureIndex * 0.1 }}
                        className="flex items-center text-natural-700"
                      >
                        <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    className="mt-6"
                  >
                    <a href="#contact" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center">
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Our team of experts can develop tailored products to meet your specific requirements.
              Let's discuss how we can support your business.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-primary-700 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
