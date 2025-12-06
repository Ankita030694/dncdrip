'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';

const techStack = [
  { name: 'MongoDB', src: '/techlogo/6.png', color: '#47A248' },
  { name: 'Framer', src: '/techlogo/14.png', color: '#0055FF' },
  { name: 'React', src: '/techlogo/9.png', color: '#61DAFB' },
  { name: 'Cloudflare', src: '/techlogo/2.png', color: '#F38020' },
  { name: 'Tailwind', src: '/techlogo/12.png', color: '#06B6D4' },
  { name: 'Shopify', src: '/techlogo/11.png', color: '#96BF48' },
  { name: 'Node.js', src: '/techlogo/8.png', color: '#339933' },
  { name: 'MySQL', src: '/techlogo/15.png', color: '#4479A1' },
  { name: 'Flutter', src: '/techlogo/4.png', color: '#02569B' },
  { name: 'JavaScript', src: '/techlogo/5.png', color: '#F7DF1E' },
  { name: 'Figma', src: '/techlogo/3.png', color: '#F24E1E' },
  { name: 'Waves', src: '/techlogo/16.png', color: '#38BDF8' },
  { name: 'Firebase', src: '/techlogo/10.png', color: '#FFCA28' },
  { name: 'WordPress', src: '/techlogo/13.png', color: '#21759B' },
  { name: 'Next.js', src: '/techlogo/7.png', color: '#000000' },
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
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="tech-stack" className="relative w-full min-h-screen bg-transparent text-foreground flex items-center justify-center px-4 md:px-24 py-24 z-10 transition-colors duration-300">
      <div className="w-full">
        <div className="text-foreground text-xs md:text-xl tracking-widest font-medium mb-4 transition-colors duration-300">
          01 / TECH STACK
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-5 relative">
          
          {/* Header Section - Spans 4 columns on desktop */}
          <div className="col-span-4 p-12 border-r border-b border-foreground/30 relative min-h-[200px] flex flex-col justify-between group transition-colors duration-300">
           
            {/* Main Heading */}
            <div className="mt-auto">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-medium tracking-tight leading-[0.9]">
                TECH STACK WE
                <br />
                <span className="flex items-center">
                  LOVE
                  <Image src="/pixelheart.png" alt="Heart" width={100} height={100} className="object-contain opacity-100 grayscale-0 rotate-40 -ml-4 md:-ml-7 w-16 h-16 md:w-[120px] md:h-[120px]" unoptimized />
                </span>
              </h2>
            </div>
          </div>

          {/* AWS Tile - Top Right */}
          <div className="col-span-1 border-r border-b border-t border-foreground/30 flex items-center justify-center p-4 aspect-square relative group overflow-hidden transition-colors duration-300">
             {/* Corners */}
             <SquareCorner position="tl" />
             <SquareCorner position="tr" />
             <SquareCorner position="bl" />
             <SquareCorner position="br" />

             <div className="relative w-full h-full flex items-center justify-center z-10">
               <Image
                 src="/techlogo/1.png"
                 alt="AWS"
                 width={100}
                 height={100}
                 className="object-contain opacity-100 grayscale-0 transition-transform duration-300"
                 unoptimized
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

              <div className="relative w-full h-full flex items-center justify-center z-10">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={130}
                  height={130}
                  className="object-contain opacity-100 grayscale-0 transition-transform duration-300"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden flex-col w-full">
          {/* Mobile Header */}
          <div className="mb-12">
            <h2 className="text-6xl font-bold tracking-tight leading-[0.9]">
              TECH STACK WE
              <br />
              <span className="flex items-center">
                LOVE
                <Image src="/pixelheart.png" alt="Heart" width={80} height={80} className="object-contain opacity-100 grayscale-0 rotate-40 -ml-4 w-16 h-16" unoptimized />
              </span>
            </h2>
          </div>

          {/* Mobile Carousel */}
          <div className="w-full aspect-square border border-foreground/30 relative flex flex-col items-center justify-center overflow-hidden">
             <SquareCorner position="tl" />
             <SquareCorner position="tr" />
             <SquareCorner position="bl" />
             <SquareCorner position="br" />
             
             <div className="w-full h-full overflow-hidden relative">
               <div 
                 className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
               >
                 {techStack.map((tech, index) => (
                   <div key={index} className="min-w-full h-full flex items-center justify-center p-12 flex-shrink-0">
                     <Image
                       src={tech.src}
                       alt={tech.name}
                       width={200}
                       height={200}
                       className="object-contain"
                       unoptimized
                     />
                   </div>
                 ))}
               </div>
             </div>
             
             {/* Progress Indicators */}
             <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
               {techStack.map((_, idx) => (
                 <div 
                   key={idx} 
                   className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-foreground' : 'w-1.5 bg-foreground/20'}`}
                 />
               ))}
             </div>
          </div>
          <div className="mt-4 text-center text-sm font-medium tracking-widest text-foreground/60 h-6">
            {techStack[currentIndex].name}
          </div>
        </div>

      </div>
    </div>
  );
};
