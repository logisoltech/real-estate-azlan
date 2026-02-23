'use client'

import React from 'react'
import { RalewayFont } from '../Font/Font'

const Footer = () => {
  return (
    <footer className={`bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8 ${RalewayFont.className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="pr-0 lg:pr-8 border-r-0 lg:border-r border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Aztate.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium real estate solutions for modern living. Building sustainable, high-quality properties that meet your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pr-0 lg:pr-8 border-r-0 lg:border-r border-gray-200">
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Properties</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Solutions</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="pr-0 lg:pr-8 border-r-0 lg:border-r border-gray-200">
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Residential</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Commercial</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Investment</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Consultation</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: info@aztate.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li className="pt-2">
                <a href="#" className="text-red-600 hover:text-red-700 transition-colors font-medium">
                  Book A Discovery Call →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Aztate. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer