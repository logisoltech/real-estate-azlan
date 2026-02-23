'use client'

import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'
import Image from 'next/image'
import { RalewayFont } from '../Font/Font'

const Solutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
  }

  return (
    <section className={`relative border-t border-b border-gray-400 ${RalewayFont.className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="py-20 px-4 sm:px-6 lg:px-8 pr-12 border-r border-gray-400">
            {/* Small uppercase red heading */}
            <div className="mb-4">
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                SOLUTIONS
              </span>
            </div>
            
            {/* Main headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              From Luxury Residences To Commercial Spaces.
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether it's a residential home or a commercial property, our real estate solutions feature modern architecture, premium finishes, and prime locations that are designed to meet the highest standards of quality and sustainability.
            </p>
            
            {/* CTA Button */}
            <div className="flex items-center gap-2 mb-8">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base font-medium transition-colors duration-200">
                Our Properties
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white p-3 transition-colors duration-200">
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>

            
          </div>
          
          {/* Right Column - Image */}
          <div className="relative h-[600px] lg:h-auto">
            <Image
              src="/tech-1.avif"
              alt="Retail Pods"
              fill
              className="object-cover"
              priority
            />
            
            {/* Overlay Text - Bottom Left */}
            <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6">
              <p className="text-white text-xl sm:text-2xl font-medium">
                Commercial Properties
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
