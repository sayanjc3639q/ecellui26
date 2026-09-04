'use client';

import React from 'react';
import Link from 'next/link';
import { MemphisButton } from '../common/MemphisButton';
import { ArrowRight, Users, Laptop, Megaphone, Handshake } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen lg:h-screen pt-20 pb-4 flex flex-col justify-center items-center overflow-hidden border-b-4 border-black bg-white dark:bg-[#121418] text-center bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
      {/* Semi-transparent tint so text and shapes stand out over hero-bg.png */}
      <div className="absolute inset-0 bg-white/50 dark:bg-black/60 pointer-events-none z-0" />

      {/* 1. TEXTURE PATTERNS: Polka Dots & Crosses */}
      <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-30 z-0" />
      <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-35 z-0" />

      {/* 2. LAYERED BACKGROUND TEXTURE BOXES */}
      <div className="hidden xl:block absolute left-4 top-28 w-40 h-40 bg-memphis-stripes border-2 border-dashed border-primary/40 rounded-3xl pointer-events-none z-0" />
      <div className="hidden xl:block absolute right-6 bottom-16 w-48 h-48 bg-memphis-stripes border-2 border-dashed border-secondary/40 rounded-full pointer-events-none z-0" />

      {/* 3. FLOATING MEMPHIS GEOMETRIC SHAPES */}

      {/* Shape 1: Memphis Ring / Donut (Top Left) */}
      <div className="hidden lg:block absolute left-[3%] top-[24%] pointer-events-none z-10 animate-shape-float-a">
        <svg width="54" height="54" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="38" stroke="#FF6B35" strokeWidth="14" />
          <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" />
        </svg>
      </div>

      {/* Shape 2: Animated Squiggle / Snake Wave (Top Right) */}
      <div className="hidden lg:block absolute right-[4%] top-[22%] pointer-events-none z-10 animate-shape-float-b">
        <svg width="86" height="36" viewBox="0 0 160 60" fill="none">
          <path
            d="M 10 30 Q 30 5 50 30 T 90 30 T 130 30 T 170 30"
            stroke="#4895EF"
            strokeWidth="10"
            strokeLinecap="round"
            className="animate-squiggle"
          />
        </svg>
      </div>

      {/* Shape 3: Memphis Solid Yellow Triangle (Mid Left) */}
      <div className="hidden xl:block absolute left-[8%] bottom-[16%] pointer-events-none z-10 animate-shape-float-c">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <polygon points="50,10 90,85 10,85" fill="#FFD166" stroke="#000" strokeWidth="6" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Shape 4: Memphis Starburst / Cross (Mid Right) */}
      <div className="hidden xl:block absolute right-[8%] bottom-[16%] pointer-events-none z-10 animate-hero-spin-slow">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
          <path d="M50 0 L60 38 L98 50 L60 62 L50 100 L40 62 L2 50 L40 38 Z" fill="#06D6A0" stroke="#000" strokeWidth="5"/>
        </svg>
      </div>

      {/* 4. FLOATING BADGE CARDS (CORE TEAM, TECH TEAM, MEDIA TEAM, PR TEAM) */}

      {/* Card 1: CORE TEAM (Top-Left) */}
      <div className="hidden md:flex absolute left-[3%] lg:left-[5%] xl:left-[7%] top-[20%] z-20 animate-shape-float-a">
        <div className="bg-white dark:bg-slate-900 border-2 border-black/80 dark:border-white/80 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] min-w-[84px] sm:min-w-[96px]">
          <div className="w-9 h-9 rounded-full bg-[#FFD166] border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000]">
            <Users className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <span className="font-display font-black text-[10px] sm:text-[11px] tracking-wider text-slate-800 dark:text-slate-100 uppercase">
            CORE TEAM
          </span>
        </div>
      </div>

      {/* Card 2: TECH TEAM (Bottom-Left) */}
      <div className="hidden md:flex absolute left-[4%] lg:left-[6%] xl:left-[8%] top-[50%] z-20 animate-shape-float-b">
        <div className="bg-white dark:bg-slate-900 border-2 border-black/80 dark:border-white/80 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] min-w-[84px] sm:min-w-[96px]">
          <div className="w-9 h-9 rounded-full bg-[#4895EF] border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000]">
            <Laptop className="w-5 h-5 text-white stroke-[2.5]" />
          </div>
          <span className="font-display font-black text-[10px] sm:text-[11px] tracking-wider text-slate-800 dark:text-slate-100 uppercase">
            TECH TEAM
          </span>
        </div>
      </div>

      {/* Card 3: MEDIA TEAM (Top-Right) */}
      <div className="hidden md:flex absolute right-[3%] lg:right-[5%] xl:right-[7%] top-[20%] z-20 animate-shape-float-b">
        <div className="bg-white dark:bg-slate-900 border-2 border-black/80 dark:border-white/80 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] min-w-[84px] sm:min-w-[96px]">
          <div className="w-9 h-9 rounded-full bg-[#FBDAE9] border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000]">
            <Megaphone className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <span className="font-display font-black text-[10px] sm:text-[11px] tracking-wider text-slate-800 dark:text-slate-100 uppercase">
            MEDIA TEAM
          </span>
        </div>
      </div>

      {/* Card 4: PR TEAM (Bottom-Right) */}
      <div className="hidden md:flex absolute right-[4%] lg:right-[6%] xl:right-[8%] top-[50%] z-20 animate-shape-float-a">
        <div className="bg-white dark:bg-slate-900 border-2 border-black/80 dark:border-white/80 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] min-w-[84px] sm:min-w-[96px]">
          <div className="w-9 h-9 rounded-full bg-[#D8F3DC] border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000]">
            <Handshake className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <span className="font-display font-black text-[10px] sm:text-[11px] tracking-wider text-slate-800 dark:text-slate-100 uppercase">
            PR TEAM
          </span>
        </div>
      </div>

      {/* 5. HERO CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-7 relative z-20 my-auto">
        <h1 className="gsap-hero-item font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-white leading-[1.08]">
          Innovation Starts<br />with You
        </h1>
        <p className="gsap-hero-item font-body text-slate-700 dark:text-slate-200 text-base sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
          We’re here to accelerate it. Build, launch, and scale your ideas with the finest minds in the ecosystem.
        </p>
        
        {/* Buttons */}
        <div className="gsap-hero-item flex flex-wrap justify-center items-center gap-4 sm:gap-6 pt-1">
          <Link href="/events">
            <button className="flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-display font-extrabold text-base sm:text-lg bg-primary text-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 transition-all">
              Explore Events <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/idea-pitching">
            <button className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-display font-extrabold text-base sm:text-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 transition-all">
              Share Your Idea
            </button>
          </Link>
        </div>

        {/* 6. LOWER PATH-LIKE PROCESS TIMELINE (IDEA -> BUILD -> CONNECT -> LAUNCH -> SCALE) */}
        <div className="gsap-hero-item pt-4 sm:pt-6 lg:pt-8">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 sm:gap-5 lg:gap-7 max-w-4xl mx-auto">
            {/* Step 1: IDEA */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-13 h-13 sm:w-15 sm:h-15 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <span className="font-display font-black text-xs sm:text-sm tracking-wider text-slate-900 dark:text-white uppercase">
                IDEA
              </span>
              <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
                Think Big
              </span>
            </div>

            {/* Dotted Connector */}
            <div className="hidden md:flex flex-1 items-center justify-center px-1">
              <div className="w-full border-t-2 border-dashed border-primary/70" />
            </div>

            {/* Step 2: BUILD */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                <span className="font-mono font-black text-base sm:text-lg tracking-tighter">
                  &lt;/&gt;
                </span>
              </div>
              <span className="font-display font-black text-xs sm:text-sm tracking-wider text-slate-900 dark:text-white uppercase">
                BUILD
              </span>
              <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
                Create
              </span>
            </div>

            {/* Dotted Connector */}
            <div className="hidden md:flex flex-1 items-center justify-center px-1">
              <div className="w-full border-t-2 border-dashed border-primary/70" />
            </div>

            {/* Step 3: CONNECT */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="font-display font-black text-xs sm:text-sm tracking-wider text-slate-900 dark:text-white uppercase">
                CONNECT
              </span>
              <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
                Collaborate
              </span>
            </div>

            {/* Dotted Connector */}
            <div className="hidden md:flex flex-1 items-center justify-center px-1">
              <div className="w-full border-t-2 border-dashed border-primary/70" />
            </div>

            {/* Step 4: LAUNCH */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <span className="font-display font-black text-xs sm:text-sm tracking-wider text-slate-900 dark:text-white uppercase">
                LAUNCH
              </span>
              <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
                Take Off
              </span>
            </div>

            {/* Dotted Connector */}
            <div className="hidden md:flex flex-1 items-center justify-center px-1">
              <div className="w-full border-t-2 border-dashed border-primary/70" />
            </div>

            {/* Step 5: SCALE */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <span className="font-display font-black text-xs sm:text-sm tracking-wider text-slate-900 dark:text-white uppercase">
                SCALE
              </span>
              <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
                Grow Bigger
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


