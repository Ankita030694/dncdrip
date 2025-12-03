'use client';

import React from 'react';
import Image from 'next/image';

const clientLogos = [
  "/clientlogo/88F8482F-C350-44A7-940E-386058BB49C9-removebg-preview-1.png",
  "/clientlogo/Asset_1_2x_1-removebg-preview-1.png",
  "/clientlogo/cropped-Black_and_White_Simple_Business_QR_Code_Square_Sticker__1_-removebg-preview-removebg-preview-1.png",
  "/clientlogo/foire_logo_1_-01-removebg-preview-1.png",
  "/clientlogo/image_url__2Ftrans-removebg-preview-1.png",
  "/clientlogo/KM-gradient-logo-300x300-1__2_-removebg-preview-1.png",
  "/clientlogo/Logo_Lockup__1_-removebg-preview-1.png",
  "/clientlogo/Logo_Primary_Logo-1.png",
  "/clientlogo/logo-png-2-removebg-preview-1.png",
  "/clientlogo/mama_jama_logo_2__page-0001-removebg-preview-(1)-1.png",
  "/clientlogo/Photoroom_20250407_110636__1_-removebg-preview-1.png",
  "/clientlogo/Red_w_transparent_bg_1-removebg-preview-1.png",
  "/clientlogo/transparent-D0veniAb__1_-removebg-preview-1.png",
  "/clientlogo/V8j2cZmgnw2QfyRrLoMDfxJsu64-removebg-preview-1.png",
  "/clientlogo/WhatsApp_Image_2025-09-30_at_10.44.53_c9d9cf5d-removebg-preview-1.png",
  "/clientlogo/WhatsApp-Image-2022-08-04-at-1.16.15-AM-1-4-removebg-preview-1.png"
];

export const Clients = () => {
  return (
    <section className="w-full min-h-screen py-24 px-4 md:px-24 relative">
      {/* Section Number */}
      <div className="absolute top-8 left-4 md:left-24 text-foreground text-sm md:text-xl font-medium tracking-wider transition-colors duration-300">
        02 / OUR CLIENTS
      </div>

      <div className="flex flex-col gap-16 mt-12">
        {/* Title */}
        <h2 className="text-4xl md:text-7xl font-bold text-foreground tracking-tighter transition-colors duration-300">
          OUR CLIENTS
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {clientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="w-full h-24 md:h-36 flex items-center justify-center p-4 md:p-6 bg-white shadow-[7px_7px_18.2px_0_rgba(0,0,0,0.56)] rounded-[20px] border border-transparent dark:border-transparent transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="object-contain"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
