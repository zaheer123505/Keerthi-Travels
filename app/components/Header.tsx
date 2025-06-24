"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import clsx from "clsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300",
          { "-translate-y-full": scrollDirection === "down" }
        )}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href="/" className="text-2xl font-bold text-blue-800">
            Keerthi Travels
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-600 hover:text-orange-500">
              Home
            </Link>
            <Link
              href="/packages"
              className="text-gray-600 hover:text-orange-500"
            >
              Packages
            </Link>
            <Link
              href="/destinations"
              className="text-gray-600 hover:text-orange-500"
            >
              Destinations
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-orange-500"
            >
              Contact
            </Link>

            <Link
              href="/booking"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* This component controls the slide-out menu on mobile */}
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}
