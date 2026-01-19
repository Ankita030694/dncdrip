"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/919220721921"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:rotate-12 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
      
      {/* Optional: Add a pulsing effect ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping -z-10"></span>
    </a>
  );
};
