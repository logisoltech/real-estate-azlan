'use client'

import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import Image from 'next/image'
import { RalewayFont } from '../Font/Font'

const Tech = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const carouselSlides = [
    {
      image: '/tech-1.avif',
      text1: 'Volumetric Modules Built',
      text2: 'For Rapid Site Assembly'
    },
    {
      image: '/tech-2.avif',
      text1: 'Factory Finished Interiors',
      text2: 'Integrated Services And Design'
    },
    {
      image: '/tech-3.avif',
      text1: 'Premium Quality',
      text2: 'Delivered On Time'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [carouselSlides.length])

  return (
    <>
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 ${RalewayFont.className}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div>
              {/* Small uppercase red heading */}
              <div className="mb-4">
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                  REAL ESTATE
                </span>
              </div>
              
              {/* Main headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Premium Properties.<br />
                Exceptional Living.
              </h2>
            </div>
            
            {/* Right Column */}
            <div>
              {/* Paragraph text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Discover luxury real estate that combines modern design with sustainable living. Our properties feature innovative architecture, premium finishes, and prime locations, offering you the perfect place to call home or invest in your future.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex items-center gap-2">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base font-medium transition-colors duration-200">
                  Our Properties
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white p-3 transition-colors duration-200">
                  <FaArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className={`py-8 px-4 sm:px-6 lg:px-8 ${RalewayFont.className}`}>
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselSlides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full h-full relative"
                  style={{
                    clipPath: 'polygon(0px 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%, 0 0px)'
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={`Tech slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  
                  {/* Text Overlay - Bottom Left */}
                  <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6">
                    <p className="text-white text-lg sm:text-xl font-medium mb-1">
                      {slide.text1}
                    </p>
                    <p className="text-white text-lg sm:text-xl font-medium">
                      {slide.text2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {carouselSlides.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-red-600 w-8' 
                      : 'bg-white/50 w-4'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tech