import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Values from './components/Values'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <FloatingElements />
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Products />
      <Values />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
