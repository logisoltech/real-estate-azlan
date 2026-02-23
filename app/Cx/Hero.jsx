'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { RalewayFont } from '../Font/Font'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: '/hero-1.avif',
      headline: 'A New Era Of Real Estate Begins With Us',
      ctaText: 'Book A Discovery Call',
      description: 'Welcome to a new era of Real Estate.\nHigh-Quality Properties Arrive Nearly Complete,\nAllowing You To Earn Revenue Months Sooner.'
    },
    {
      image: '/hero-2.avif',
      headline: 'Rethinking Property For A\nChanging World',
      ctaText: 'Explore Our Solutions',
      description: 'Welcome to a new era of Real Estate.\nHigh-Quality Properties Arrive Nearly Complete,\nAllowing You To Earn Revenue Months Sooner.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div 
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
          >
            <Image
              src={slide.image}
              alt={`Hero slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8">
              {/* Headline */}
              <h1 className={`text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black text-white text-center mb-8 max-w-9xl leading-tight ${RalewayFont.className}`}>
                {slide.headline.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < slide.headline.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              
              {/* CTA Button */}
              <div className="flex items-center gap-2 mb-12">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium transition-colors duration-200">
                  {slide.ctaText}
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white p-3 sm:p-4 transition-colors duration-200">
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Description Text - Bottom Left */}
            <div className="absolute bottom-8 sm:bottom-16 left-4 sm:left-8 max-w-md">
              <p className="text-white text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
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
  )
}

export default Hero