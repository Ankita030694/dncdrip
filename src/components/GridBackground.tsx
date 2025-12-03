'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface GridBackgroundProps {
  tileSize?: number; // Size of each square tile in pixels
  gap?: number; // Gap between tiles in pixels
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  tileSize = 70,
  gap = 6,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tiles, setTiles] = useState<number[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  // Calculate the number of tiles needed to cover the screen
  const calculateGrid = useCallback(() => {
    if (!containerRef.current) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Calculate columns and rows based on tile size + gap
    const cols = Math.ceil(width / (tileSize + gap));
    const rows = Math.ceil(height / (tileSize + gap));
    
    const totalTiles = cols * rows;
    
    // Create an array of indices to render
    setTiles(Array.from({ length: totalTiles }, (_, i) => i));
    
    // Set CSS variables for the grid layout
    containerRef.current.style.setProperty('--cols', cols.toString());
    containerRef.current.style.setProperty('--rows', rows.toString());
    containerRef.current.style.setProperty('--tile-size', `${tileSize}px`);
    containerRef.current.style.setProperty('--gap', `${gap}px`);
  }, [tileSize, gap]);

  const handleMove = useCallback((x: number, y: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = x - rect.left;
    const relativeY = y - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${relativeX}px`);
    containerRef.current.style.setProperty('--mouse-y', `${relativeY}px`);
    
    if (!isHovering) setIsHovering(true);
  }, [isHovering]);

  useEffect(() => {
    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, [calculateGrid]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX, e.touches[0].clientY);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [handleMove]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-[var(--grid-bg)] overflow-hidden z-0 transition-colors duration-300"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(var(--cols), var(--tile-size))`,
        gridTemplateRows: `repeat(var(--rows), var(--tile-size))`,
        gap: `var(--gap)`,
        justifyContent: 'center',
        alignContent: 'center',
      } as React.CSSProperties}
    >
      {/* 
        Layer 1: The Glow 
        This sits BEHIND the tiles. The tiles are opaque, so this glow
        is only visible through the 'gap' between the grid cells.
      */}
      <div 
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(
            350px circle at var(--mouse-x) var(--mouse-y), 
            var(--glow-start), 
            var(--glow-mid), 
            transparent 70%
          )`
        }}
      />

      {/* 
        Layer 3: The Tiles 
        These are the actual grid items. They are opaque.
        They block the glow, creating the "grid lines are glowing" effect.
      */}
      {tiles.map((tile) => (
        <div 
          key={tile}
          className="bg-[var(--grid-bg)] w-full h-full relative transition-colors duration-300"
        />
      ))}
    </div>
  );
};
