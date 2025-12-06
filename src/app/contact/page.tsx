'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    id: "01",
    title: "UI/UX Design",
    description: "We craft digital experiences that are intuitive, beautiful, and a joy to use. Because ugly websites are so 2010."
  },
  {
    id: "02",
    title: "Website Development",
    description: "Our focus is on creating incredibly fast, smooth, and genuinely scroll-stopping websites that engage every visitor."
  },
  {
    id: "03",
    title: "E-Commerce",
    description: "We specialize in building streamlined and secure online stores designed to efficiently turn casual visitors into loyal, repeat buyers."
  },
  {
    id: "04",
    title: "Branding & Strategy",
    description: "We dive deep to define your unique brand story, then make it iconic and unmistakable across all platforms."
  },
  {
    id: "05",
    title: "Custom Solutions",
    description: "Bring us your most unique challenges, and we’ll provide the tailored code and expertise. If you can dream it, we can code it."
  },
  {
    id: "06",
    title: "Performance Marketing",
    description: "We deliver campaigns that go beyond simple traffic generation to focus on real results. Get ready for an ROI that does a happy dance."
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Navbar />
      
      <div className="pt-32 pb-24 w-full overflow-hidden flex flex-col">
        
        {/* Title Section */}
        <div className="px-6 md:px-24 mb-16">
           <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                What We Do
              </h2>
              <div className="relative w-16 h-16 md:w-24 md:h-24 -ml-2 md:-ml-4 -mt-2">
                <Image
                  src="/superpower.png"
                  alt="Superpower"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-xl md:text-2xl font-medium tracking-wide">
              (a.k.a Our Superpowers)
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full relative px-6 md:px-24">
          {/* Scrollable Container */}
          <div className="overflow-x-auto pb-8 -mx-6 md:-mx-0 px-6 md:px-0 scrollbar-hide snap-x snap-mandatory">
             <div className="flex w-max gap-0.5"> {/* gap-0.5 to match home page grid gap */}
               {services.map((service) => (
                 <div 
                   key={service.id}
                   // Using w-[calc(100vw-3rem)] for mobile (full width minus padding)
                   // Using w-[400px] or similar fixed width for desktop to match card size? 
                   // User said "keep height and width same as it is in the home page".
                   // Home page uses grid-cols-3. So width depends on container width.
                   // Let's try to mimic 1/3 of container width.
                   className="w-[85vw] md:w-[30vw] flex-shrink-0 snap-center bg-[var(--card-bg)]"
                 >
                   <div className="p-8 flex flex-col gap-6 min-h-[320px] h-full justify-between transition-colors duration-300">
                      <div className="text-4xl md:text-5xl font-bold text-foreground transition-colors duration-300">
                        {service.id}
                      </div>
                      <div className="flex flex-col gap-4">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-wide transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-foreground/70 text-base md:text-lg leading-relaxed mt-10 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}

