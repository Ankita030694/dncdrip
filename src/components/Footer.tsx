'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaFacebookF, FaPhone } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const GRID_SIZE = 20; // 20x20 grid for finer detail

const PixelGrid = ({ color }: { color: string }) => {
  const pixels = useMemo(() => {
    return Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => {
      const col = i % GRID_SIZE;
      const row = Math.floor(i / GRID_SIZE);
      
      // Calculate distance from center (approx 9.5, 9.5)
      const dx = col - 9.5;
      const dy = row - 9.5;
      const distance = Math.sqrt(dx * dx + dy * dy);
      // Adjusted delay multiplier for smoother wave with more particles
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
      className="absolute inset-0 grid w-full h-full pointer-events-none"
      style={{ 
        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`
      }}
    >
      {pixels}
    </div>
  );
};

const SocialLink = ({ 
  href, 
  icon: Icon, 
  color = "#0f0f0f",
  className = "",
  iconClassName = "",
}: { 
  href: string; 
  icon: React.ElementType; 
  color?: string;
  className?: string;
  iconClassName?: string;
}) => {
  return (
    <a 
      href={href} 
      className={`group relative bg-background w-20 h-20 md:w-36 md:h-36 flex items-center justify-center overflow-hidden transition-all duration-500 ${className}`}
    >
      {/* Pixel Wave Background */}
      <PixelGrid color={color} />
      
      {/* Icon */}
      <Icon className={`relative z-10 text-2xl md:text-5xl text-foreground transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-white group-hover:scale-125 ${iconClassName}`} />
    </a>
  );
};

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    serviceType: 'Website',
    timeline: '',
    details: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    let processedValue = value;
    
    if (name === 'name') {
      // No numeric characters allowed in name
      processedValue = value.replace(/[0-9]/g, '');
    } else if (name === 'phone') {
      // Only numeric values and max 10 digits
      processedValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (name === 'timeline') {
      // Only numeric values for weeks
      processedValue = value.replace(/\D/g, '');
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }));
  };

  const handleSubmit = async () => {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', project: '', serviceType: 'Website', timeline: '', details: '' });
        alert('Message sent successfully!');
      } else {
        setStatus('error');
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert('An error occurred.');
    }
  };

  return (
    <footer id="contact" className="w-full min-h-screen bg-background text-foreground relative flex flex-col overflow-hidden pt-16 md:pt-24 pb-0">
      
      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10 flex-1 mb-12">
        <div className="flex flex-col lg:flex-row h-full">
          
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between lg:pr-12 border-r-0 lg:border-r border-borderColor/20 items-end text-right">
            
            {/* Section Header */}
            <div className="mb-12 w-full text-left">
              <span className="text-sm md:text-base font-medium tracking-wider uppercase">
                04 / CONTACT
              </span>
            </div>

            {/* Main Heading */}
            <div className="flex flex-col mb-12 lg:mb-auto items-end">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tight leading-[0.9] pr-12 md:pr-24 lg:pr-32">
                LET'S GET
              </h2>
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tight leading-[0.9]">
                IN TOUCH
              </h2>
            </div>

            {/* Social Grid */}
            <div className="mt-12 lg:mt-24">
              <div className="grid grid-cols-3 w-fit">
                 {/* Row 1 */}
                 <div className="w-20 h-20 md:w-24 md:h-24"></div>
                 <SocialLink href="https://instagram.com" icon={FaInstagram} color="#E1306C" className="border border-borderColor/20" />
                 <SocialLink href="#" icon={FaLinkedinIn} color="#0077B5" className="border-t border-r border-b border-borderColor/20" />

                 {/* Row 2 */}
                 <SocialLink href="#" icon={FaTwitter} color="#1DA1F2" className="border border-borderColor/20" />
                 <SocialLink href="mailto:hello@designncode.com" icon={FiMail} color="#EA4335" className="border-r border-b border-borderColor/20" />
                 <SocialLink href="#" icon={FaWhatsapp} color="#25D366" className="border-r border-b border-borderColor/20" />

                 {/* Row 3 */}
                 <SocialLink href="tel:+1234567890" icon={FaPhone} color="#333333" className="border-l border-r border-b border-borderColor/20" iconClassName="rotate-90" />
                 <SocialLink href="#" icon={FaFacebookF} color="#1877F2" className="border-r border-b border-borderColor/20" />
                 <div className="w-20 h-20 md:w-24 md:h-24"></div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div className="w-full lg:w-1/2 lg:pl-12 mt-12 lg:mt-0 flex flex-col justify-center">
            <div className="text-lg md:text-xl lg:text-2xl leading-relaxed font-normal">
              <p className="mb-8">Hi Designncode Team,</p>
              
              <p className="mb-4 leading-loose">
                I, <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="your name here" className="bg-transparent border-b border-borderColor/30 focus:border-borderColor outline-none w-40 text-center placeholder:text-foreground/40" /> want help kicking off a project. you can reach via <span className="inline-block text-foreground/60">{'{ Email }'}</span> at <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" className="bg-transparent border-b border-borderColor/30 focus:border-borderColor outline-none w-48 text-center placeholder:text-foreground/40" /> and <span className="inline-block text-foreground/60">{'{ Phone }'}</span> at <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="10 digit number" className="bg-transparent border-b border-borderColor/30 focus:border-borderColor outline-none w-48 text-center placeholder:text-foreground/40" />
              </p>

              <p className="mb-4 leading-loose">
                My business or project is called <input type="text" name="project" value={formData.project} onChange={handleChange} placeholder="Project name" className="bg-transparent border-b border-borderColor/30 focus:border-borderColor outline-none w-48 text-center placeholder:text-foreground/40" /> .
                I'm looking for 
                <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="bg-transparent border-b border-borderColor/30 focus:border-borderColor outline-none text-center text-foreground mx-2 cursor-pointer appearance-none">
                  <option value="Website">Website</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="UI">UI</option>
                </select>
                and I'm aiming to launch by <input type="text" name="timeline" value={formData.timeline} onChange={handleChange} placeholder="Weeks" className="bg-transparent border-b border-borderColor/30 focus:border-borderColor outline-none w-32 text-center placeholder:text-foreground/40" /> .
              </p>

              <p className="mb-8 leading-loose">
                And here's more about what i have in mind <input type="text" name="details" value={formData.details} onChange={handleChange} placeholder="Anything else _ _ _ _ _ _ _ _ _ _ _" className="bg-transparent border-b border-borderColor/30 focus:border-borderColor outline-none w-full max-w-md text-left placeholder:text-foreground/40" /> .
              </p>

              <p className="mb-12">Cheers,</p>

              <button onClick={handleSubmit} disabled={status === 'sending'} className="bg-foreground text-background px-8 py-3 rounded-full text-sm md:text-base font-bold flex items-center gap-3 hover:opacity-90 transition-opacity w-fit disabled:opacity-50">
                {status === 'sending' ? 'SENDING...' : "LET'S TALK"} <div className="w-2 h-2 bg-background rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Giant Text */}
      <div className="w-full relative mt-auto overflow-hidden">
        <div className="w-full text-center">
          <h1 
            className="text-[19vw] leading-none font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/20 dark:to-foreground/5 select-none whitespace-nowrap transition-all duration-300"
            style={{ transform: 'translateY(15%)' }}
          >
            DESIGNNCODE
          </h1>
        </div>
      </div>
    </footer>
  );
};
