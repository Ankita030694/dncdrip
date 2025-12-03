'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaFacebookF, FaPhone } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const GRID_SIZE = 20; // 20x20 grid for finer detail

const PixelGrid = ({ color }: { color: string }) => {
  const pixels = useMemo(() => {
    return Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => {
      const col = i % GRID_SIZE;
      const row = Math.floor(i / GRID_SIZE);
      
      // Calculate distance from center (approx 9.5, 9.5)
      const dx = col - 9.5;
      const dy = row - 9.5;
      const distance = Math.sqrt(dx * dx + dy * dy);
      // Adjusted delay multiplier for smoother wave with more particles
      const delay = distance * 0.025;
      
      return (
        <span
          key={i}
          className="bg-[var(--pixel-color)] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
          style={{
            '--pixel-color': color,
            transition: `all 0.2s ease-in-out ${delay}s`,
          } as React.CSSProperties}
        />
      );
    });
  }, [color]);

  return (
    <div 
      className="absolute inset-0 grid w-full h-full pointer-events-none"
      style={{ 
        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`
      }}
    >
      {pixels}
    </div>
  );
};

const SocialLink = ({ 
  href, 
  icon: Icon, 
  color = "#0f0f0f",
  className = "",
  iconClassName = "",
}: { 
  href: string; 
  icon: React.ElementType; 
  color?: string;
  className?: string;
  iconClassName?: string;
}) => {
  return (
    <a 
      href={href} 
      className={`group relative bg-background w-20 h-20 md:w-36 md:h-36 flex items-center justify-center overflow-hidden transition-all duration-500 ${className}`}
    >
      {/* Pixel Wave Background */}
      <PixelGrid color={color} />
      
      {/* Icon */}
      <Icon className={`relative z-10 text-2xl md:text-5xl text-foreground transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-white group-hover:scale-125 ${iconClassName}`} />
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full min-h-screen bg-background text-foreground relative flex flex-col overflow-hidden pt-16 md:pt-24 pb-0">
      
      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10 flex-1 mb-12">
        <div className="flex flex-col lg:flex-row h-full">
          
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between lg:pr-12 border-r-0 lg:border-r border-foreground/20 items-end text-right">
            
            {/* Section Header */}
            <div className="mb-12 w-full text-left">
              <span className="text-sm md:text-base font-medium tracking-wider uppercase">
                04 / CONTACT
              </span>
            </div>

            {/* Main Heading */}
            <div className="flex flex-col mb-12 lg:mb-auto items-end">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-[0.9] pr-12 md:pr-24 lg:pr-32">
                LET'S GET
              </h2>
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-[0.9]">
                IN TOUCH
              </h2>
            </div>

            {/* Social Grid */}
            <div className="mt-12 lg:mt-24">
              <div className="grid grid-cols-3 w-fit">
                 {/* Row 1 */}
                 <div className="w-20 h-20 md:w-24 md:h-24"></div>
                 <SocialLink href="https://instagram.com" icon={FaInstagram} color="#E1306C" className="border border-foreground/20" />
                 <SocialLink href="#" icon={FaLinkedinIn} color="#0077B5" className="border-t border-r border-b border-foreground/20" />

                 {/* Row 2 */}
                 <SocialLink href="#" icon={FaTwitter} color="#1DA1F2" className="border border-foreground/20" />
                 <SocialLink href="mailto:hello@designncode.com" icon={FiMail} color="#EA4335" className="border-r border-b border-foreground/20" />
                 <SocialLink href="#" icon={FaWhatsapp} color="#25D366" className="border-r border-b border-foreground/20" />

                 {/* Row 3 */}
                 <SocialLink href="tel:+1234567890" icon={FaPhone} color="#333333" className="border-l border-r border-b border-foreground/20" iconClassName="rotate-90" />
                 <SocialLink href="#" icon={FaFacebookF} color="#1877F2" className="border-r border-b border-foreground/20" />
                 <div className="w-20 h-20 md:w-24 md:h-24"></div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div className="w-full lg:w-1/2 lg:pl-12 mt-12 lg:mt-0 flex flex-col justify-center">
            <div className="text-lg md:text-xl lg:text-2xl leading-relaxed font-normal">
              <p className="mb-8">Hi Designncode Team,</p>
              
              <p className="mb-4 leading-loose">
                I, <input type="text" placeholder="your name here" className="bg-transparent border-b border-foreground/30 focus:border-foreground outline-none w-40 text-center placeholder:text-foreground/40" /> want help kicking off a project. you can reach via <span className="inline-block text-foreground/60">{'{ Phone / Email }'}</span> at <input type="text" placeholder="_ _ _ _ _ _ _ _" className="bg-transparent border-b border-foreground/30 focus:border-foreground outline-none w-48 text-center placeholder:text-foreground/40" />
              </p>

              <p className="mb-4 leading-loose">
                My business or project is called <input type="text" placeholder="Project name" className="bg-transparent border-b border-foreground/30 focus:border-foreground outline-none w-48 text-center placeholder:text-foreground/40" /> .
                I'm looking for <span className="inline-block text-foreground/60">{'{ Website / E-commerce / UI }'}</span> and I'm aiming to launch by <input type="text" placeholder="Weeks" className="bg-transparent border-b border-foreground/30 focus:border-foreground outline-none w-32 text-center placeholder:text-foreground/40" /> .
              </p>

              <p className="mb-8 leading-loose">
                And here's more about what i have in mind <input type="text" placeholder="Anything else _ _ _ _ _ _ _ _ _ _ _" className="bg-transparent border-b border-foreground/30 focus:border-foreground outline-none w-full max-w-md text-left placeholder:text-foreground/40" /> .
              </p>

              <p className="mb-12">Cheers,</p>

              <button className="bg-foreground text-background px-8 py-3 rounded-full text-sm md:text-base font-bold flex items-center gap-3 hover:opacity-90 transition-opacity w-fit">
                LET'S TALK <div className="w-2 h-2 bg-background rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Giant Text */}
      <div className="w-full relative mt-auto overflow-hidden">
        <div className="w-full text-center">
          <h1 
            className="text-[19vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/20 select-none whitespace-nowrap transition-all duration-300"
            style={{ transform: 'translateY(15%)' }}
          >
            DESIGNNCODE
          </h1>
        </div>
      </div>
    </footer>
  );
};
