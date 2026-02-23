'use client'

import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import { RalewayFont } from '../Font/Font'

const CTA = () => {
  return (
    <section className={`relative w-full h-screen overflow-hidden ${RalewayFont.className}`}>
      <div className="relative w-full h-full">
        <Image
          src="/hero-1.avif"
          alt="Unlock Your Project's Potential"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 max-w-4xl leading-tight">
            Unlock Your Property's Potential
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-white text-center mb-8 max-w-3xl leading-relaxed">
            Share your property requirements with a timeline, and we will return a customized program, cost and ROI model within a week.
          </p>
          
          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-medium transition-colors duration-200 flex items-center gap-2">
              Book A Discovery Call
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA