'use client';

import React from 'react';
import Image from 'next/image';

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

export const Services = () => {
  return (
    <section id="services" className="w-full min-h-screen py-24 px-4 md:px-24 relative">
      {/* Section Number */}
      <div className="absolute top-8 left-4 md:left-24 text-foreground text-sm md:text-xl font-medium tracking-wider transition-colors duration-300">
        03 / OUR SERVICES
      </div>

      <div className="flex flex-col gap-16 mt-12">
        {/* Title Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold text-foreground tracking-tight leading-[0.9] transition-colors duration-300">
              What We Do
            </h2>
            <div className="relative w-20 h-20 md:w-32 md:h-32 -ml-4 md:-ml-8 -mt-2 md:-mt-4">
              <Image
                src="/superpower.png"
                alt="Superpower"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <p className="text-foreground text-xl md:text-2xl font-medium tracking-wide transition-colors duration-300">
            (a.k.a Our Superpowers)
          </p>
        </div>

        {/* Services Grid */}
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {services.map((service) => (
            <div 
              key={service.id}
              className="p-8 flex flex-col gap-6 min-h-[320px] bg-[var(--card-bg)] transition-colors duration-300"
            >
              <div className="text-foreground text-4xl md:text-5xl font-bold transition-colors duration-300">
                {service.id}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-foreground text-2xl md:text-3xl font-bold tracking-wide transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-base md:text-lg leading-relaxed mt-10 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide scroll-smooth">
          {services.map((service) => (
            <div 
              key={service.id}
              className="min-w-full snap-center p-8 flex flex-col gap-6 min-h-[320px] bg-[var(--card-bg)] transition-colors duration-300 border border-borderColor/10"
            >
              <div className="text-foreground text-4xl font-bold transition-colors duration-300">
                {service.id}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-foreground text-2xl font-bold tracking-wide transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-base leading-relaxed mt-6 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-foreground/60 mt-12 transition-colors duration-300"></div>
      </div>
    </section>
  );
};
