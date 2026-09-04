'use client';

import React from 'react';
import Link from 'next/link';
import { Lightbulb, Rocket, Users, Calendar, ArrowRight } from 'lucide-react';

interface PathCardProps {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  cardBg: string;
  borderColor: string;
  btnBorderColor: string;
  btnTextColor: string;
  title: string;
  description: string;
  actionText: string;
  href: string;
}

const pathItems: PathCardProps[] = [
  {
    icon: Lightbulb,
    iconBg: 'bg-orange-100 dark:bg-orange-950/50',
    iconColor: 'text-primary',
    cardBg: 'bg-gradient-to-b from-orange-50/70 to-white dark:from-orange-950/20 dark:to-slate-900',
    borderColor: 'border-orange-200 dark:border-orange-900/40',
    btnBorderColor: 'border-primary',
    btnTextColor: 'text-primary',
    title: 'I Have an Idea',
    description: 'Get mentorship and turn it into reality',
    actionText: 'Start Now',
    href: '/idea-pitching',
  },
  {
    icon: Rocket,
    iconBg: 'bg-blue-100 dark:bg-blue-950/50',
    iconColor: 'text-secondary',
    cardBg: 'bg-gradient-to-b from-blue-50/70 to-white dark:from-blue-950/20 dark:to-slate-900',
    borderColor: 'border-blue-200 dark:border-blue-900/40',
    btnBorderColor: 'border-secondary',
    btnTextColor: 'text-secondary',
    title: 'I Want to Build a Startup',
    description: 'Access resources and build your startup',
    actionText: 'Explore',
    href: '/startups',
  },
  {
    icon: Users,
    iconBg: 'bg-emerald-100 dark:bg-emerald-950/50',
    iconColor: 'text-emerald-500',
    cardBg: 'bg-gradient-to-b from-emerald-50/70 to-white dark:from-emerald-950/20 dark:to-slate-900',
    borderColor: 'border-emerald-200 dark:border-emerald-900/40',
    btnBorderColor: 'border-emerald-500',
    btnTextColor: 'text-emerald-600 dark:text-emerald-400',
    title: 'I Want to Join E-Cell',
    description: 'Be a part of the innovation and leadership team',
    actionText: 'Join Us',
    href: '/team',
  },
  {
    icon: Calendar,
    iconBg: 'bg-purple-100 dark:bg-purple-950/50',
    iconColor: 'text-purple-500',
    cardBg: 'bg-gradient-to-b from-purple-50/70 to-white dark:from-purple-950/20 dark:to-slate-900',
    borderColor: 'border-purple-200 dark:border-purple-900/40',
    btnBorderColor: 'border-purple-500',
    btnTextColor: 'text-purple-600 dark:text-purple-400',
    title: 'I Want to Attend Events',
    description: 'Discover and register for upcoming events',
    actionText: 'View Events',
    href: '/events',
  },
];

export const FindYourPath: React.FC = () => {
  return (
    <section className="gsap-section-reveal py-16 sm:py-20 bg-white dark:bg-slate-950 relative overflow-hidden border-b-4 border-black">
      {/* Background Subtle Patterns & Memphis Accents */}
      <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-20 z-0" />
      
      {/* Floating geometric decorative elements */}
      <div className="hidden lg:block absolute left-8 top-10 pointer-events-none z-0">
        <svg width="36" height="36" viewBox="0 0 100 100" fill="none" stroke="#64748b" strokeWidth="6">
          <polygon points="10,10 90,50 10,90" />
        </svg>
      </div>
      <div className="hidden lg:block absolute right-8 top-10 pointer-events-none z-0">
        <svg width="36" height="36" viewBox="0 0 100 100" fill="none" stroke="#64748b" strokeWidth="6">
          <polygon points="90,10 10,50 90,90" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight uppercase">
            FIND YOUR PATH
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-display font-semibold text-sm sm:text-base">
            What&apos;s your next move?
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl border-2 ${item.borderColor} ${item.cardBg} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between items-center text-center group`}
              >
                <div className="flex flex-col items-center space-y-4 w-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.iconBg} ${item.iconColor} transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-body text-slate-500 dark:text-slate-400 leading-relaxed px-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 w-full flex justify-center">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center justify-center gap-1.5 px-6 py-2 rounded-full border-2 ${item.btnBorderColor} ${item.btnTextColor} font-display font-black text-xs sm:text-sm bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all group-hover:shadow-md`}
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
