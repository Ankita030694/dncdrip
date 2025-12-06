'use client';

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MobileClientsGrid = ({ logos }: { logos: string[] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(logos.length / ITEMS_PER_PAGE);

  const handlePrev = () => setCurrentPage(p => Math.max(0, p - 1));
  const handleNext = () => setCurrentPage(p => Math.min(totalPages - 1, p + 1));

  const currentLogos = logos.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  return (
    <div className="flex md:hidden flex-col gap-6">
      <div 
        key={currentPage}
        className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-8 duration-500 ease-out"
      >
        {currentLogos.map((logo, index) => (
          <div 
            key={index} 
            className="w-full h-24 flex items-center justify-center p-4 bg-white shadow-[7px_7px_18.2px_0_rgba(0,0,0,0.56)] rounded-[20px]"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={logo}
                alt="Client logo"
                className="object-contain max-w-full max-h-full w-auto h-auto"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-center gap-6 mt-4">
        <button 
          onClick={handlePrev} 
          disabled={currentPage === 0}
          className="p-3 rounded-full bg-foreground text-background disabled:opacity-30 transition-opacity"
        >
          <FaArrowLeft />
        </button>
        <span className="text-foreground font-medium">
          {currentPage + 1} / {totalPages}
        </span>
        <button 
          onClick={handleNext} 
          disabled={currentPage === totalPages - 1}
          className="p-3 rounded-full bg-foreground text-background disabled:opacity-30 transition-opacity"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const clientLogos = [
  "/clientlogo/1.png",
  "/clientlogo/2.png",
  "/clientlogo/3.png",
  "/clientlogo/4.png",
  "/clientlogo/5.png",
  "/clientlogo/6.png",
  "/clientlogo/7.png",
  "/clientlogo/8.png",
  "/clientlogo/9.png",
  "/clientlogo/10.png",
  "/clientlogo/11.png",
  "/clientlogo/12.png",
  "/clientlogo/13.png",
  "/clientlogo/14.png",
  "/clientlogo/15.png",
  "/clientlogo/16.png"
];

export const Clients = () => {
  return (
    <section id="clients" className="w-full min-h-screen py-24 px-4 md:px-24 relative">
      {/* Section Number */}
      <div className="absolute top-8 left-4 md:left-24 text-foreground text-sm md:text-xl font-medium tracking-wider transition-colors duration-300">
        02 / OUR CLIENTS
      </div>

      <div className="flex flex-col gap-16 mt-12">
        {/* Title */}
        <h2 className="text-4xl md:text-7xl font-bold text-foreground tracking-tight transition-colors duration-300">
          OUR CLIENTS
        </h2>

        {/* Logos Grid */}
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-5">
          {clientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="w-full h-24 md:h-36 flex items-center justify-center p-4 md:p-6 bg-white shadow-[7px_7px_18.2px_0_rgba(0,0,0,0.56)] rounded-[20px] border border-transparent dark:border-transparent transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="object-contain max-w-full max-h-full w-auto h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid with Pagination */}
        <MobileClientsGrid logos={clientLogos} />
      </div>
    </section>
  );
};
