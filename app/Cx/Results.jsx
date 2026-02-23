'use client'

import React from 'react'
import { FaIndustry, FaClock, FaLeaf, FaWarehouse } from 'react-icons/fa'
import { RalewayFont } from '../Font/Font'

const Results = () => {
  const stats = [
    {
      icon: FaIndustry,
      value: '90%',
      description: 'Built Offsite'
    },
    {
      icon: FaClock,
      value: '30%',
      description: 'Faster Output'
    },
    {
      icon: FaLeaf,
      value: '0',
      description: 'Carbon Footprint'
    },
    {
      icon: FaWarehouse,
      value: '40+',
      description: 'Acre Factory Site'
    }
  ]

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 bg-white ${RalewayFont.className}`}>
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="relative bg-white p-8 border-t border-l border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
                }}
              >
                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 bg-gray-800" style={{ height: '1px', width: 'calc(100% - 20px)' }} />
                
                {/* Right border */}
                <div className="absolute top-0 right-0 bg-gray-800" style={{ width: '1px', height: 'calc(100% - 20px)' }} />
                
                {/* Diagonal border - 45 degree line connecting bottom and right */}
                <svg 
                  className="absolute bottom-0 right-0 pointer-events-none"
                  style={{ width: '20px', height: '20px' }}
                >
                  <line 
                    x1="0" 
                    y1="20" 
                    x2="20" 
                    y2="0" 
                    stroke="#1f2937" 
                    strokeWidth="1"
                  />
                </svg>

                {/* Icon - Top Left */}
                <div className="relative mb-6">
                  <div className="inline-block p-3 border-2 border-red-600">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                
                {/* Number */}
                <div className="relative mb-4">
                  <h3 className="text-5xl lg:text-6xl text-gray-900">
                    {stat.value}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="relative">
                  <p className="text-lg text-gray-900">
                    {stat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Results