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
        
       

      </div>

      <Footer />
    </main>
  );
}

