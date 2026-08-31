'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

interface UpcomingEventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  tag: string;
  tagColor: string;
  daysLeft?: number;
  hoursLeft?: number;
  minsLeft?: number;
}

const upcomingEventsData: UpcomingEventItem[] = [
  {
    id: '1',
    title: 'Ideathon 2026',
    date: '25 May, 2026',
    location: 'HIT Haldia Auditorium',
    description: 'Ideate, innovate and build solutions for pressing real-world sustainability and campus challenges.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
    tag: 'Flagship Hackathon',
    tagColor: 'bg-primary text-white',
    daysLeft: 12,
    hoursLeft: 5,
    minsLeft: 30,
  },
  {
    id: '2',
    title: 'Startup Bootcamp',
    date: '10 Jun, 2026',
    location: 'Incubation Centre, Room 204',
    description: 'Intensive 3-day founder bootcamp to master product-market fit, unit economics, and venture scaling.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
    tag: 'Hands-on Workshop',
    tagColor: 'bg-secondary text-white',
    daysLeft: 28,
    hoursLeft: 14,
    minsLeft: 45,
  },
  {
    id: '3',
    title: 'Investor Connect 2026',
    date: '20 Jul, 2026',
    location: 'Main Seminar Hall',
    description: 'Pitch live to seasoned angel syndicates, venture capitalists, and state incubation funds.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop',
    tag: 'Pitch & Funding',
    tagColor: 'bg-emerald-500 text-white',
    daysLeft: 68,
    hoursLeft: 8,
    minsLeft: 15,
  },
];

export const UpcomingEventsHomeSection: React.FC = () => {
  return (
    <section className="gsap-section-reveal py-20 sm:py-24 bg-white dark:bg-slate-950 border-b-4 border-black relative overflow-hidden">
      {/* Background Accent Patterns */}
      <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-30 z-0" />

      {/* Floating Memphis Geometric Accents */}
      <div className="hidden lg:block absolute left-6 top-10 pointer-events-none z-0 animate-shape-float-a">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="38" stroke="#4895EF" strokeWidth="12" />
          <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" />
        </svg>
      </div>
      <div className="hidden lg:block absolute right-8 top-12 pointer-events-none z-0 animate-shape-float-b">
        <svg width="48" height="48" viewBox="0 0 100 100">
          <polygon points="50,5 95,95 5,95" fill="#FFD166" stroke="#000" strokeWidth="5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header with View All Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-block bg-[#FFE5D9] text-primary font-display font-extrabold text-xs px-4 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000] mb-3">
              WHAT&apos;S HAPPENING NEXT
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
              Upcoming Events
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 font-body text-base max-w-xl">
              Don&apos;t miss out on high-energy hackathons, summit keynotes, and founder workshops.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-black bg-[#FFD166] hover:bg-[#ffc63b] text-black font-display font-black text-sm shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all w-fit"
          >
            <span>Explore All Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Large Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEventsData.map((ev) => (
            <div
              key={ev.id}
              className="memphis-card rounded-3xl bg-white dark:bg-slate-900 border-3 border-black overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#000]"
            >
              <div>
                {/* Event Image Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b-3 border-black bg-slate-100">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Tag badge */}
                  <span
                    className={`absolute top-4 right-4 text-xs font-display font-black px-3.5 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000] ${ev.tagColor}`}
                  >
                    {ev.tag}
                  </span>
                </div>

                {/* Event Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Countdown Timer Strip */}
                  {ev.daysLeft !== undefined && (
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-display font-black text-slate-500 uppercase flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-primary" /> Starts In:
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div className="px-2 py-0.5 rounded-md border border-black bg-orange-100 dark:bg-orange-950 font-mono font-bold text-xs text-primary">
                          {ev.daysLeft}d
                        </div>
                        <div className="px-2 py-0.5 rounded-md border border-black bg-orange-100 dark:bg-orange-950 font-mono font-bold text-xs text-primary">
                          {ev.hoursLeft}h
                        </div>
                        <div className="px-2 py-0.5 rounded-md border border-black bg-orange-100 dark:bg-orange-950 font-mono font-bold text-xs text-primary">
                          {ev.minsLeft}m
                        </div>
                      </div>
                    </div>
                  )}

                  <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight leading-snug">
                    {ev.title}
                  </h3>

                  <div className="space-y-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span>{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{ev.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-body text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              </div>

              {/* Bottom Register CTA */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  href="/events"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl border-2 border-black font-display font-black text-xs sm:text-sm bg-primary hover:bg-orange-600 text-white transition-all shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 active:shadow-none"
                >
                  <span>Register for Event</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
