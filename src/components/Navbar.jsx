import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Values', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-natural-50/95 backdrop-blur-md shadow-lg border-b border-sage-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0"
            >
              <a href="#home" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-forest-600 to-sage-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl font-display">B</span>
                </div>
                <div className="flex flex-col">
                  <span className={`font-display font-bold text-xl leading-tight ${scrolled ? 'text-earth-900' : 'text-white'}`}>
                    BTE
                  </span>
                  <span className={`text-xs font-medium ${scrolled ? 'text-forest-600' : 'text-forest-300'}`}>
                    International
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`font-medium font-natural transition-colors hover:text-forest-600 ${
                    scrolled ? 'text-earth-700' : 'text-earth-50'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="px-6 py-2 bg-forest-600 text-white rounded-full font-medium font-natural hover:bg-forest-700 transition-colors shadow-md"
              >
                Get in Touch
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled
                    ? 'text-earth-700 hover:bg-sage-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {mobileMenuOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-natural-50 shadow-2xl z-50 md:hidden border-l-2 border-sage-200"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-4 border-b border-sage-200">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-earth-700 hover:bg-sage-100 rounded-lg transition-colors"
                  >
                    <HiX className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex flex-col space-y-1 px-4 py-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="px-4 py-3 text-earth-700 font-medium font-natural hover:bg-sage-100 hover:text-forest-700 rounded-lg transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="mx-4 mt-4 px-6 py-3 bg-forest-600 text-white rounded-full font-medium font-natural hover:bg-forest-700 transition-colors text-center shadow-md"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
