import React from 'react'
import { motion } from 'framer-motion'

const FloatingElements = () => {
  // Create multiple floating leaf elements with different animations
  const leaves = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: 25 + Math.random() * 30,
    size: 25 + Math.random() * 50,
    delay: Math.random() * -30,
    opacity: 0.15 + Math.random() * 0.25,
    color: ['text-forest-500', 'text-sage-600', 'text-earth-600'][Math.floor(Math.random() * 3)],
  }))

  // Butterflies and natural elements
  const floatingNature = Array.from({ length: 5 }, (_, i) => ({
    id: i + 100,
    left: `${Math.random() * 100}%`,
    animationDuration: 15 + Math.random() * 15,
    size: 40 + Math.random() * 30,
    delay: Math.random() * -15,
    opacity: 0.1 + Math.random() * 0.15,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            left: leaf.left,
            top: '-10%',
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(leaf.id) * 120, Math.cos(leaf.id) * 80, 0],
            rotate: [0, 360 * (leaf.id % 2 === 0 ? 1 : -1), 720 * (leaf.id % 2 === 0 ? -1 : 1)],
            opacity: [0, leaf.opacity, leaf.opacity, 0],
          }}
          transition={{
            duration: leaf.animationDuration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: 'linear',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={leaf.color}
          >
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </motion.div>
      ))}

      {/* Herb sprigs and botanical elements */}
      {Array.from({ length: 12 }, (_, i) => ({
        id: i + 200,
        left: `${Math.random() * 100}%`,
        animationDuration: 30 + Math.random() * 30,
        size: 35 + Math.random() * 35,
        delay: Math.random() * -30,
        opacity: 0.1 + Math.random() * 0.2,
        color: ['text-sage-500', 'text-forest-400', 'text-earth-500'][Math.floor(Math.random() * 3)],
      })).map((herb) => (
        <motion.div
          key={herb.id}
          className="absolute"
          style={{
            left: herb.left,
            top: '-10%',
            width: `${herb.size}px`,
            height: `${herb.size}px`,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.cos(herb.id) * 90, Math.sin(herb.id) * 60, 0],
            rotate: [0, 180 * (herb.id % 2 === 0 ? 1 : -1), 360 * (herb.id % 2 === 0 ? -1 : 1)],
            opacity: [0, herb.opacity, herb.opacity, 0],
            scale: [0.8, 1, 1, 0.8],
          }}
          transition={{
            duration: herb.animationDuration,
            repeat: Infinity,
            delay: herb.delay,
            ease: 'linear',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={herb.color}
          >
            <path d="M12,2C12,2 7,4 7,12C7,15.31 9.69,18 13,18V22H11V24H17V22H15V18C18.31,18 21,15.31 21,12C21,4 16,2 16,2C16,2 15,4 15,7C15,7 14,6 13,6V9C13,9 12,8 12,8V2M15,11A1,1 0 0,0 14,12A1,1 0 0,0 15,13A1,1 0 0,0 16,12A1,1 0 0,0 15,11M11,11A1,1 0 0,0 10,12A1,1 0 0,0 11,13A1,1 0 0,0 12,12A1,1 0 0,0 11,11Z" />
          </svg>
        </motion.div>
      ))}

      {/* Flower petals */}
      {Array.from({ length: 8 }, (_, i) => ({
        id: i + 300,
        left: `${Math.random() * 100}%`,
        animationDuration: 20 + Math.random() * 25,
        size: 20 + Math.random() * 30,
        delay: Math.random() * -25,
        opacity: 0.12 + Math.random() * 0.18,
      })).map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: petal.left,
            top: '-10%',
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(petal.id * 2) * 100, 0],
            rotate: [0, 720 * (petal.id % 2 === 0 ? 1 : -1)],
            opacity: [0, petal.opacity, petal.opacity, 0],
          }}
          transition={{
            duration: petal.animationDuration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'easeInOut',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-sage-400"
          >
            <path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,4A8,8 0 0,0 4,12C4,14.4 5,16.5 6.7,18C8.1,16.7 10,16 12,16C14,16 15.9,16.7 17.3,18C19,16.5 20,14.4 20,12A8,8 0 0,0 12,4Z" />
          </svg>
        </motion.div>
      ))}

      {/* Small seed/dot elements */}
      {Array.from({ length: 15 }, (_, i) => ({
        id: i + 400,
        left: `${Math.random() * 100}%`,
        animationDuration: 35 + Math.random() * 40,
        size: 8 + Math.random() * 12,
        delay: Math.random() * -35,
        opacity: 0.15 + Math.random() * 0.2,
        color: ['text-earth-400', 'text-sage-400', 'text-forest-400'][Math.floor(Math.random() * 3)],
      })).map((seed) => (
        <motion.div
          key={seed.id}
          className={`absolute rounded-full ${seed.color}`}
          style={{
            left: seed.left,
            top: '-5%',
            width: `${seed.size}px`,
            height: `${seed.size}px`,
            backgroundColor: 'currentColor',
          }}
          animate={{
            y: ['0vh', '105vh'],
            x: [0, Math.sin(seed.id) * 50, 0],
            opacity: [0, seed.opacity, seed.opacity, 0],
          }}
          transition={{
            duration: seed.animationDuration,
            repeat: Infinity,
            delay: seed.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements
