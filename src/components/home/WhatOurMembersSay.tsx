'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dharmendra Pradhan',
    role: 'Education Minister of India',
    quote: 'In a country like ours where job creation and entrepreneurship are critical to become a developed nation, the role of IIT students and alumni is vital. IIT Bombay has produced some of the most successful entrepreneurs who have gone on to create 1000s of jobs. E-Cell IIT Bombay has been instrumental in fostering a culture of innovation among its students. I encourage them to support and nurture budding entrepreneurs in the country who will play a vital role in shaping India’s future.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop', // Placeholder image
  },
  {
    id: '2',
    name: 'Sneha Roy',
    role: 'Founder, EcoTech Labs',
    quote: 'E-Cell transformed my vision into a scalable venture. The faculty guidance and investor connect were invaluable. The community here is electric and everyone is constantly pushing boundaries.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Rahul Karmakar',
    role: 'Lead Developer, TechFest',
    quote: 'The community here is electric. Everyone is constantly pushing boundaries, experimenting, and building real projects. I found my co-founders during an E-Cell ideathon.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
];

export const WhatOurMembersSay: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="gsap-section-reveal py-24 bg-mint/15 border-b-4 border-black relative overflow-hidden">
      {/* Unique Pattern Texture: Mint Bubble Rings */}
      <div className="absolute inset-0 bg-pattern-bubbles pointer-events-none opacity-40 z-0" />

      {/* Decorative Wave Divider at Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-0 opacity-30">
        <svg className="w-full h-8" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C200,80 400,-10 600,60 C800,130 1000,20 1200,60 L1200,0 L0,0 Z" fill="#4895EF" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <SectionHeader
          badge="Testimonial"
          title="What Our Members Say"
          subtitle="Real stories from student innovators, founders, and community champions."
        />

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center max-w-5xl mx-auto mt-12">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide} 
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white border-3 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-0 active:translate-x-0 active:shadow-none transition-all hidden sm:flex text-slate-900"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 stroke-[3]" />
          </button>
          
          <div className="w-full overflow-hidden rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] bg-white">
             {/* Slide track */}
             <div 
               className="flex transition-transform duration-700 ease-in-out" 
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
             >
                {testimonials.map((t) => (
                  <div key={t.id} className="w-full shrink-0">
                    <div className="p-8 md:p-16 text-center flex flex-col items-center h-full min-h-[400px] justify-center">
                       {/* Profile Image */}
                       <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-black mb-6 shadow-[4px_4px_0px_0px_#000] bg-slate-100">
                         <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                       </div>
                       
                       {/* Name and Role */}
                       <h3 className="text-slate-900 font-display font-black text-2xl md:text-3xl mb-1">{t.name}</h3>
                       <p className="text-primary font-display font-bold text-sm md:text-base mb-8 uppercase tracking-wider">{t.role}</p>
                       
                       {/* Quote Section */}
                       <div className="relative w-full max-w-4xl px-6 sm:px-12">
                         <span className="text-[#fde047] font-display font-black text-6xl md:text-8xl absolute -top-8 md:-top-12 left-0 leading-none select-none drop-shadow-[2px_2px_0_#000] z-0">“</span>
                         <p className="text-slate-800 font-body font-semibold text-lg md:text-xl leading-relaxed px-4 sm:px-8 relative z-10 italic">
                           {t.quote}
                         </p>
                         <span className="text-[#fde047] font-display font-black text-6xl md:text-8xl absolute -bottom-12 md:-bottom-16 right-0 leading-none select-none drop-shadow-[2px_2px_0_#000] z-0">”</span>
                       </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={nextSlide} 
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white border-3 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-0 active:translate-x-0 active:shadow-none transition-all hidden sm:flex text-slate-900"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[3]" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3.5 h-3.5 rounded-full border-2 border-black transition-all ${idx === currentIndex ? 'bg-primary scale-125' : 'bg-white hover:bg-slate-200'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
