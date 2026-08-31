'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Plus, ExternalLink, ShieldCheck, Users } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

const startupWallShowcase = [
  {
    id: '1',
    name: 'AgriTech AI',
    team: 'Team Alpha',
    category: 'Agritech & AI',
    status: 'Incubated',
    tagBg: 'bg-mint text-emerald-900',
    description: 'Autonomous crop health diagnosis and hyper-local weather risk predictor for smallholder farmers.',
    stats: '₹12L Grant',
  },
  {
    id: '2',
    name: 'Smart Campus IoT',
    team: 'Team Beta',
    category: 'Smart City / IoT',
    status: 'Early Stage',
    tagBg: 'bg-blue-100 text-blue-900',
    description: 'AI-driven energy saving sensors and digital keyless access infrastructure for college dorms.',
    stats: '500+ Users',
  },
  {
    id: '3',
    name: 'RecycLoop',
    team: 'Team Gamma',
    category: 'CleanTech',
    status: 'Scaled',
    tagBg: 'bg-purple-100 text-purple-900',
    description: 'Smart campus reverse vending machines rewarding students with cafeteria credits for plastic recycling.',
    stats: '1.2T Recycled',
  },
  {
    id: '4',
    name: 'FinTrack',
    team: 'Team Delta',
    category: 'FinTech',
    status: 'Incubated',
    tagBg: 'bg-peach text-orange-950',
    description: 'Automated expense tracking and student micro-investing bot built directly on WhatsApp API.',
    stats: '₹5L Raised',
  },
  {
    id: '5',
    name: 'Healthify Telemed',
    team: 'Team Epsilon',
    category: 'HealthTech',
    status: 'Early Stage',
    tagBg: 'bg-emerald-100 text-emerald-900',
    description: 'Instant student mental wellness counseling and emergency first-responder campus dispatch.',
    stats: '24/7 Support',
  },
  {
    id: '6',
    name: 'ByteCraft Robotics',
    team: 'Team Zeta',
    category: 'DeepTech / Robotics',
    status: 'Incubated',
    tagBg: 'bg-amber-100 text-amber-950',
    description: 'Low-cost modular robotic arms designed for engineering college laboratories and STEM schools.',
    stats: '8 Colleges',
  },
];

export const StartupWallHomeSection: React.FC = () => {
  return (
    <section className="gsap-section-reveal py-20 sm:py-24 bg-[#F8F9FA] dark:bg-[#15181E] border-b-4 border-black relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-pattern-isometric-grid pointer-events-none opacity-40 z-0" />

      {/* Floating Memphis Accents */}
      <div className="hidden lg:block absolute left-8 bottom-12 pointer-events-none z-0 animate-hero-spin-slow opacity-30">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
          <path d="M50 0 L60 38 L98 50 L60 62 L50 100 L40 62 L2 50 L40 38 Z" fill="#FF6B35" stroke="#000" strokeWidth="5"/>
        </svg>
      </div>
      <div className="hidden lg:block absolute right-12 top-10 pointer-events-none z-0 animate-shape-float-c">
        <svg width="42" height="42" viewBox="0 0 100 100">
          <polygon points="10,10 90,50 10,90" fill="#4895EF" stroke="#000" strokeWidth="5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header with View Wall Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-block bg-mint text-emerald-900 font-display font-extrabold text-xs px-4 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000] mb-3">
              CAMPUS VENTURE ECOSYSTEM
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
              Startup Wall
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 font-body text-base max-w-xl">
              Breakthrough student ventures incubated, mentored, and accelerated at HIT Haldia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/idea-pitching"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-black bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-display font-black text-xs sm:text-sm shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all"
            >
              <Plus className="w-4 h-4 text-primary" />
              <span>Pitch Your Startup</span>
            </Link>
            <Link
              href="/startups"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-black bg-secondary hover:bg-blue-600 text-white font-display font-black text-xs sm:text-sm shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all"
            >
              <span>Explore All Startups</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Grid Wall Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startupWallShowcase.map((st) => (
            <div
              key={st.id}
              className="memphis-card rounded-3xl p-6 bg-white dark:bg-slate-900 border-3 border-black flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[7px_7px_0px_0px_#000]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-3 py-1 text-[11px] font-display font-black rounded-full border-2 border-black uppercase tracking-wider ${st.tagBg}`}>
                    {st.status}
                  </span>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {st.stats}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-xl text-slate-900 dark:text-white tracking-tight group-hover:text-primary transition-colors">
                    {st.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                    <Users className="w-3 h-3 text-secondary" /> {st.team} • {st.category}
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-body text-slate-600 dark:text-slate-400 leading-relaxed">
                  {st.description}
                </p>
              </div>

              <div className="pt-5 mt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <Link
                  href="/startups"
                  className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-primary hover:underline"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="w-6 h-6 rounded-full border border-black bg-peach flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
