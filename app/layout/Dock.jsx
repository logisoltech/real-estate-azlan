'use client'

import React from 'react'
import { RalewayFont } from '../Font/Font'

const Dock = () => {
  const navItems = [
    { label: 'Estate', sectionId: 'tech' },
    { label: 'Solutions', sectionId: 'solutions' },
    { label: 'Impact', sectionId: 'impact' },
    { label: 'Contact', sectionId: 'cta' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="fixed bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div 
        className={`
          flex flex-row items-center gap-4 sm:gap-6 lg:gap-8 
          px-4 sm:px-6 lg:px-8 py-3 sm:py-4
          bg-white/70 dark:bg-white/70
          border border-gray-700/50 dark:border-gray-700/50
          rounded-md
          shadow-lg
          ${RalewayFont.className}
        `}
        style={{
          backdropFilter: 'blur(200px)',
          WebkitBackdropFilter: 'blur(200px)',
        }}
      >
        {/* Brand Name */}
        <span className="font-bold text-gray-900 dark:text-gray-900 text-sm sm:text-base lg:text-lg whitespace-nowrap">
          Aztate.
        </span>
        
        {/* Navigation Items */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-gray-700 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-900 font-medium text-xs sm:text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dock