'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { MemphisCard } from '../common/MemphisCard';
import { MemphisButton } from '../common/MemphisButton';
import { Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { BsLinkedin } from 'react-icons/bs';

interface LeadMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  color: string;
}

const leadsList: LeadMember[] = [
  {
    id: '1',
    name: 'Karan Verma',
    role: 'President',
    department: 'Computer Science & Engineering',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    color: 'bg-primary/20',
  },
  {
    id: '2',
    name: 'Ananya Patel',
    role: 'Operational Lead',
    department: 'Information Technology',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    color: 'bg-secondary/20',
  },
  {
    id: '3',
    name: 'Rohan Gupta',
    role: 'Creative & Tech Director',
    department: 'Electronics & Communication',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    color: 'bg-amber-300/30',
  },
  {
    id: '4',
    name: 'Neha Singh',
    role: 'Marketing Lead',
    department: 'Business Administration',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    color: 'bg-green-300/30',
  },
  {
    id: '5',
    name: 'Bhavish Aggarwal',
    role: 'Co-founder, OLA',
    department: 'Guest Speaker',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop',
    color: 'bg-orange-300/30',
  },
];

export const MeetOurTeamHome: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="gsap-section-reveal py-24 bg-peach/25 border-b-4 border-black relative overflow-hidden">
      {/* Unique Pattern Texture: Crosshatch Plus Grid */}
      <div className="absolute inset-0 bg-pattern-crosshatch pointer-events-none opacity-55 z-0" />

      {/* Floating Memphis Polygon Shape */}
      <div className="hidden lg:block absolute right-16 bottom-8 pointer-events-none z-0 animate-shape-float-c opacity-40">
        <svg width="45" height="45" viewBox="0 0 100 100">
          <polygon points="50,5 95,95 5,95" fill="#FFE5D9" stroke="#000" strokeWidth="6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <div className="inline-block px-4 py-1.5 bg-black text-white font-display font-extrabold text-xs rounded-full border-2 border-black uppercase tracking-wider mb-3">
              Leadership
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900">Meet Our Team</h2>
            <p className="text-lg text-slate-600 font-body mt-2">The 3 core leads spearheading innovation at E-Cell HIT.</p>
          </div>
          <Link href="/team">
            <MemphisButton variant="dark">View All Members</MemphisButton>
          </Link>
        </div>

        <div className="relative group/slider mt-12">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-3 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-0 active:translate-x-0 active:shadow-none transition-all hidden sm:flex text-slate-900"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 pb-8 pt-4 px-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {leadsList.map((lead) => (
              <div key={lead.id} className="min-w-[280px] md:min-w-[320px] shrink-0 snap-center">
                <MemphisCard className="group relative p-8 h-80 flex flex-col items-center justify-center text-center overflow-hidden z-10 bg-white">
                  {/* Hover Background Image */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <img src={lead.image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60" />
                  </div>

                  {/* Content (Z-10 to stay above hover background) */}
                  <div className="relative z-10 flex flex-col items-center justify-between w-full h-full">
                    {/* Circular Profile Photo */}
                    <div className="w-32 h-32 rounded-full border-3 border-black overflow-hidden bg-slate-100 group-hover:opacity-0 group-hover:scale-75 transition-all duration-500 origin-center shadow-[4px_4px_0px_0px_#000]">
                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div className="mt-auto space-y-1">
                      <h3 className="text-2xl font-display font-black text-slate-900 group-hover:text-white transition-colors duration-300">
                        {lead.name}
                      </h3>
                      <p className="text-primary font-display font-bold text-base group-hover:text-white transition-colors duration-300">
                        {lead.role}
                      </p>
                    </div>
                  </div>
                </MemphisCard>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-3 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-0 active:translate-x-0 active:shadow-none transition-all hidden sm:flex text-slate-900"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>
        </div>
      </div>
    </section>
  );
};
