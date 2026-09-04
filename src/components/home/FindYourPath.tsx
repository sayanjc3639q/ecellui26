'use client';

import React from 'react';
import Link from 'next/link';
import { Lightbulb, Rocket, Users, Calendar, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

interface PathCardProps {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  cardBg: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  description: string;
  actionText: string;
  href: string;
  accentColor: string;
}

const pathItems: PathCardProps[] = [
  {
    icon: Lightbulb,
    iconBg: 'bg-primary text-white',
    iconColor: 'text-white',
    cardBg: 'bg-white dark:bg-slate-900',
    badgeBg: 'bg-peach text-primary',
    badgeText: 'Ideate',
    title: 'I Have an Idea',
    description: 'Get mentorship, validate your concept, and turn your spark into reality.',
    actionText: 'Start Now',
    href: '/idea-pitching',
    accentColor: '#FF6B35',
  },
  {
    icon: Rocket,
    iconBg: 'bg-secondary text-white',
    iconColor: 'text-white',
    cardBg: 'bg-white dark:bg-slate-900',
    badgeBg: 'bg-blue-100 text-secondary',
    badgeText: 'Launch',
    title: 'I Want to Build a Startup',
    description: 'Access seed capital, incubation resources, and scale your venture.',
    actionText: 'Explore',
    href: '/startups',
    accentColor: '#4895EF',
  },
  {
    icon: Users,
    iconBg: 'bg-emerald-500 text-white',
    iconColor: 'text-white',
    cardBg: 'bg-white dark:bg-slate-900',
    badgeBg: 'bg-mint text-emerald-800',
    badgeText: 'Leadership',
    title: 'I Want to Join E-Cell',
    description: 'Lead initiatives, organize flagship summits, and join our core team.',
    actionText: 'Join Us',
    href: '/team',
    accentColor: '#06D6A0',
  },
  {
    icon: Calendar,
    iconBg: 'bg-purple-500 text-white',
    iconColor: 'text-white',
    cardBg: 'bg-white dark:bg-slate-900',
    badgeBg: 'bg-pink-soft text-purple-800',
    badgeText: 'Connect',
    title: 'I Want to Attend Events',
    description: 'Discover hackathons, speaker sessions, and annual entrepreneurship summits.',
    actionText: 'View Events',
    href: '/events',
    accentColor: '#A855F7',
  },
];

export const FindYourPath: React.FC = () => {
  return (
    <section className="gsap-section-reveal py-20 sm:py-24 bg-[#FFF9F5] dark:bg-[#121418] relative overflow-hidden border-b-4 border-black">
      {/* Dynamic Memphis Multi-pattern Background */}
      <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-40 z-0" />
      <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-30 z-0" />

      {/* Floating Memphis Geometric Accents */}
      <div className="hidden lg:block absolute left-8 top-12 pointer-events-none z-0 animate-shape-float-a">
        <svg width="46" height="46" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="38" stroke="#FF6B35" strokeWidth="12" />
          <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" />
        </svg>
      </div>
      <div className="hidden lg:block absolute right-10 top-14 pointer-events-none z-0 animate-shape-float-b">
        <svg width="50" height="50" viewBox="0 0 100 100">
          <polygon points="50,10 90,85 10,85" fill="#FFD166" stroke="#000" strokeWidth="5" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="hidden xl:block absolute right-14 bottom-12 pointer-events-none z-0 animate-hero-spin-slow opacity-30">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
          <path d="M50 0 L60 38 L98 50 L60 62 L50 100 L40 62 L2 50 L40 38 Z" fill="#06D6A0" stroke="#000" strokeWidth="5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Consistent Section Header */}
        <SectionHeader
          badge="Roadmap"
          title="Find Your Path"
          subtitle="Choose your journey and unlock opportunities tailored for your entrepreneurial ambition."
        />

        {/* 4 Neo-Brutalist Memphis Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {pathItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="memphis-card rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-900 border-3 border-black flex flex-col justify-between items-center text-center group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#000]"
              >
                {/* Top Subtle Stripe Accent Bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-2 border-b-2 border-black" 
                  style={{ backgroundColor: item.accentColor }} 
                />

                <div className="flex flex-col items-center space-y-4 w-full pt-2">
                  {/* Category Pill */}
                  <span className={`inline-block px-3 py-1 text-xs font-display font-black rounded-full border-2 border-black uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] ${item.badgeBg}`}>
                    {item.badgeText}
                  </span>

                  {/* Icon Circle */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_#000] ${item.iconBg} transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                    <Icon className="w-7 h-7 stroke-[2.4]" />
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-body text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 w-full flex justify-center">
                  <Link
                    href={item.href}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border-2 border-black font-display font-black text-xs sm:text-sm bg-[#FFE5D9] hover:bg-primary hover:text-white text-black transition-all duration-200 shadow-[3px_3px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

