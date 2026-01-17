'use client';

import React from 'react';
import Image from 'next/image';

export const AboutUs = () => {
  return (
    <section id="about" className="w-full min-h-screen flex flex-col justify-center py-24 px-4 md:px-24 relative overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-8 left-4 md:left-24 text-foreground text-sm md:text-xl font-medium tracking-wider transition-colors duration-300">
        01 / ABOUT US
      </div>

      <div className="flex flex-col gap-12 mt-12">
        {/* Title */}
        <h2 className="text-4xl md:text-7xl font-bold text-foreground tracking-tight transition-colors duration-300">
          ABOUT US
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Left Content - Text */}
          <div className="flex-1 flex flex-col gap-8 text-lg md:text-xl leading-relaxed text-foreground/80 font-medium">
            <p>
              Hey there <span className="text-2xl">👋</span> I’m Ankita, the brain (and caffeine) behind DesignnCode — where creativity meets clean code.
            </p>
            <p>
              I don’t just build websites… I craft digital experiences that look stunning, load fast, and actually convert. Whether it’s a brand-new startup or a business ready for a glow-up, I help ideas turn into scroll-stopping, pixel-perfect websites.
            </p>
            <p>
              Think of me as your designer, developer, and creative partner — all rolled into one. From brainstorming wild ideas to turning them into sleek, functional websites, I make sure every project screams “this brand gets it!”
            </p>
            <p>
              When I’m not designing or breaking things just to fix them better (guilty <span className="text-2xl">🤓</span>), you’ll find me exploring design trends, obsessing over animations, and hunting for that perfect font that changes everything.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="hidden md:block flex-1 w-full max-w-md md:max-w-xl relative aspect-[4/5] md:aspect-square">
            <div className="absolute inset-0 rounded-3xl -z-10 transform rotate-3"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/ankita.png"
                alt="Ankita from DesignnCode"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
