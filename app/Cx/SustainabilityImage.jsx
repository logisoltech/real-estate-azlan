'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const SustainabilityImage = () => {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('sustainability-image')
      if (!element) return

      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Calculate how much of the element is visible
      const viewportBottom = windowHeight
      const elementBottom = elementTop + elementHeight
      
      // Scale effect: starts at 1.3 when entering viewport, scales to 1 as it scrolls
      let scrollProgress = 0
      if (elementTop < viewportBottom && elementBottom > 0) {
        // Element is in viewport
        const distanceFromTop = Math.max(0, viewportBottom - elementTop)
        const totalDistance = windowHeight + elementHeight
        scrollProgress = Math.min(1, distanceFromTop / totalDistance)
      }
      
      // Scale from 1.3 to 1 based on scroll progress
      const newScale = 1.3 - (0.3 * scrollProgress)
      setScale(Math.max(1, newScale))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      id="sustainability-image"
      className="relative w-full h-screen overflow-hidden"
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.1s ease-out',
          width: '100%',
          height: '100%'
        }}
      >
        <Image
          src="/sustainability-building.avif"
          alt="Sustainability Building"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default SustainabilityImage
