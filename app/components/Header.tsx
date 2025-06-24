// app/components/Header.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // We are using the Image component again
import MobileMenu from './MobileMenu';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import clsx from 'clsx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <>
      <header className={clsx(
        "sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300",
        { "-translate-y-full": scrollDirection === 'down' }
      )}>
        <div className="container mx-auto flex justify-between items-center px-6 py-3 h-20">
          
          {/* --- THIS IS THE FINAL, CORRECTED LOGO SECTION --- */}
          <Link href="/" className="flex items-center gap-3 group bg-white/70 px-3 py-2 rounded-lg hover:bg-white/90 transition-all duration-200">
            {/* The Image component for a sharp logo - no scaling for maximum sharpness */}
            <Image
              src="/logo.png" // The path to your full logo in the public folder
              alt="Keerthi Travels Logo"
              width={60}     // Larger base size for crisp rendering
              height={60}    // Larger base size for crisp rendering
              priority
              quality={100}
              style={{ width: 'auto', height: '48px' }} // Use inline styles to prevent CSS conflicts
            />
            <div className="hidden sm:block">
              <span className="text-2xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors duration-200">
                Keerthi Travels
              </span>
              <div className="text-xs text-orange-500 font-medium tracking-wide -mt-1">
                EXPLORE • DISCOVER • TRAVEL
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group">
              Packages
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group">
              Destinations
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/booking" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full hover:from-orange-600 hover:to-orange-700 font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-all duration-200"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}