import React from 'react'
import { motion } from 'framer-motion'

const FloatingElements = () => {
  // Create multiple floating leaf elements with different animations
  const leaves = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: 20 + Math.random() * 20,
    size: 20 + Math.random() * 40,
    delay: Math.random() * -20,
    opacity: 0.1 + Math.random() * 0.2,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
            x: [0, Math.sin(leaf.id) * 100, 0],
            rotate: [0, 360 * (leaf.id % 2 === 0 ? 1 : -1)],
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
            className="text-primary-500"
          >
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </motion.div>
      ))}

      {/* Add some herb sprigs */}
      {Array.from({ length: 8 }, (_, i) => ({
        id: i + 100,
        left: `${Math.random() * 100}%`,
        animationDuration: 25 + Math.random() * 25,
        size: 30 + Math.random() * 30,
        delay: Math.random() * -25,
        opacity: 0.08 + Math.random() * 0.15,
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
            x: [0, Math.cos(herb.id) * 80, 0],
            rotate: [0, 180 * (herb.id % 2 === 0 ? 1 : -1)],
            opacity: [0, herb.opacity, herb.opacity, 0],
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
            className="text-green-600"
          >
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.4 5,16.5 6.7,18C8.1,16.7 10,16 12,16C14,16 15.9,16.7 17.3,18C19,16.5 20,14.4 20,12A8,8 0 0,0 12,4M14,5.89C15.06,6.39 16,7.18 16.67,8.19C16.12,8.38 15.54,8.5 15,8.5C13.55,8.5 12.28,7.73 11.5,6.58C12.25,6.04 13.11,5.75 14,5.89M10,6C10.18,6.71 10.5,7.38 10.94,8C10.65,8.63 10.5,9.3 10.5,10C10.5,11.38 11.19,12.61 12.26,13.38C11.61,13.77 11.08,14.34 10.73,15C9.29,15 8,13.71 8,12.22C8,10.91 8.67,9.75 9.7,9.12C9.5,8.45 9.27,7.76 9.04,7.09C9.33,6.71 9.64,6.36 10,6M14.67,9.19C15.4,10.03 15.92,11.08 16.08,12.26C15.89,12.09 15.68,11.94 15.47,11.8C15.12,10.91 14.96,10.05 14.67,9.19Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements
