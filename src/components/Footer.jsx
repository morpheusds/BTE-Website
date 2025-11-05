import React from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'Nature Identical Flavours', href: '#products' },
      { name: 'Premium Fruits', href: '#products' },
      { name: 'Authentic Herbs', href: '#products' },
      { name: 'Custom Solutions', href: '#contact' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Values', href: '#values' },
      { name: 'Quality Standards', href: '#values' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Product Catalog', href: '#products' },
      { name: 'Certifications', href: '#values' },
      { name: 'Case Studies', href: '#about' },
      { name: 'FAQs', href: '#contact' }
    ]
  }

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' }
  ]

  return (
    <footer className="bg-earth-900 text-natural-300 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-600 via-forest-500 to-forest-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-forest-500 to-forest-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl leading-tight text-white">
                    BTE
                  </span>
                  <span className="text-xs font-medium text-forest-400">
                    International
                  </span>
                </div>
              </div>
              <p className="text-natural-400 mb-6 leading-relaxed">
                Leading supplier of nature identical flavours, premium fruits, and authentic herbs
                to the B2B industry worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:info@bteint.com" className="flex items-center space-x-3 text-natural-400 hover:text-forest-400 transition-colors">
                  <HiMail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">info@bteint.com</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center space-x-3 text-natural-400 hover:text-forest-400 transition-colors">
                  <HiPhone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </a>
                <div className="flex items-center space-x-3 text-natural-400">
                  <HiLocationMarker className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Global Headquarters</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-natural-400 hover:text-forest-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-natural-400 hover:text-forest-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-natural-400 hover:text-forest-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-natural-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-natural-500 text-sm"
            >
              © {currentYear} BTE International. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-earth-800 rounded-lg flex items-center justify-center text-natural-400 hover:bg-forest-600 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center space-x-6 text-sm"
            >
              <a href="#" className="text-natural-500 hover:text-forest-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-natural-500 hover:text-forest-400 transition-colors">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
