'use client';

import React from 'react';
import Image from 'next/image';

const FlipText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-hidden group cursor-default">
      <div className="transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        <span className="block">{children}</span>
        <span className="block absolute top-full left-0 w-full">{children}</span>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center z-10 px-4 pointer-events-none">
      <div className="flex flex-col items-start transition-transform gap-3 md:gap-6 -mt-25 w-full md:w-auto">
        {/* Line 1 */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground transition-colors duration-300">
          WE TURN "HMM"
        </h1>
        
        {/* Line 2 */}
        <div className="flex items-center relative w-full md:w-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground whitespace-normal md:whitespace-nowrap leading-[1.1] md:leading-[1.25] transition-colors duration-300 max-w-[80vw] md:max-w-none">
            WEBSITES INTO “DAMN,
          </h1>
          {/* Laptop Image */}
          <div className="absolute -right-2 sm:-right-16 md:-right-24 lg:-right-20 top-1/2 -translate-y-1/2 md:top-1 md:-translate-y-1/2 pointer-events-auto hidden sm:block">
            <Image 
              src="/laptop.png" 
              alt="Laptop" 
              width={400} 
              height={400}
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain transform hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Line 3 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6 md:gap-12">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground transition-colors duration-300">
            THAT’S COOL
          </h1>
          
          {/* CTA Button */}
          <button className="pointer-events-auto shrink-0 px-6 py-2 md:px-10 md:py-3 bg-foreground text-background rounded-full font-bold text-sm md:text-xl flex items-center gap-3 hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] shadow-[0_0_20px_rgba(0,0,0,0.3)] mt-4 md:mt-0">
            LET’S TALK
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-background rounded-full transition-colors duration-300"></div>
          </button>
        </div>
      </div>

      {/* Bottom Services Section */}
      <div className="absolute bottom-8 md:bottom-12 w-full px-4 md:px-24 pointer-events-auto">
        <div className="w-full h-[2px] bg-foreground mb-6 transition-colors duration-300"></div>
        <div className="flex flex-wrap justify-between md:justify-start gap-4 md:gap-16 text-foreground font-medium text-xs sm:text-sm md:text-xl tracking-wider transition-colors duration-300">
          <FlipText>WEBSITE</FlipText>
          <FlipText>MARKETING</FlipText>
          <FlipText>UI/UX</FlipText>
          <FlipText>APP DEV</FlipText>
          <FlipText>BRANDING</FlipText>
        </div>
      </div>
    </div>
  );
};
