'use client';

import React from 'react';
import Link from 'next/link';
import { MemphisButton } from '../common/MemphisButton';
import { ArrowRight } from 'lucide-react';

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

      {/* 4. FLOATING BADGE CARDS (IDEA, LAUNCH, GROWTH, CONNECT) */}

      {/* Card 1: IDEA (Top-Left) */}
      <div className="hidden md:flex absolute left-[3%] lg:left-[5%] xl:left-[7%] top-[20%] z-20 animate-shape-float-a">
        <div className="bg-white dark:bg-slate-900 border-2 border-black/80 dark:border-white/80 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] min-w-[84px] sm:min-w-[96px]">
          <div className="relative">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <line x1="24" y1="4" x2="24" y2="8" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="10" y1="10" x2="13" y2="13" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="38" y1="10" x2="35" y2="13" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="4" y1="24" x2="8" y2="24" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="44" y1="24" x2="40" y2="24" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <path
                d="M16 22 C16 17.58 19.58 14 24 14 C28.42 14 32 17.58 32 22 C32 25.5 30 28 28 30 L28 34 L20 34 L20 30 C18 28 16 25.5 16 22 Z"
                fill="#FFD166"
                stroke="#000"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <line x1="20" y1="38" x2="28" y2="38" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-display font-black text-[11px] sm:text-xs tracking-wider text-slate-800 dark:text-slate-100 uppercase">
            IDEA
          </span>
        </div>
      </div>

      {/* Card 2: LAUNCH (Bottom-Left) */}
      <div className="hidden md:flex absolute left-[4%] lg:left-[6%] xl:left-[8%] top-[50%] z-20 animate-shape-float-b">
        <div className="bg-white dark:bg-slate-900 border-2 border-black/80 dark:border-white/80 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] min-w-[84px] sm:min-w-[96px]">
          <div className="relative">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <path
                d="M24 6 C30 12 34 20 34 30 L28 30 L28 34 L20 34 L20 30 L14 30 C14 20 18 12 24 6 Z"
                fill="#4895EF"
                stroke="#000"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path d="M14 24 L8 30 L14 30 Z" fill="#FF6B35" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M34 24 L40 30 L34 30 Z" fill="#FF6B35" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx="24" cy="18" r="3.5" fill="#FFFFFF" stroke="#000" strokeWidth="2" />
              <line x1="20" y1="38" x2="20" y2="43" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="24" y1="38" x2="24" y2="45" stroke="#FFD166" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="28" y1="38" x2="28" y2="43" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-display font-black text-[11px] sm:text-xs tracking-wider text-slate-800 dark:text-slate-100 uppercase">
            LAUNCH
          </span>
        </div>
      </div>

      {/* Card 3: GROWTH (Top-Right) */}
      <div className="hidden md:flex absolute right-[3%] lg:right-[5%] xl:right-[7%] top-[20%] z-20 animate-shape-float-b">
        <div className="bg-white dark:bg-slate-900 border-2 border-black/80 dark:border-white/80 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] min-w-[84px] sm:min-w-[96px]">
          <div className="relative">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <rect x="10" y="26" width="6" height="14" rx="2" fill="#4895EF" stroke="#000" strokeWidth="2.2" />
              <rect x="20" y="18" width="6" height="22" rx="2" fill="#0077B6" stroke="#000" strokeWidth="2.2" />
              <rect x="30" y="10" width="6" height="30" rx="2" fill="#023E8A" stroke="#000" strokeWidth="2.2" />
              <path d="M10 20 L22 10 L34 6" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 6 L34 6 L34 12" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-display font-black text-[11px] sm:text-xs tracking-wider text-slate-800 dark:text-slate-100 uppercase">
            GROWTH
          </span>
        </div>
      </div>

      {/* Card 4: CONNECT (Bottom-Right) */}
      <div className="hidden md:flex absolute right-[4%] lg:right-[6%] xl:right-[8%] top-[50%] z-20 animate-shape-float-a">
        <div className="bg-white dark:bg-slate-900 border-2 border-black/80 dark:border-white/80 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] min-w-[84px] sm:min-w-[96px]">
          <div className="relative">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <path d="M8 20 L16 14 L23 20 L18 26 L12 24 Z" fill="#FFE5D9" stroke="#000" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M6 18 L10 24" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M40 20 L32 14 L25 20 L30 26 L36 24 Z" fill="#FFE5D9" stroke="#000" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M42 18 L38 24" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M20 23 L24 27 L28 23" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 27 L25 30 L29 26" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-display font-black text-[11px] sm:text-xs tracking-wider text-slate-800 dark:text-slate-100 uppercase">
            CONNECT
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


