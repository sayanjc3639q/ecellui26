'use client';

import React from 'react';
import Link from 'next/link';
import { MemphisButton } from '../common/MemphisButton';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-40 pb-44 min-h-[88vh] flex items-center justify-center overflow-hidden relative border-b-4 border-black bg-white dark:bg-[#121418] text-center bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
      {/* Semi-transparent tint so text and shapes stand out over hero-bg.png */}
      <div className="absolute inset-0 bg-white/50 dark:bg-black/60 pointer-events-none z-0" />

      {/* 1. TEXTURE PATTERNS: Polka Dots & Crosses */}
      <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-30 z-0" />
      <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-35 z-0" />

      {/* 2. LAYERED BACKGROUND TEXTURE BOXES */}
      <div className="hidden lg:block absolute left-6 top-24 w-48 h-48 bg-memphis-stripes border-2 border-dashed border-primary/40 rounded-3xl pointer-events-none z-0" />
      <div className="hidden lg:block absolute right-10 bottom-28 w-56 h-56 bg-memphis-stripes border-2 border-dashed border-secondary/40 rounded-full pointer-events-none z-0" />

      {/* 3. FLOATING MEMPHIS GEOMETRIC SHAPES */}

      {/* Shape 1: Memphis Ring / Donut (Top Left) */}
      <div className="absolute left-[5%] top-[18%] pointer-events-none z-10 animate-shape-float-a">
        <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="38" stroke="#FF6B35" strokeWidth="14" />
          <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" />
        </svg>
      </div>

      {/* Shape 2: Animated Squiggle / Snake Wave (Top Right) */}
      <div className="absolute right-[8%] top-[16%] pointer-events-none z-10 animate-shape-float-b">
        <svg width="110" height="45" viewBox="0 0 160 60" fill="none">
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
      <div className="hidden sm:block absolute left-[10%] top-[55%] pointer-events-none z-10 animate-shape-float-c">
        <svg width="56" height="56" viewBox="0 0 100 100">
          <polygon points="50,10 90,85 10,85" fill="#FFD166" stroke="#000" strokeWidth="6" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Shape 4: Memphis Starburst / Cross (Mid Right) */}
      <div className="hidden sm:block absolute right-[12%] top-[50%] pointer-events-none z-10 animate-hero-spin-slow">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <path d="M50 0 L60 38 L98 50 L60 62 L50 100 L40 62 L2 50 L40 38 Z" fill="#06D6A0" stroke="#000" strokeWidth="5"/>
        </svg>
      </div>

      {/* Shape 5: Memphis 3D Isometric Cylinder / Cube (Bottom Left) */}
      <div className="hidden md:block absolute left-[18%] bottom-[16%] pointer-events-none z-10 animate-shape-float-b">
        <div className="w-10 h-10 bg-pink-soft border-3 border-black shadow-[4px_4px_0px_0px_#000] rotate-12 rounded-lg" />
      </div>

      {/* Shape 6: Floating Pill / Capsule (Bottom Right) */}
      <div className="hidden md:block absolute right-[20%] bottom-[18%] pointer-events-none z-10 animate-shape-float-a">
        <div className="w-16 h-7 bg-primary text-white border-2 border-black rounded-full shadow-[3px_3px_0px_0px_#000] -rotate-12 flex items-center justify-center font-black text-[10px]">
          ✦ E-CELL
        </div>
      </div>

      {/* 4. ANIMATED LAYERED BOTTOM WAVES */}
      <div className="absolute bottom-0 left-0 right-0 w-[140%] -ml-[20%] overflow-hidden leading-none pointer-events-none z-10">
        {/* Back Wave (Light Blue) */}
        <svg className="w-full h-16 sm:h-24 opacity-60 animate-wave-hero-2" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,40 C320,100 440,-20 740,40 C1040,100 1200,10 1440,50 L1440,120 L0,120 Z" fill="#90E0EF" />
        </svg>

        {/* Front Wave (Darker Blue) */}
        <svg className="w-full h-12 sm:h-20 -mt-10 sm:-mt-14 opacity-80 animate-wave-hero-1" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C240,10 480,90 720,40 C960,-10 1200,80 1440,30 L1440,120 L0,120 Z" fill="#0077B6" />
        </svg>
      </div>

      {/* 5. SURFER AT HIGHEST Z-INDEX (z-50) RIDING LEFT TO RIGHT & RIGHT TO LEFT */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-50 pointer-events-none overflow-hidden">
        <div className="animate-surfer-full-edge inline-block pointer-events-none">
          <svg width="84" height="84" viewBox="0 0 100 100" fill="none" className="drop-shadow-[4px_4px_0px_rgba(0,0,0,0.9)]">
            {/* Water Spray / Wake Behind Surfboard */}
            <circle cx="16" cy="86" r="4.5" fill="#FFFFFF" stroke="#000" strokeWidth="1" />
            <circle cx="24" cy="90" r="3.5" fill="#90E0EF" stroke="#000" strokeWidth="1" />
            <circle cx="31" cy="92" r="2.5" fill="#FFFFFF" />

            {/* Memphis Style Surfboard */}
            <path
              d="M10 88 C35 78, 65 78, 90 84 C94 85, 95 89, 88 91 C62 96, 32 96, 12 91 C8 89, 8 88, 10 88 Z"
              fill="#FFD166"
              stroke="#000"
              strokeWidth="2.8"
            />
            {/* Surfboard Stripe */}
            <path
              d="M25 87 C45 82, 60 82, 75 86"
              stroke="#FF6B35"
              strokeWidth="2.8"
              strokeLinecap="round"
            />

            {/* Surfer Body (Legs & Torso in action crouch pose) */}
            {/* Back Leg */}
            <path d="M36 84 L32 72 L44 65" stroke="#000" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Front Leg */}
            <path d="M62 82 L65 70 L48 64" stroke="#000" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Torso (Orange T-Shirt) */}
            <path d="M46 64 L48 46 L58 48 L56 64 Z" fill="#FF6B35" stroke="#000" strokeWidth="2.8" strokeLinejoin="round" />
            {/* Back Arm balancing */}
            <path d="M46 48 L32 42 L24 46" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Front Arm pointing forward */}
            <path d="M56 48 L70 45 L82 48" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Head */}
            <circle cx="53" cy="36" r="9.5" fill="#FFE5D9" stroke="#000" strokeWidth="2.8" />
            {/* Cool Sunglasses */}
            <path d="M53 35 L63 34 L61 39 L52 39 Z" fill="#000" />
            {/* Cap / Hair */}
            <path d="M43 34 C43 25, 63 25, 63 34 Z" fill="#4895EF" stroke="#000" strokeWidth="2.2" />
          </svg>
        </div>
      </div>

      {/* 6. HERO CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-20">
        <h1 className="gsap-hero-item font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-white leading-[1.08]">
          Innovation Starts with You
        </h1>
        <p className="gsap-hero-item font-body text-slate-700 dark:text-slate-200 text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed">
          We’re here to accelerate it. Build, launch, and scale your ideas with the finest minds in the ecosystem.
        </p>
        <div className="gsap-hero-item flex flex-wrap justify-center gap-6 pt-4">
          <Link href="/events">
            <MemphisButton variant="primary" className="flex items-center gap-2 px-10 py-4 text-lg shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000]">
              Events <ArrowRight className="w-5 h-5" />
            </MemphisButton>
          </Link>
          <Link href="/idea-pitching">
            <MemphisButton variant="outline" className="px-10 py-4 text-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000]">
              Idea
            </MemphisButton>
          </Link>
        </div>
      </div>
    </section>
  );
};


