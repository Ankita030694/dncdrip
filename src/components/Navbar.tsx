'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const FlipLink = ({ href, children, className = "", isSectionLink = false }: { href: string; children: React.ReactNode; className?: string; isSectionLink?: boolean }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isSectionLink && pathname === '/contact') {
      e.preventDefault();
      // Navigate to home page first
      router.push('/');
      // Wait for navigation and page load, then scroll to section
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
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
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const handleSectionLink = (hash: string) => {
    if (pathname === '/contact') {
      // Navigate to home page first
      router.push('/');
      // Wait for navigation and page load, then scroll to section
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-6 flex justify-between items-center pointer-events-none transition-all duration-500 ${scrolled ? 'bg-white/10 dark:bg-black/10 backdrop-blur-md' : 'bg-transparent'}`}>
      {/* Logo Section - Pointer events auto to allow interaction if needed, though it's just a logo */}
      {/* Logo Section */}
      <Link href="/" className="pointer-events-auto relative group transition-colors duration-300 z-50 block">
        <div className="relative px-2 py-1 border border-foreground/30">
          {/* Corner Squares */}
          <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border border-foreground bg-background transition-colors duration-300"></div>
          <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border border-foreground bg-background transition-colors duration-300"></div>
          <div className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border border-foreground bg-background transition-colors duration-300"></div>
          <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border border-foreground bg-background transition-colors duration-300"></div>
          
          {/* Middle Squares */}
          <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 border border-foreground bg-background transition-colors duration-300"></div>
          <div className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 border border-foreground bg-background transition-colors duration-300"></div>

          <span className="text-xl md:text-3xl font-bold text-foreground transition-colors duration-300">
            DESIGNNCODE
          </span>
        </div>
      </Link>

      {/* Desktop Links Section */}
      <div className="pointer-events-auto hidden md:flex items-center gap-8 md:gap-12">
        <FlipLink href="#tech-stack" isSectionLink={true} className="text-foreground text-lg md:text-2xl tracking-wide font-medium transition-colors duration-300">
          TECH STACK
        </FlipLink>
        <FlipLink href="#clients" isSectionLink={true} className="text-foreground text-lg md:text-2xl tracking-wide font-medium transition-colors duration-300">
          OUR CLIENTS
        </FlipLink>
        <FlipLink href="#services" isSectionLink={true} className="text-foreground text-lg md:text-2xl tracking-wide font-medium transition-colors duration-300">
          WHAT WE DO
        </FlipLink>
        <FlipLink href="/contact" className="text-foreground text-lg md:text-2xl tracking-wide font-medium transition-colors duration-300">
          CONTACT
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
        <button
          onClick={() => handleSectionLink('#tech-stack')}
          className="text-foreground text-3xl font-medium tracking-wide"
        >
          TECH STACK
        </button>
        <button
          onClick={() => handleSectionLink('#clients')}
          className="text-foreground text-3xl font-medium tracking-wide"
        >
          OUR CLIENTS
        </button>
        <button
          onClick={() => handleSectionLink('#services')}
          className="text-foreground text-3xl font-medium tracking-wide"
        >
          WHAT WE DO
        </button>
        <Link 
          href="/contact" 
          className="text-foreground text-3xl font-medium tracking-wide"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};
