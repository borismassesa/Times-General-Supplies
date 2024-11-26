'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const images = [
    {
      src: '/images/hero-1.jpg',
      alt: 'Professional printing machinery in action',
      title: 'Professional Printing Solutions',
      description: 'Delivering excellence in printing services with cutting-edge technology and unmatched quality for over two decades.',
    },
    {
      src: '/images/hero-2.jpg',
      alt: 'High-quality printed materials showcase',
      title: 'Professional Printing Solutions',
      description: 'Delivering excellence in printing services with cutting-edge technology and unmatched quality for over two decades.',
    },
    {
      src: '/images/hero-3.jpg',
      alt: 'Digital printing process demonstration',
      title: 'Professional Printing Solutions',
      description: 'Delivering excellence in printing services with cutting-edge technology and unmatched quality for over two decades.',
    },
    {
      src: '/images/hero-4.jpg',
      alt: 'Wide format printing capabilities',
      title: 'Professional Printing Solutions',
      description: 'Delivering excellence in printing services with cutting-edge technology and unmatched quality for over two decades.',
    },
    {
      src: '/images/hero-5.jpg',
      alt: 'Precision color matching process',
      title: 'Professional Printing Solutions',
      description: 'Delivering excellence in printing services with cutting-edge technology and unmatched quality for over two decades.',
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 200, 200, 0.3) 1px, transparent 3px),
            linear-gradient(to bottom, rgba(200, 200, 200, 0.3) 1px, transparent 3px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Gradient Overlays for Fading Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top and Bottom Fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-75" />

        {/* Left and Right Fades */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-white opacity-45" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-neutral-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Professional <span className="text-primary">Printing Solutions</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl lg:max-w-none mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Delivering excellence in printing services with cutting-edge technology and unmatched
              quality for over two decades.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-secondary text-secondary px-8 py-3 rounded-md hover:bg-secondary hover:text-white transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-white shadow-xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white"
              >
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero