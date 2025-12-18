'use client';

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ClientLogo {
  src: string;
  link?: string;
}

const MobileClientsGrid = ({ logos }: { logos: ClientLogo[] }) => {
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
        {currentLogos.map((logo, index) => {
          const content = (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={logo.src}
                alt="Client logo"
                className="object-contain max-w-full max-h-full w-auto h-auto"
                loading="lazy"
              />
            </div>
          );

          return logo.link ? (
            <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-24 flex items-center justify-center p-4 bg-white shadow-[7px_7px_18.2px_0_rgba(0,0,0,0.56)] rounded-[20px] transition-all duration-300 hover:scale-105 block"
            >
              {content}
            </a>
          ) : (
            <div 
              key={index} 
              className="w-full h-24 flex items-center justify-center p-4 bg-white shadow-[7px_7px_18.2px_0_rgba(0,0,0,0.56)] rounded-[20px]"
            >
              {content}
            </div>
          );
        })}
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

const clientLogos: ClientLogo[] = [
  { src: "/clientlogo/1.png", link: "https://sexsea.in" },
  { src: "/clientlogo/2.png", link: "https://anyadha.in" },
  { src: "/clientlogo/3.png", link: "https://houseofkaa.com/" },
  { src: "/clientlogo/4.png", link: "https://adornocasa.com/" },
  { src: "/clientlogo/5.png", link: "https://kamalmotors.in/" },
  { src: "/clientlogo/6.png", link: "https://tototerraa.com/" },
  { src: "/clientlogo/7.png", link: "https://bloomcafes.com/" },
  { src: "/clientlogo/8.png", link: "http://kichunstudio.com/" },
  { src: "/clientlogo/9.png" },
  { src: "/clientlogo/10.svg", link: "https://amalegalsolutions.com/" },
  { src: "/clientlogo/11.png", link: "https://rockersjr.com/" },
  { src: "/clientlogo/12.png", link: "https://foire.in/" },
  { src: "/clientlogo/13.png", link: "http://delhihousecafe.com/" },
  { src: "/clientlogo/14.png", link: "http://upstagecollect.com/" },
  { src: "/clientlogo/15.png", link: "https://mamajama.in/" },
  { src: "/clientlogo/16.svg", link: "https://www.credsettle.com/" }
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
          {clientLogos.map((logo, index) => {
            const content = (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={`Client logo ${index + 1}`}
                  className="object-contain max-w-full max-h-full w-auto h-auto"
                  loading="lazy"
                />
              </div>
            );

            return logo.link ? (
              <a
                key={index}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-24 md:h-36 flex items-center justify-center p-4 md:p-6 bg-white shadow-[7px_7px_18.2px_0_rgba(0,0,0,0.56)] rounded-[20px] border border-transparent dark:border-transparent transition-all duration-300 hover:scale-105 block"
              >
                {content}
              </a>
            ) : (
              <div 
                key={index} 
                className="w-full h-24 md:h-36 flex items-center justify-center p-4 md:p-6 bg-white shadow-[7px_7px_18.2px_0_rgba(0,0,0,0.56)] rounded-[20px] border border-transparent dark:border-transparent transition-all duration-300 hover:scale-105"
              >
                {content}
              </div>
            );
          })}
        </div>

        {/* Mobile Grid with Pagination */}
        <MobileClientsGrid logos={clientLogos} />
      </div>
    </section>
  );
};
