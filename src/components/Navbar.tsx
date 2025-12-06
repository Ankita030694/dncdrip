'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const FlipLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => {
  return (
    <Link
      href={href}
      className={`relative block overflow-hidden group ${className}`}
    >
      <div className="transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        <span className="block">{children}</span>
        <span className="block absolute top-full left-0 w-full">{children}</span>
      </div>
    </Link>
  );
};

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-6 flex justify-between items-center pointer-events-none">
      {/* Logo Section - Pointer events auto to allow interaction if needed, though it's just a logo */}
      <div className="pointer-events-auto relative p-1 border border-foreground/20 group transition-colors duration-300 z-50">
        {/* The 8 squares on the border */}
        {/* Corners */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-transparent border border-foreground/70 transition-colors duration-300" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-transparent border border-foreground/70 transition-colors duration-300" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-transparent border border-foreground/70 transition-colors duration-300" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-transparent border border-foreground/70 transition-colors duration-300" />
        
        {/* Middles */}
        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-transparent border border-foreground/70 -translate-y-1/2 transition-colors duration-300" />
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-transparent border border-foreground/70 -translate-y-1/2 transition-colors duration-300" />
        <div className="absolute -top-1 left-1/2 w-2 h-2 bg-transparent border border-foreground/70 -translate-x-1/2 transition-colors duration-300" />
        <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-transparent border border-foreground/70 -translate-x-1/2 transition-colors duration-300" />

        <span className="text-xl md:text-4xl text-foreground font-bold tracking-wider px-2 block transition-colors duration-300">
          DESIGNNCODE
        </span>
      </div>

      {/* Desktop Links Section */}
      <div className="pointer-events-auto hidden md:flex items-center gap-8 md:gap-12">
        <FlipLink href="#tech-stack" className="text-foreground text-lg md:text-2xl tracking-wide font-medium transition-colors duration-300">
          TECH STACK
        </FlipLink>
        <FlipLink href="#clients" className="text-foreground text-lg md:text-2xl tracking-wide font-medium transition-colors duration-300">
          OUR CLIENTS
        </FlipLink>
        <FlipLink href="#services" className="text-foreground text-lg md:text-2xl tracking-wide font-medium transition-colors duration-300">
          WHAT WE DO
        </FlipLink>

        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? (
              <FaSun className="text-foreground text-xl md:text-2xl transition-colors duration-300" />
            ) : (
              <FaMoon className="text-foreground text-xl md:text-2xl transition-colors duration-300" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle & Theme Toggle */}
      <div className="pointer-events-auto md:hidden flex items-center gap-4 z-50">
        {mounted && (
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? (
              <FaSun className="text-foreground text-xl transition-colors duration-300" />
            ) : (
              <FaMoon className="text-foreground text-xl transition-colors duration-300" />
            )}
          </button>
        )}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-foreground text-2xl focus:outline-none"
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background transition-transform duration-300 ease-in-out z-40 flex flex-col items-center justify-center gap-8 pointer-events-auto md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Link 
          href="#tech-stack" 
          className="text-foreground text-3xl font-medium tracking-wide"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          TECH STACK
        </Link>
        <Link 
          href="#clients" 
          className="text-foreground text-3xl font-medium tracking-wide"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          OUR CLIENTS
        </Link>
        <Link 
          href="#services" 
          className="text-foreground text-3xl font-medium tracking-wide"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          WHAT WE DO
        </Link>
      </div>
    </nav>
  );
};
