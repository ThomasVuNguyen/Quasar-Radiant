'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 bg-white text-black w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center text-center w-full md:w-auto justify-center md:justify-start mb-4 md:mb-0">
          <Link href="/" className="font-bold text-xl font-playfair italic">
            Luna
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden absolute right-6 top-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/progress" className="text-black hover:text-gray-600">
                Progress
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-gray-600">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Full-screen mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-indigo-900 z-50 md:hidden flex flex-col">
          <div className="flex justify-end p-6">
            <button 
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-white"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 flex items-center justify-center">
            <ul className="flex flex-col space-y-12 text-center">
              <li>
                <Link 
                  href="/progress" 
                  className="text-white text-4xl font-bold hover:text-gray-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Progress
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-white text-4xl font-bold hover:text-gray-200"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
} 