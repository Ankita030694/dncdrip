'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';

const techStack = [
  { name: 'MongoDB', src: '/techlogo/MongoDB 1.png', color: '#47A248' },
  { name: 'Framer', src: '/techlogo/fQMob2FoUa+cAEv04jD9MWQ+P+zDQnTXbf0Ce5LG2CKr+lcUwZZmgM5bq0kpJuIEsTqJXLfWluWGeyFpzDdWDtZX6kB5ccxaMBGHKncs30PuRmMQFTMxhYzddiAibX3ykMT5ScQaYCir7zKmMmDScrZnj+D6z+SWcLi940AAAAAElFTkSuQmCC-removebg-preview 1.png', color: '#0055FF' },
  { name: 'React', src: '/techlogo/React 1.png', color: '#61DAFB' },
  { name: 'Cloudflare', src: '/techlogo/Cloudflare 1.png', color: '#F38020' },
  { name: 'Tailwind', src: '/techlogo/Tailwind CSS 1.png', color: '#06B6D4' },
  { name: 'Shopify', src: '/techlogo/Shopify 1.png', color: '#96BF48' },
  { name: 'Node.js', src: '/techlogo/Node.js 1.png', color: '#339933' },
  { name: 'MySQL', src: '/techlogo/mMPFPpGk7sIAAAAASUVORK5CYII_-removebg-preview 1.png', color: '#4479A1' },
  { name: 'Flutter', src: '/techlogo/Flutter 1.png', color: '#02569B' },
  { name: 'JavaScript', src: '/techlogo/JavaScript 1.png', color: '#F7DF1E' },
  { name: 'Figma', src: '/techlogo/Figma 1.png', color: '#F24E1E' },
  { name: 'Waves', src: '/techlogo/tailwind-removebg-preview 1.png', color: '#38BDF8' },
  { name: 'Firebase', src: '/techlogo/Rpg4R913R9kAAAAASUVORK5CYII_-removebg-preview 1.png', color: '#FFCA28' },
  { name: 'WordPress', src: '/techlogo/Z-removebg-preview (1) 1.png', color: '#21759B' },
  { name: 'Next.js', src: '/techlogo/Next.js 1.png', color: '#000000' },
];

const GRID_SIZE = 20; // 20x20 grid

const PixelGrid = ({ color }: { color: string }) => {
  const pixels = useMemo(() => {
    return Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => {
      const col = i % GRID_SIZE;
      const row = Math.floor(i / GRID_SIZE);
      
      // Calculate distance from center (approx 9.5, 9.5)
      const dx = col - 9.5;
      const dy = row - 9.5;
      const distance = Math.sqrt(dx * dx + dy * dy);
      // Delay based on distance: wave effect
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
      className="absolute inset-0 grid w-full h-full pointer-events-none z-0"
      style={{ 
        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`
      }}
    >
      {pixels}
    </div>
  );
};

const SquareCorner = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const styles = {
    tl: "-top-1 -left-1",
    tr: "-top-1 -right-1",
    bl: "-bottom-1 -left-1",
    br: "-bottom-1 -right-1",
  };
  return (
    <div className={`absolute ${styles[position]} w-2 h-2 bg-transparent border border-foreground/40 z-20 transition-colors duration-300`} />
  );
};

export const TechStack = () => {
  return (
    <div className="relative w-full min-h-screen bg-transparent text-foreground flex items-center justify-center px-4 md:px-24 py-24 z-10 transition-colors duration-300">
      <div className="w-full">
        <div className="text-foreground text-xs md:text-xl tracking-widest font-medium mb-4 transition-colors duration-300">
          01 / TECH STACK
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 relative">
          
          {/* Header Section - Spans 4 columns on desktop */}
          <div className="col-span-2 md:col-span-4 p-6 md:p-12 border-r border-b border-foreground/30 relative min-h-[200px] flex flex-col justify-between group transition-colors duration-300">
           
            
            {/* Main Heading */}
            <div className="mt-auto">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-[0.9]">
                TECH STACK WE
                <br />
                <span className="flex items-center">
                  LOVE
                  <Image src="/pixelheart.png" alt="Heart" width={100} height={100} className="object-contain opacity-100 grayscale-0 rotate-40 -ml-4 md:-ml-7 w-16 h-16 md:w-[120px] md:h-[120px]" />
                </span>
              </h2>
            </div>
          </div>

          {/* AWS Tile - Top Right */}
          <div className="hidden md:flex col-span-1 border-r border-b border-t border-foreground/30 items-center justify-center p-4 aspect-square relative group overflow-hidden transition-colors duration-300">
             {/* Corners */}
             <SquareCorner position="tl" />
             <SquareCorner position="tr" />
             <SquareCorner position="bl" />
             <SquareCorner position="br" />

             <PixelGrid color="#FF9900" />

             <div className="relative w-full h-full flex items-center justify-center z-10">
               <Image
                 src="/techlogo/AWS 1.png"
                 alt="AWS"
                 width={100}
                 height={100}
                 className="object-contain opacity-100 grayscale-0 transition-transform duration-300 group-hover:scale-110"
               />
             </div>
          </div>

          {/* Mobile AWS Tile (Visible only on mobile) */}
           <div className="md:hidden col-span-1 border-r border-b border-t border-foreground/30 flex items-center justify-center p-4 aspect-square relative group overflow-hidden transition-colors duration-300">
             {/* Corners */}
             <SquareCorner position="tl" />
             <SquareCorner position="tr" />
             <SquareCorner position="bl" />
             <SquareCorner position="br" />

             <PixelGrid color="#FF9900" />

             <div className="relative w-full h-full flex items-center justify-center z-10">
               <Image
                 src="/techlogo/AWS 1.png"
                 alt="AWS"
                 width={80}
                 height={80}
                 className="object-contain opacity-100 grayscale-0 transition-transform duration-300 group-hover:scale-110"
               />
             </div>
          </div>

          {/* Grid Items */}
          {techStack.map((tech, index) => (
            <div 
              key={tech.name} 
              className={`col-span-1 border-r border-b border-foreground/30 aspect-square flex items-center justify-center p-4 transition-colors duration-300 relative group overflow-hidden ${index % 5 === 0 ? 'border-l border-l-foreground/30' : ''}`}
            >
              {/* Corners */}
              <SquareCorner position="tl" />
              <SquareCorner position="tr" />
              <SquareCorner position="bl" />
              <SquareCorner position="br" />

              <PixelGrid color={tech.color} />

              <div className="relative w-full h-full flex items-center justify-center z-10">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={130}
                  height={130}
                  className="object-contain opacity-100 grayscale-0 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
