'use client'

import React from 'react'
import { FaTrash, FaLeaf, FaBolt } from 'react-icons/fa'
import { RalewayFont } from '../Font/Font'

const Impact = () => {
  const impactItems = [
    'Up to 30% reduction in material waste',
    'Lower site footprint and disruption',
    'Airtight envelopes cut operational energy by 30%'
  ]

  return (
    <section className={`relative border-t border-b border-gray-400 py-20 px-4 sm:px-6 lg:px-8 mt-16 ${RalewayFont.className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Heading and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            {/* Small uppercase red heading */}
            <div className="mb-4">
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                SUSTAINABILITY & IMPACT
              </span>
            </div>
            
            {/* Main headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Planet, People, Profit.
            </h2>
          </div>
          
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our sustainable real estate approach ensures eco-friendly, energy-efficient properties meeting ESG goals without sacrificing quality, comfort, or investment returns.
            </p>
          </div>
        </div>

        {/* Bottom Section - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* First Item - Trash Icon */}
          <div className="flex flex-col items-center text-center border border-gray-400 p-6">
            <div className="mb-6">
              <div className="inline-block p-4 border-2 border-red-600 rounded-lg">
                <FaTrash className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <p className="text-base text-gray-700">
              {impactItems[0]}
            </p>
          </div>

          {/* Second Item - CO2 Icon */}
          <div className="flex flex-col items-center text-center border border-gray-400 p-6">
            <div className="mb-6">
              <div className="inline-block p-4 border-2 border-red-600 rounded-lg">
                <div className="w-8 h-8 rounded-full border-2 border-red-600 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xs">CO2</span>
                </div>
              </div>
            </div>
            <p className="text-base text-gray-700">
              {impactItems[1]}
            </p>
          </div>

          {/* Third Item - Leaf with Bolt Icon */}
          <div className="flex flex-col items-center text-center border border-gray-400 p-6">
            <div className="mb-6">
              <div className="inline-block p-4 border-2 border-red-600 rounded-lg">
                <div className="relative w-8 h-8">
                  <FaLeaf className="w-8 h-8 text-red-600" />
                  <FaBolt className="w-4 h-4 text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>
            <p className="text-base text-gray-700">
              {impactItems[2]}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact