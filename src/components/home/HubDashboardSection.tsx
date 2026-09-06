'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Briefcase,
  Trophy,
  GraduationCap,
  Calendar,
  Layers,
  ChevronDown,
} from 'lucide-react';

interface UpcomingEventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  daysLeft?: number;
  hoursLeft?: number;
  minsLeft?: number;
}

const upcomingEventsData: UpcomingEventItem[] = [
  {
    id: '1',
    title: 'Ideathon 2026',
    date: '25 May, 2026',
    location: 'HIT Haldia',
    description: 'Ideate, innovate and build solutions for real world problems.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop',
    daysLeft: 12,
    hoursLeft: 5,
    minsLeft: 30,
  },
  {
    id: '2',
    title: 'Startup Bootcamp',
    date: '10 Jun, 2026',
    location: 'HIT Haldia',
    description: 'Learn, build and grow with industry experts and mentors.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Investor Connect',
    date: '20 Jul, 2026',
    location: 'HIT Haldia',
    description: 'Pitch your idea and connect with investors & accelerators.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Demo Day',
    date: '15 Aug, 2026',
    location: 'HIT Haldia',
    description: 'Showcase your product and celebrate your journey.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=400&auto=format&fit=crop',
  },
];

const startupWallData = [
  {
    name: 'AgriTech AI',
    team: 'Team Alpha',
    description: 'AI based crop prediction and advisory platform.',
  },
  {
    name: 'Smart Campus',
    team: 'Team Beta',
    description: 'Digital solution for campus management.',
  },
  {
    name: 'RecycLoop',
    team: 'Team Gamma',
    description: 'Smart waste management & recycling system.',
  },
  {
    name: 'FinTrack',
    team: 'Team Delta',
    description: 'Personal finance tracker and analyzer.',
  },
  {
    name: 'Healthify',
    team: 'Team Epsilon',
    description: 'Health and wellness tracking application.',
  },
];

const opportunitiesData = [
  {
    title: 'Startup Internship',
    status: 'Applications Open',
    description: 'Work with innovative startups and gain real world experience.',
    action: 'Apply Now',
    icon: Briefcase,
    iconColor: 'text-orange-500',
    href: '/startups',
  },
  {
    title: 'Pitch Competition',
    badge: 'Win Exciting Prizes',
    description: 'Present your idea and win funding, mentorship & more.',
    action: 'Explore',
    icon: Trophy,
    iconColor: 'text-amber-500',
    href: '/idea-pitching',
  },
  {
    title: 'Workshop',
    tag: 'Entrepreneurship 101',
    description: 'Learn the essentials of building and scaling your startup.',
    action: 'Register',
    icon: GraduationCap,
    iconColor: 'text-emerald-500',
    href: '/events',
  },
];

const ideaSuggestions: Record<string, Record<string, { title: string; description: string }>> = {
  Technology: {
    Education: {
      title: 'Smart Attendance System',
      description: 'An AI-powered system that improves classroom attendance and engagement using facial recognition and analytics.',
    },
    Healthcare: {
      title: 'Remote Vital Monitor',
      description: 'IoT-enabled compact wearables for continuous patient vital tracking and real-time alerts to local hospitals.',
    },
    Environment: {
      title: 'Smart Grid Energy AI',
      description: 'Intelligent solar optimization system for campus micro-grids reducing standby electricity waste.',
    },
  },
  Agriculture: {
    Environment: {
      title: 'Soil Health Drone',
      description: 'Affordable drone sensors for automated soil moisture & nutrient mapping across rural farmlands.',
    },
    Education: {
      title: 'Kisan Vidya AR',
      description: 'Augmented reality farming tutorials in regional languages for rural agri-entrepreneurs.',
    },
    Healthcare: {
      title: 'Organic Yield Analyzer',
      description: 'Chemical-residue scanning tool for organic harvest purity verification and certification.',
    },
  },
  Commerce: {
    Education: {
      title: 'Student Micro-Pawn & Barter',
      description: 'Safe peer-to-peer campus marketplace for textbooks, lab kits, and electronics.',
    },
    Healthcare: {
      title: 'Affordable Generic Med Hub',
      description: 'Hyperlocal discount aggregator linking tier-2 pharmacies for emergency supply chain.',
    },
    Environment: {
      title: 'Zero-Waste Campus Delivery',
      description: 'Reusable packaging logistics network for university canteen food deliveries.',
    },
  },
};

export const HubDashboardSection: React.FC = () => {
  const [interest, setInterest] = useState('Technology');
  const [problemArea, setProblemArea] = useState('Education');
  const [generatedIdea, setGeneratedIdea] = useState({
    title: 'Smart Attendance System',
    description: 'An AI-powered system that improves classroom attendance and engagement using facial recognition and analytics.',
  });

  const handleGenerateIdea = () => {
    const matched =
      ideaSuggestions[interest]?.[problemArea] || {
        title: `${interest} + ${problemArea} Innovation`,
        description: `A next-generation platform solving ${problemArea.toLowerCase()} bottlenecks through modern ${interest.toLowerCase()} automation.`,
      };
    setGeneratedIdea(matched);
  };

  return (
    <section className="gsap-section-reveal py-16 sm:py-20 bg-slate-50/60 dark:bg-slate-900/50 border-b-4 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ROW 1: UPCOMING EVENTS & STARTUP WALL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* UPCOMING EVENTS (5 cols on lg) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border-2 border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 dark:text-white tracking-tight uppercase">
                  UPCOMING EVENTS
                </h3>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-display font-bold text-primary hover:text-orange-600 transition-colors"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Event Timeline / List */}
              <div className="pt-6 relative">
                {/* Vertical Orange Timeline Line */}
                <div className="absolute left-[7px] top-9 bottom-9 w-0.5 bg-orange-400 dark:bg-orange-600" />

                <div className="space-y-6">
                  {upcomingEventsData.map((ev, idx) => (
                    <div key={ev.id} className="relative flex items-start gap-4 sm:gap-5 pl-7">
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-3 w-4 h-4 rounded-full border-2 border-orange-500 bg-white dark:bg-slate-900 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      </div>

                      {/* Event Thumbnail */}
                      <div className="w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                        <img
                          src={ev.image}
                          alt={ev.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Event Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-black text-base text-slate-900 dark:text-white tracking-tight leading-snug">
                          {ev.title}
                        </h4>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                          {ev.date} • {ev.location}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 font-body">
                          {ev.description}
                        </p>
                      </div>

                      {/* Countdown & Register CTA */}
                      <div className="flex flex-col items-end justify-between flex-shrink-0 self-center sm:self-auto space-y-2">
                        {ev.daysLeft !== undefined && (
                          <div className="flex items-center gap-1 text-center">
                            <div className="px-1.5 py-0.5 rounded border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/40">
                              <span className="block font-mono font-bold text-xs text-orange-600 dark:text-orange-400 leading-none">
                                {ev.daysLeft}
                              </span>
                              <span className="block text-[8px] font-semibold text-slate-500 uppercase">
                                Days
                              </span>
                            </div>
                            <div className="px-1.5 py-0.5 rounded border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/40">
                              <span className="block font-mono font-bold text-xs text-orange-600 dark:text-orange-400 leading-none">
                                {ev.hoursLeft}
                              </span>
                              <span className="block text-[8px] font-semibold text-slate-500 uppercase">
                                Hours
                              </span>
                            </div>
                            <div className="px-1.5 py-0.5 rounded border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/40">
                              <span className="block font-mono font-bold text-xs text-orange-600 dark:text-orange-400 leading-none">
                                {ev.minsLeft}
                              </span>
                              <span className="block text-[8px] font-semibold text-slate-500 uppercase">
                                Mins
                              </span>
                            </div>
                          </div>
                        )}

                        <Link
                          href="/events"
                          className="px-3.5 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-xs transition-colors shadow-sm"
                        >
                          Register
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STARTUP WALL (6 cols on lg) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border-2 border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 dark:text-white tracking-tight uppercase">
                  STARTUP WALL
                </h3>
                <Link
                  href="/startups"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-display font-bold text-primary hover:text-orange-600 transition-colors"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Startup Grid (3 cols x 2 rows) */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {startupWallData.map((st, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-all group min-h-[140px]"
                  >
                    <div>
                      <h4 className="font-display font-black text-sm text-slate-900 dark:text-white tracking-tight">
                        {st.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        {st.team}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 font-body line-clamp-2">
                        {st.description}
                      </p>
                    </div>

                    <div className="pt-3 flex items-center justify-between">
                      <Link
                        href="/startups"
                        className="inline-flex items-center gap-1 text-xs font-display font-bold text-primary hover:underline"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                      <ArrowRight className="w-3 h-3 text-slate-400 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}

                {/* Submit Idea Card */}
                <div className="p-4 rounded-2xl border-2 border-dashed border-orange-300 dark:border-orange-800/80 bg-orange-50/30 dark:bg-orange-950/20 flex flex-col justify-between items-center text-center min-h-[140px]">
                  <div>
                    <h4 className="font-display font-black text-sm text-slate-900 dark:text-white tracking-tight">
                      Your Idea Could Be Here!
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-body">
                      Let&apos;s build the next big thing together.
                    </p>
                  </div>

                  <div className="pt-3 w-full">
                    <Link
                      href="/idea-pitching"
                      className="inline-flex items-center justify-center gap-1 w-full py-1.5 px-3 rounded-xl border-2 border-primary text-primary font-display font-black text-xs hover:bg-primary hover:text-white transition-all"
                    >
                      <span>Submit Idea</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: SPARK AN IDEA & WALL OF OPPORTUNITIES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* SPARK AN IDEA (5 cols on lg) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border-2 border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 dark:text-white tracking-tight uppercase">
                    SPARK AN IDEA
                  </h3>
                  <span className="text-lg">🤖</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                  Stuck? Let&apos;s spark something amazing.
                </p>
              </div>

              {/* Dropdowns & Generator Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                      Interest
                    </label>
                    <div className="relative">
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full appearance-none px-3 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="Technology">Technology</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Commerce">Commerce</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-3 pointer-events-none text-slate-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                      Problem Area
                    </label>
                    <div className="relative">
                      <select
                        value={problemArea}
                        onChange={(e) => setProblemArea(e.target.value)}
                        className="w-full appearance-none px-3 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Environment">Environment</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-3 pointer-events-none text-slate-400" />
                    </div>
                  </div>

                  <button
                    onClick={handleGenerateIdea}
                    className="w-full py-2 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-display font-black text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>Generate Idea</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Generated Idea Result Card */}
                <div className="p-4 rounded-2xl border border-orange-200 dark:border-orange-950/60 bg-gradient-to-b from-orange-50/40 to-white dark:from-orange-950/20 dark:to-slate-900 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-orange-600 dark:text-orange-400 tracking-wider">
                      Your Idea
                    </span>
                    <h4 className="font-display font-black text-sm text-slate-900 dark:text-white mt-1 leading-snug">
                      {generatedIdea.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 font-body leading-relaxed">
                      {generatedIdea.description}
                    </p>
                  </div>

                  <div className="pt-3">
                    <Link
                      href="/idea-pitching"
                      className="inline-flex items-center justify-center gap-1 w-full py-1.5 px-3 rounded-xl border-2 border-primary text-primary font-display font-bold text-xs hover:bg-primary hover:text-white transition-all"
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WALL OF OPPORTUNITIES (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border-2 border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="pb-6 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 dark:text-white tracking-tight uppercase">
                  WALL OF OPPORTUNITIES
                </h3>
              </div>

              {/* 3 Opportunity Cards */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {opportunitiesData.map((opp, idx) => {
                  const Icon = opp.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/40 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-all group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${opp.iconColor}`} />
                          <h4 className="font-display font-black text-sm text-slate-900 dark:text-white tracking-tight">
                            {opp.title}
                          </h4>
                        </div>

                        {opp.status && (
                          <span className="inline-block text-[11px] font-bold text-orange-600 dark:text-orange-400">
                            {opp.status}
                          </span>
                        )}
                        {opp.badge && (
                          <span className="inline-block text-[11px] font-bold text-blue-600 dark:text-blue-400">
                            {opp.badge}
                          </span>
                        )}
                        {opp.tag && (
                          <span className="inline-block text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                            {opp.tag}
                          </span>
                        )}

                        <p className="text-xs text-slate-600 dark:text-slate-400 font-body leading-relaxed">
                          {opp.description}
                        </p>
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <Link
                          href={opp.href}
                          className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-primary text-slate-800 dark:text-slate-200 hover:text-primary font-display font-bold text-xs bg-white dark:bg-slate-800 transition-all"
                        >
                          <span>{opp.action}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-40 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
