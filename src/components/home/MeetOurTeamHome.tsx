'use client';

import React from 'react';
import Link from 'next/link';
import { MemphisCard } from '../common/MemphisCard';
import { MemphisButton } from '../common/MemphisButton';
import { Mail } from 'lucide-react';
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
];

export const MeetOurTeamHome: React.FC = () => {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
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

        <div className="gsap-cards-grid grid md:grid-cols-3 gap-8">
          {leadsList.map((lead) => (
            <MemphisCard key={lead.id} className="p-6 space-y-5 group overflow-hidden">
              <div className="relative h-72 rounded-2xl overflow-hidden border-3 border-black">
                <img src={lead.image} alt={lead.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className={`absolute inset-0 ${lead.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-black text-slate-900">{lead.name}</h3>
                <p className="text-primary font-display font-bold text-base">{lead.role}</p>
                <p className="text-xs text-slate-500 font-body mt-1">{lead.department}</p>
                <div className="flex gap-3 mt-4">
                  <a href="#" className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                    <BsLinkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </MemphisCard>
          ))}
        </div>
      </div>
    </section>
  );
};
