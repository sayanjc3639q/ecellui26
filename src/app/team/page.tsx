'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, ChevronDown, Sparkles } from 'lucide-react';
import { BsLinkedin } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface StudentLead {
  id: string;
  name: string;
  role: string;
  badgeBg: string;
  description: string;
  image: string;
  colorOverlay: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface AlumniMember {
  id: string;
  name: string;
  formerRole: string;
  batch: string;
  currentRole: string;
  company: string;
  image: string;
}

const studentLeads: StudentLead[] = [
  {
    id: '1',
    name: 'Rahul Verma',
    role: 'Chairperson',
    badgeBg: 'bg-[#ffedd5] text-[#9a3412]',
    description: 'Leading strategic vision & institutional partnerships.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#eab308]/40 mix-blend-multiply',
  },
  {
    id: '2',
    name: 'Sneha Kapoor',
    role: 'Vice Chairperson',
    badgeBg: 'bg-[#fef08a] text-[#854d0e]',
    description: 'Driving operations & internal leadership dynamics.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#fbcfe8]/40 mix-blend-multiply',
  },
  {
    id: '3',
    name: 'Amit Kumar',
    role: 'Tech Lead',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    description: 'Building full-stack platforms & hackathon infrastructure.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#3b82f6]/30 mix-blend-multiply',
  },
  {
    id: '4',
    name: 'Riya Sen',
    role: 'Design Lead',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Directing Memphis brand identity & UI/UX experiences.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ec4899]/30 mix-blend-multiply',
  },
  {
    id: '5',
    name: 'Neha Gupta',
    role: 'Events Lead',
    badgeBg: 'bg-[#dcfce7] text-[#166534]',
    description: 'Curating flagship summits, pitch days & workshops.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#22c55e]/30 mix-blend-multiply',
  },
  {
    id: '6',
    name: 'Vikram Singh',
    role: 'PR & Outreach Lead',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Expanding media outreach, alumni & founder networks.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
  },
  {
    id: '7',
    name: 'Ananya Roy',
    role: 'Sponsorship Lead',
    badgeBg: 'bg-[#ede9fe] text-[#5b21b6]',
    description: 'Securing corporate grants, VC backing & brand sponsors.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#8b5cf6]/30 mix-blend-multiply',
  },
  {
    id: '8',
    name: 'Rohan Sen',
    role: 'Operations Lead',
    badgeBg: 'bg-[#ccfbf1] text-[#115e59]',
    description: 'Managing logistics, venue execution & team resources.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#14b8a6]/30 mix-blend-multiply',
  },
];

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Pooja Das',
    role: 'Web Developer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Sourav Ghosh',
    role: 'Graphics Designer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Tanmoy Pal',
    role: 'Content Writer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Kriti Sharma',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  },
];

const alumniMembers: AlumniMember[] = [
  {
    id: '1',
    name: 'Aryan Raj',
    formerRole: 'Founder & President',
    batch: 'Class of 2023',
    currentRole: 'Co-Founder & CEO',
    company: 'Nexus Innovations',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Rohan Kumar Singh',
    formerRole: 'Co-Founder & VP',
    batch: 'Class of 2023',
    currentRole: 'Founder',
    company: 'PayFlow Fintech',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Devika Banerjee',
    formerRole: 'Head of Incubation',
    batch: 'Class of 2022',
    currentRole: 'Product Lead',
    company: 'HyperGrowth VC',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Abhishek Roy',
    formerRole: 'Tech & Hackathon Lead',
    batch: 'Class of 2022',
    currentRole: 'Senior AI Engineer',
    company: 'DeepCloud Labs',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  },
];

export default function TeamPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cloudLeftRef = useRef<HTMLDivElement>(null);
  const cloudRightRef = useRef<HTMLDivElement>(null);
  const cloudCenterRef = useRef<HTMLDivElement>(null);
  const leadsSectionRef = useRef<HTMLDivElement>(null);
  const leadCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      if (cloudLeftRef.current && cloudRightRef.current && cloudCenterRef.current) {
        tl.to(cloudLeftRef.current, { xPercent: -70, yPercent: 20, opacity: 0, ease: 'power2.out' }, 0)
          .to(cloudRightRef.current, { xPercent: 70, yPercent: 20, opacity: 0, ease: 'power2.out' }, 0)
          .to(cloudCenterRef.current, { yPercent: 50, scale: 1.3, opacity: 0, ease: 'power2.out' }, 0);
      }

      if (leadCardsRef.current) {
        gsap.from(leadCardsRef.current.children, {
          scrollTrigger: { trigger: leadsSectionRef.current, start: 'top 75%' },
          y: 60, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'back.out(1.4)',
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-[#faf8f5] dark:bg-[#121418] text-slate-900 dark:text-white overflow-x-hidden">
      {/* 1. FULL-SCREEN HERO WITH CLEAN BALANCED SPACING */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between items-center overflow-hidden border-b-4 border-black bg-white dark:bg-slate-950 text-center px-4 pt-10 sm:pt-14 pb-0"
      >
        {/* Left Peach Half-Circle Motif */}
        <div className="absolute -top-12 -left-16 w-56 sm:w-72 h-56 sm:h-72 bg-[#fecdd3] dark:bg-pink-950/40 rounded-full border-4 border-black pointer-events-none z-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" />

        {/* Right Lilac Tilted Squircle Box */}
        <div className="hidden sm:block absolute -top-8 -right-8 w-44 sm:w-56 h-44 sm:h-56 bg-[#dbeafe] dark:bg-blue-950/40 rounded-[44px] border-4 border-black rotate-12 pointer-events-none z-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />

        {/* Diagonal Crosses Background */}
        <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-30 z-0" />

        {/* Hero Central Content */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 relative z-30 my-auto pt-6 pb-2">
          {/* Main Headline with Yellow Organic Blob Behind 'Behind' */}
          <div className="relative inline-block">
            <div className="absolute -top-3 right-[12%] sm:right-[15%] w-24 sm:w-36 h-14 sm:h-20 bg-[#fde047] dark:bg-amber-500/30 rounded-[50%] border-3 border-black -rotate-6 pointer-events-none z-0" />
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-950 dark:text-white leading-[1.1] relative z-10">
              The Brains Behind <br />
              <span className="text-[#0052cc] dark:text-[#4895ef]">The Hustle.</span>
            </h1>
          </div>

          {/* Subtitle Inside Memphis Rounded Pill Frame */}
          <div className="inline-block max-w-2xl mx-auto p-1 bg-white dark:bg-slate-900 rounded-full border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff]">
            <p className="font-body text-slate-700 dark:text-slate-200 text-xs sm:text-sm md:text-base px-6 sm:px-8 py-2.5 sm:py-3 font-semibold leading-relaxed">
              Meet the passionate driven leads, domain heads, and the inspiring alumni who built the foundation.
            </p>
          </div>

          {/* Scroll Down Indicator (Elevated on top of clouds) */}
          <div className="pt-4 sm:pt-6 flex flex-col items-center gap-2 relative z-30">
            <span className="text-[11px] font-display font-black tracking-widest uppercase bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000] text-slate-900 dark:text-white">
              SCROLL TO REVEAL LEADS
            </span>
            <button
              onClick={() => {
                leadsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-10 h-10 rounded-full bg-[#fde047] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 animate-bounce hover:scale-105 transition-transform cursor-pointer"
              aria-label="Scroll down to leads"
            >
              <ChevronDown className="w-5 h-5 text-black stroke-[3]" />
            </button>
          </div>
        </div>

        {/* 3. REVEALING MEMPHIS CLOUD SVG OVERLAYS AT BOTTOM (WITH FULL ROUNDED TOPS) */}
        <div className="w-full relative h-28 sm:h-36 pointer-events-none z-20 overflow-visible flex items-end">
          {/* Left Cloud */}
          <div
            ref={cloudLeftRef}
            className="absolute -bottom-1 -left-6 sm:-left-10 w-[50vw] max-w-lg transition-transform"
          >
            <svg
              viewBox="0 0 450 220"
              className="w-full h-auto drop-shadow-[0_4px_0_#000]"
              style={{ overflow: 'visible' }}
            >
              <path
                d="M 20 220 L 430 220 C 430 180 400 150 370 150 C 375 100 330 60 280 75 C 250 30 180 25 140 70 C 90 50 40 90 45 145 C 15 160 10 200 20 220 Z"
                fill="#e0e7ff"
                stroke="#000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Center Cloud */}
          <div
            ref={cloudCenterRef}
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[55vw] max-w-xl transition-transform"
          >
            <svg
              viewBox="0 0 550 240"
              className="w-full h-auto drop-shadow-[0_4px_0_#000]"
              style={{ overflow: 'visible' }}
            >
              <path
                d="M 20 240 L 530 240 C 535 200 500 165 460 170 C 470 110 410 70 350 85 C 320 25 230 20 180 75 C 130 50 60 90 70 160 C 30 175 15 210 20 240 Z"
                fill="#fecdd3"
                stroke="#000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right Cloud */}
          <div
            ref={cloudRightRef}
            className="absolute -bottom-1 -right-6 sm:-right-10 w-[50vw] max-w-lg transition-transform"
          >
            <svg
              viewBox="0 0 450 220"
              className="w-full h-auto drop-shadow-[0_4px_0_#000]"
              style={{ overflow: 'visible' }}
            >
              <path
                d="M 430 220 L 20 220 C 20 180 50 150 80 150 C 75 100 120 60 170 75 C 200 30 270 25 310 70 C 360 50 410 90 405 145 C 435 160 440 200 430 220 Z"
                fill="#e0e7ff"
                stroke="#000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      <section ref={leadsSectionRef} className="py-16 border-b-4 border-black relative overflow-hidden bg-[#e0e7ff] dark:bg-[#151c33]">
        <div className="absolute inset-0 bg-pattern-diagonal-waves pointer-events-none opacity-30 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#ea580c] border-2 border-black rotate-45 shrink-0" />
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">Student Leads</h2>
            </div>
            <span className="text-xs font-display font-black px-3.5 py-1 bg-white dark:bg-slate-800 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000]">✦ 8 Core Leads</span>
          </div>
          <div ref={leadCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {studentLeads.map((lead) => (
              <div key={lead.id} className="bg-white dark:bg-slate-900 rounded-[28px] border-3 border-black dark:border-white overflow-hidden shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300 group">
                <div>
                  {/* Top Photo Frame */}
                  <div className="relative h-44 w-full overflow-hidden border-b-3 border-black bg-slate-100">
                    <img
                      src={lead.image}
                      alt={lead.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 ${lead.colorOverlay}`} />

                    {/* Role Pill Badge */}
                    <span className={`absolute bottom-3 left-3 px-2.5 py-0.5 text-[10px] font-display font-black rounded-full border border-black shadow-[2px_2px_0px_0px_#000] ${lead.badgeBg}`}>
                      {lead.role}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-4 space-y-1.5">
                    <h3 className="font-display font-black text-xl text-slate-950 dark:text-white tracking-tight leading-snug">
                      {lead.name}
                    </h3>
                    <p className="font-body text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {lead.description}
                    </p>
                  </div>
                </div>

                {/* Connect Action Button */}
                <div className="p-4 pt-0">
                  <button className="w-full py-2 px-3 rounded-xl bg-[#0052cc] hover:bg-[#0043a8] text-white font-display font-black text-xs flex items-center justify-center gap-1.5 border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all">
                    <MessageSquare className="w-3.5 h-3.5" /> Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE TEAM SECTION */}
      <section className="py-20 border-b-4 border-black relative overflow-hidden bg-white dark:bg-slate-950">
        {/* Large Yellow Background Circle Accent at Bottom Right */}
        <div className="hidden md:block absolute -bottom-16 -right-16 w-80 h-80 bg-[#fde047] dark:bg-amber-500/20 rounded-full border-4 border-black pointer-events-none z-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />

        {/* Polka Dot Texture */}
        <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-25 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          {/* Section Header with Blue Triangle Icon */}
          <div className="flex items-center gap-3">
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-[#0052cc] shrink-0" />
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
              The Team
            </h2>
          </div>

          {/* 4 Team Member Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-slate-900 rounded-[28px] border-3 border-black dark:border-white p-6 shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] flex flex-col items-center text-center space-y-4 hover:-translate-y-1.5 transition-transform"
              >
                {/* Circular Profile Photo with Double Border */}
                <div className="w-24 h-24 rounded-full border-3 border-black overflow-hidden bg-slate-100 p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="font-display font-black text-lg sm:text-xl text-slate-950 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="font-body text-xs text-slate-500 dark:text-slate-400 font-bold">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Members Pill CTA */}
          <div className="flex justify-center pt-4">
            <button className="py-3 px-8 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-50 text-slate-950 dark:text-white font-display font-black text-sm flex items-center gap-2 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] active:translate-y-0.5 active:shadow-none transition-all">
              View All Members <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. ALUMNI SECTION (OUR LEGACY BUILDERS) */}
      <section className="py-20 border-b-4 border-black relative overflow-hidden bg-peach/20 dark:bg-amber-950/20">
        {/* Diagonal Crosses Texture */}
        <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-30 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          {/* Section Header with Yellow Star Icon */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#fde047] border-2 border-black flex items-center justify-center font-black text-xs shadow-[2px_2px_0px_0px_#000]">
                ★
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
                Our Alumni Network
              </h2>
            </div>
            <span className="text-xs font-display font-black px-4 py-1.5 bg-[#FFD166] text-slate-950 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              ✦ Legacy & Mentorship
            </span>
          </div>

          {/* Alumni Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniMembers.map((alumnus) => (
              <div
                key={alumnus.id}
                className="bg-white dark:bg-slate-900 rounded-[32px] border-4 border-black dark:border-white p-6 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 group space-y-5"
              >
                <div className="space-y-4">
                  {/* Photo & Batch Tag */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl border-3 border-black overflow-hidden bg-slate-100 shrink-0 shadow-[2px_2px_0px_0px_#000]">
                      <img
                        src={alumnus.image}
                        alt={alumnus.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-display font-black px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-black inline-block mb-1">
                        {alumnus.batch}
                      </span>
                      <h4 className="font-display font-black text-lg text-slate-950 dark:text-white leading-snug">
                        {alumnus.name}
                      </h4>
                    </div>
                  </div>

                  {/* Former Role & Current Venture */}
                  <div className="space-y-2 pt-2 border-t-2 border-dashed border-slate-200 dark:border-slate-800 font-body text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-display font-black text-slate-400">Past Role:</span>
                      <p className="font-bold text-slate-700 dark:text-slate-300">{alumnus.formerRole}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-display font-black text-primary">Now At:</span>
                      <p className="font-bold text-slate-900 dark:text-white">{alumnus.currentRole}, <span className="font-black text-secondary">{alumnus.company}</span></p>
                    </div>
                  </div>
                </div>

                {/* Connect Action */}
                <button className="w-full py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-900 dark:text-white font-display font-black text-xs flex items-center justify-center gap-2 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] active:translate-y-0.5 transition-all">
                  <BsLinkedin className="w-3.5 h-3.5 text-[#0077B5]" /> Connect on LinkedIn
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


