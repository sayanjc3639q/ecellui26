'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface EventData {
  id: string;
  slug: string;
  title: string;
  categoryBadge: string;
  badgeType: 'blue' | 'dark' | 'yellow';
  dateLocation: string;
  description: string;
  image: string;
  buttonType: 'orange-arrow' | 'gray-outline' | 'blue-arrow';
  buttonText: string;
  type: 'Upcoming' | 'Past' | 'Workshops';
}

const eventsList: EventData[] = [
  {
    id: '1',
    slug: 'e-summit-2024',
    title: 'E-Summit 2024',
    categoryBadge: 'Upcoming',
    badgeType: 'blue',
    dateLocation: 'Oct 15 | Main Auditorium',
    description:
      'Our flagship event bringing together founders, investors, and students for two days of intense networking and learning.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    buttonType: 'orange-arrow',
    buttonText: 'View Details & Pass',
    type: 'Upcoming',
  },
  {
    id: '2',
    slug: 'lean-startup-workshop',
    title: 'Lean Startup Workshop',
    categoryBadge: 'Workshop',
    badgeType: 'yellow',
    dateLocation: 'Nov 02 | Room 304',
    description:
      'Master the art of building MVPs and validating your ideas quickly without breaking the bank.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    buttonType: 'gray-outline',
    buttonText: 'View Details & Pass',
    type: 'Workshops',
  },
  {
    id: '3',
    slug: 'innovation-challenge',
    title: 'Innovation Challenge',
    categoryBadge: 'Hackathon',
    badgeType: 'dark',
    dateLocation: 'Dec 10-12 | Campus Ground',
    description:
      'A 48-hour sprint to solve real-world problems. Pitch your solution to top tier VCs and win seed funding.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
    buttonType: 'blue-arrow',
    buttonText: 'Team Register (Hackathon)',
    type: 'Upcoming',
  },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Past' | 'Workshops'>('Upcoming');

  const filteredEvents = eventsList.filter((event) => {
    if (activeTab === 'Upcoming') return event.type === 'Upcoming' || event.type === 'Workshops';
    if (activeTab === 'Workshops') return event.type === 'Workshops';
    return event.type === activeTab;
  });

  return (
    <div className="pt-20 min-h-screen bg-[#faf8f5] dark:bg-[#121418] text-slate-900 dark:text-white">
      {/* 1. HERO HEADER WITH CRISP SOLID MEMPHIS SHAPES */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b-4 border-black bg-[#faf8f5] dark:bg-slate-950">
        {/* Left Big Solid Lilac / Sky Blue Curved Shape */}
        <div 
          className="absolute -top-16 -left-12 w-[34vw] min-w-[320px] max-w-[520px] h-[120%] bg-[#DCE7FD] dark:bg-[#1a233a] border-r-3 border-b-3 border-black rounded-br-[180px] pointer-events-none z-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)]"
        />

        {/* Right Big Solid Peach / Apricot Oval Curved Shape */}
        <div 
          className="absolute -top-12 -right-16 w-[36vw] min-w-[340px] max-w-[560px] h-[130%] bg-[#FFE3D6] dark:bg-[#32201c] border-l-3 border-b-3 border-black rounded-bl-[220px] pointer-events-none z-0 shadow-[-6px_6px_0px_0px_rgba(0,0,0,0.15)]"
        />

        {/* Diagonal Cross & Dot Memphis Overlays across the center */}
        <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-30 z-0" />

        {/* Floating Geometric Memphis Accents */}
        <div className="hidden lg:block absolute left-8 bottom-10 pointer-events-none z-0 animate-shape-float-a">
          <svg width="42" height="42" viewBox="0 0 100 100">
            <polygon points="50,5 95,95 5,95" fill="#FF6B35" stroke="#000" strokeWidth="5" />
          </svg>
        </div>
        <div className="hidden lg:block absolute right-10 top-12 pointer-events-none z-0 animate-shape-float-b">
          <svg width="48" height="48" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="38" stroke="#4895EF" strokeWidth="14" fill="none" />
            <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          {/* Yellow Pill Badge */}
          <div className="inline-block">
            <span className="inline-block px-5 py-1.5 bg-[#FFD166] text-slate-950 font-display font-black text-xs uppercase tracking-widest rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000]">
              JOIN THE HUSTLE
            </span>
          </div>

          {/* Main Title with Memphis 3D Offset Shadow Effect */}
          <h1 className="font-display font-black text-6xl sm:text-8xl tracking-tight text-slate-950 dark:text-white leading-tight drop-shadow-[5px_5px_0px_#FF6B35]">
            Our Events
          </h1>

          {/* Subtitle Inside Memphis Rounded Pill Frame */}
          <div className="inline-block max-w-2xl mx-auto p-1 bg-white dark:bg-slate-900 rounded-full border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff]">
            <p className="font-body text-slate-700 dark:text-slate-200 text-sm sm:text-base px-8 py-3 font-semibold leading-relaxed">
              Igniting ideas through workshops, hackathons, and summits. Dive into the entrepreneurial ecosystem and build the future.
            </p>
          </div>

          {/* Filter Pills (Upcoming / Past / Workshops) */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-4">
            {(['Upcoming', 'Past', 'Workshops'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-7 py-2 text-sm font-display font-black rounded-full border-2 border-black dark:border-white transition-all ${
                  activeTab === tab
                    ? 'bg-[#FFE5D9] dark:bg-slate-800 text-slate-950 dark:text-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] -translate-y-0.5'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EVENTS CARDS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-slate-900 rounded-[36px] border-4 border-black dark:border-white overflow-hidden shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div>
                {/* Card Top Image with Rounded Arch & Badge */}
                <div className="relative h-60 w-full overflow-hidden border-b-4 border-black bg-slate-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {event.categoryBadge && (
                    <span
                      className={`absolute top-4 right-4 text-xs font-display font-black px-4 py-1.5 rounded-full border-2 border-black ${
                        event.badgeType === 'blue'
                          ? 'bg-[#0052cc] text-white shadow-[2px_2px_0px_0px_#000]'
                          : 'bg-[#5c4015] text-amber-100 shadow-[2px_2px_0px_0px_#000]'
                      }`}
                    >
                      {event.categoryBadge}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-7 space-y-4">
                  {/* Date & Location */}
                  <div className="flex items-center gap-2 text-xs font-display font-black text-[#0066cc] dark:text-[#4895ef]">
                    <Calendar className="w-4 h-4" />
                    <span>{event.dateLocation}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-tight leading-snug">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Card Bottom CTA Button */}
              <div className="p-7 pt-0">
                <Link href={`/events/${event.slug}`} className="block w-full">
                  {event.buttonType === 'orange-arrow' && (
                    <button className="w-full py-3.5 px-6 rounded-full bg-[#c03908] hover:bg-[#a63006] text-white font-display font-black text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all">
                      {event.buttonText} <ArrowRight className="w-4 h-4" />
                    </button>
                  )}

                  {event.buttonType === 'gray-outline' && (
                    <button className="w-full py-3.5 px-6 rounded-full bg-[#e5e5e5] dark:bg-slate-800 hover:bg-[#d4d4d4] text-slate-900 dark:text-white font-display font-black text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all">
                      {event.buttonText} <Eye className="w-4 h-4" />
                    </button>
                  )}

                  {event.buttonType === 'blue-arrow' && (
                    <button className="w-full py-3.5 px-6 rounded-full bg-[#0052cc] hover:bg-[#0043a8] text-white font-display font-black text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all">
                      {event.buttonText} <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

