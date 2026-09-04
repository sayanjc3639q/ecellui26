'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setStageFilter } from '@/store/slices/startupsSlice';
import { StartupStage } from '@/types/startup';
import { SectionHeader } from '@/components/common/SectionHeader';
import { MemphisCard } from '@/components/common/MemphisCard';
import {
  Rocket,
  Users,
  ExternalLink,
  Tag,
  Plus,
  TrendingUp,
  Search,
  Sparkles,
  Award,
} from 'lucide-react';

const STAGES: ('All' | StartupStage)[] = ['All', 'Idea', 'Early Stage', 'Incubated', 'Scaled'];

const extraWallStartups = [
  {
    id: 'st-5',
    name: 'AgriTech AI',
    tagline: 'Autonomous crop health diagnosis and hyper-local weather risk predictor for smallholder farmers.',
    stage: 'Incubated' as StartupStage,
    founders: ['Rahul Verma', 'Sneha Roy'],
    domain: 'AgriTech',
    foundedYear: 2024,
    logoUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'st-6',
    name: 'Smart Campus IoT',
    tagline: 'AI-driven energy saving sensors and digital keyless access infrastructure for college dorms.',
    stage: 'Early Stage' as StartupStage,
    founders: ['Aman Gupta', 'Pooja Jha'],
    domain: 'IoT & Smart Cities',
    foundedYear: 2025,
    logoUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'st-7',
    name: 'RecycLoop',
    tagline: 'Smart campus reverse vending machines rewarding students with cafeteria credits for plastic recycling.',
    stage: 'Scaled' as StartupStage,
    founders: ['Vikram Sen', 'Kavita Das'],
    domain: 'CleanTech',
    foundedYear: 2024,
    logoUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'st-8',
    name: 'ByteCraft Robotics',
    tagline: 'Low-cost modular robotic arms designed for engineering college laboratories and STEM schools.',
    stage: 'Incubated' as StartupStage,
    founders: ['Deepak Shaw', 'Arjun Dey'],
    domain: 'Robotics',
    foundedYear: 2026,
    logoUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=400&auto=format&fit=crop',
  },
];

export default function StartupsPage() {
  const dispatch = useAppDispatch();
  const { items, selectedStage } = useAppSelector((state) => state.startups);
  const [searchQuery, setSearchQuery] = useState('');

  // Combined list of startups
  const allStartups = [...items, ...extraWallStartups];

  const filteredStartups = allStartups.filter((s) => {
    const matchesStage = selectedStage === 'All' || s.stage === selectedStage;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStage && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen bg-[#FAF8F5] dark:bg-[#121418] text-slate-900 dark:text-white">
      {/* 1. HERO BANNER */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b-4 border-black bg-[#FAF8F5] dark:bg-slate-950">
        {/* Decorative Memphis curved color wings */}
        <div className="absolute -top-16 -left-12 w-[34vw] min-w-[320px] max-w-[520px] h-[120%] bg-[#D8F3DC] dark:bg-[#132a22] border-r-3 border-b-3 border-black rounded-br-[180px] pointer-events-none z-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)]" />
        <div className="absolute -top-12 -right-16 w-[36vw] min-w-[340px] max-w-[560px] h-[130%] bg-[#FFE5D9] dark:bg-[#32201c] border-l-3 border-b-3 border-black rounded-bl-[220px] pointer-events-none z-0 shadow-[-6px_6px_0px_0px_rgba(0,0,0,0.15)]" />

        {/* Pattern overlays */}
        <div className="absolute inset-0 bg-pattern-isometric-grid pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-30 z-0" />

        {/* Floating elements */}
        <div className="hidden lg:block absolute left-8 bottom-10 pointer-events-none z-0 animate-shape-float-a">
          <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="38" stroke="#FF6B35" strokeWidth="12" />
            <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" />
          </svg>
        </div>
        <div className="hidden lg:block absolute right-10 top-12 pointer-events-none z-0 animate-hero-spin-slow opacity-30">
          <svg width="46" height="46" viewBox="0 0 100 100" fill="none">
            <path d="M50 0 L60 38 L98 50 L60 62 L50 100 L40 62 L2 50 L40 38 Z" fill="#4895EF" stroke="#000" strokeWidth="5"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="inline-block">
            <span className="inline-block px-5 py-1.5 bg-mint text-emerald-950 font-display font-black text-xs uppercase tracking-widest rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000]">
              CAMPUS STARTUP WALL
            </span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-slate-950 dark:text-white leading-tight drop-shadow-[5px_5px_0px_#4895EF]">
            Startup Wall
          </h1>

          <div className="inline-block max-w-2xl mx-auto p-1 bg-white dark:bg-slate-900 rounded-full border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff]">
            <p className="font-body text-slate-700 dark:text-slate-200 text-sm sm:text-base px-8 py-3 font-semibold leading-relaxed">
              Explore breakout student ventures, incubated companies, and visionary founders building right here at HIT Haldia.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <Link
              href="/idea-pitching"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-black bg-primary hover:bg-orange-600 text-white font-display font-black text-xs sm:text-sm shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Pitch Your Startup to the Wall</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white dark:bg-slate-900 rounded-3xl border-3 border-black shadow-[5px_5px_0px_0px_#000]">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search startup, domain, tech..."
              className="w-full pl-10 pr-4 py-2.5 text-xs font-bold rounded-full border-2 border-black bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          </div>

          {/* Stage Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {STAGES.map((stage) => (
              <button
                key={stage}
                onClick={() => dispatch(setStageFilter(stage))}
                className={`px-4 py-2 text-xs font-black font-display uppercase rounded-full border-2 border-black transition-all ${
                  selectedStage === stage
                    ? 'bg-secondary text-white shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STARTUPS WALL GRID */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStartups.map((startup) => (
            <div
              key={startup.id}
              className="memphis-card rounded-3xl bg-white dark:bg-slate-900 border-3 border-black overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#000]"
            >
              <div>
                {/* Logo & Stage Header */}
                <div className="relative h-44 w-full overflow-hidden border-b-3 border-black bg-slate-100">
                  <img
                    src={startup.logoUrl || 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400&auto=format&fit=crop'}
                    alt={startup.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 text-xs font-display font-black px-3.5 py-1 rounded-full border-2 border-black bg-mint text-emerald-950 shadow-[2px_2px_0px_0px_#000]">
                    {startup.stage}
                  </span>
                  <span className="absolute bottom-3 left-3 text-[11px] font-display font-black px-3 py-0.5 rounded-full border-2 border-black bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-[2px_2px_0px_0px_#000] flex items-center gap-1">
                    <Tag className="w-3 h-3 text-primary" />
                    {startup.domain}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white tracking-tight">
                      {startup.name}
                    </h3>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      Est. {startup.foundedYear}
                    </span>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {startup.tagline}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Users className="w-3.5 h-3.5 text-secondary" />
                    <span>Founders: {startup.founders.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <Link
                  href="/idea-pitching"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-black font-display font-black text-xs bg-[#FFE5D9] hover:bg-primary hover:text-white text-slate-950 transition-all shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5 active:shadow-none"
                >
                  <span>Connect & Collaborate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredStartups.length === 0 && (
          <div className="text-center py-16 space-y-4 bg-white dark:bg-slate-900 rounded-3xl border-3 border-black shadow-[4px_4px_0px_0px_#000]">
            <p className="font-display font-black text-xl text-slate-900 dark:text-white">
              No startups found matching your filter.
            </p>
            <button
              onClick={() => {
                dispatch(setStageFilter('All'));
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full border-2 border-black bg-primary text-white font-display font-black text-xs shadow-[2px_2px_0px_0px_#000]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
