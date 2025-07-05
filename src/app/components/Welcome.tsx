'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = ['/empfang.jpg', '/table.jpg', '/books.jpg']

export default function Welcome() {
  const collapseDuration = 0.6
  const expandDuration = 0.6

  const [index, setIndex] = useState(0)
  const [showNew, setShowNew] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextImage = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setShowNew(false) // trigger collapse

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length)
      setShowNew(true) // trigger expand
      setTimeout(() => setIsAnimating(false), expandDuration * 1000)
    }, collapseDuration * 1000)
  }

  return (
    
    <div className="relative w-[500px] h-[500px] mx-auto bg-transparent clip-diagonal overflow-hidden">
      <AnimatePresence mode="wait">
        {!showNew ? (
          <motion.img
            key={`old-${index}`}
            src={images[index]}
            alt="Collapsing"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: collapseDuration, ease: 'easeInOut' }}
            className="w-full h-full object-cover absolute top-0 left-0 origin-bottom"
          />
        ) : (
          <motion.img
            key={`new-${index}`}
            src={images[index]}
            alt="Expanding"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: expandDuration, ease: 'easeInOut' }}
            className="w-full h-full object-cover absolute top-0 left-0 origin-bottom"
          />
        )}
      </AnimatePresence>

      <button
        onClick={nextImage}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-primary text-secondary p-2 rounded-full shadow-md hover:text-primary hover:bg-secondary transition"
      >
        &gt;
      </button>
    </div>
  )
}
