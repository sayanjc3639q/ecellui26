'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ChevronDown,
  Briefcase,
  Trophy,
  GraduationCap,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

const opportunitiesData = [
  {
    title: 'Startup Internship Program',
    status: 'Applications Open',
    badgeColor: 'bg-mint text-emerald-900',
    description: 'Work directly with high-growth campus ventures and gain hands-on early-stage operator experience.',
    action: 'Apply Now',
    icon: Briefcase,
    iconBg: 'bg-primary text-white',
    href: '/startups',
  },
  {
    title: 'Flagship Pitch Competition',
    status: 'Win ₹1,00,000+ Grants',
    badgeColor: 'bg-amber-100 text-amber-950',
    description: 'Pitch to eminent angel investors, alumni founders, and incubators for non-dilutive seed funding.',
    action: 'Register Pitch',
    icon: Trophy,
    iconBg: 'bg-secondary text-white',
    href: '/idea-pitching',
  },
  {
    title: 'Founder Accelerator 101',
    status: 'Cohort 2026',
    badgeColor: 'bg-pink-soft text-purple-950',
    description: 'Curated 6-week masterclasses covering legal compliance, customer validation, and fundraising decks.',
    action: 'Explore Curriculum',
    icon: GraduationCap,
    iconBg: 'bg-emerald-500 text-white',
    href: '/events',
  },
];

const ideaSuggestions: Record<string, Record<string, { title: string; description: string }>> = {
  Technology: {
    Education: {
      title: 'Smart Attendance & Engagement AI',
      description: 'An AI-powered system that tracks classroom engagement and automated lecture transcriptions for students.',
    },
    Healthcare: {
      title: 'Remote Vital Monitor IoT',
      description: 'IoT-enabled compact wearables for continuous patient vital tracking and real-time alerts to local clinics.',
    },
    Environment: {
      title: 'Smart Grid Energy AI',
      description: 'Intelligent solar optimization system for campus micro-grids reducing standby electricity waste.',
    },
  },
  Agriculture: {
    Environment: {
      title: 'Soil Health Precision Drone',
      description: 'Affordable drone sensors for automated soil moisture & nutrient mapping across rural farmlands.',
    },
    Education: {
      title: 'Kisan Vidya AR Platform',
      description: 'Augmented reality farming tutorials in regional languages for rural agri-entrepreneurs.',
    },
    Healthcare: {
      title: 'Organic Yield Purity Analyzer',
      description: 'Chemical-residue scanning tool for organic harvest purity verification and certification.',
    },
  },
  Commerce: {
    Education: {
      title: 'Student Micro-Barter Exchange',
      description: 'Safe peer-to-peer campus marketplace for textbooks, lab kits, project components, and electronics.',
    },
    Healthcare: {
      title: 'Affordable Generic Med Network',
      description: 'Hyperlocal discount aggregator linking tier-2 pharmacies for emergency supply chain delivery.',
    },
    Environment: {
      title: 'Zero-Waste Reusable Logistics',
      description: 'Deposit-return reusable container logistics network for university canteen food deliveries.',
    },
  },
};

export const HubDashboardSection: React.FC = () => {
  const [interest, setInterest] = useState('Technology');
  const [problemArea, setProblemArea] = useState('Education');
  const [generatedIdea, setGeneratedIdea] = useState({
    title: 'Smart Attendance & Engagement AI',
    description: 'An AI-powered system that tracks classroom engagement and automated lecture transcriptions for students.',
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
    <section className="gsap-section-reveal py-20 sm:py-24 bg-[#FFF9F5] dark:bg-[#121418] border-b-4 border-black relative overflow-hidden">
      {/* Texture Overlays */}
      <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-40 z-0" />

      {/* Floating Memphis Accents */}
      <div className="hidden lg:block absolute left-8 top-12 pointer-events-none z-0 animate-shape-float-a">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="38" stroke="#FF6B35" strokeWidth="12" />
          <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <SectionHeader
          badge="Innovation Tools"
          title="Idea Spark & Opportunity Hub"
          subtitle="Generate instant project concepts, apply for incubator grants, and join live accelerators."
        />

        {/* 2 Big Dashboard Columns: Spark an Idea & Wall of Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* SPARK AN IDEA GENERATOR (5 cols on lg) */}
          <div className="lg:col-span-5 memphis-card rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border-3 border-black flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 dark:text-white tracking-tight uppercase">
                    SPARK AN IDEA
                  </h3>
                  <div className="w-7 h-7 rounded-full bg-[#FFE5D9] border-2 border-black flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                  Combine domains to generate creative venture ideas instantly.
                </p>
              </div>

              {/* Controls */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Domain
                    </label>
                    <div className="relative">
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        aria-label="Domain"
                        className="w-full appearance-none px-3.5 py-2.5 text-xs font-bold rounded-xl border-2 border-black bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                      >
                        <option value="Technology">Technology</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Commerce">Commerce</option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-3 top-3 pointer-events-none text-slate-700" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Problem Area
                    </label>
                    <div className="relative">
                      <select
                        value={problemArea}
                        onChange={(e) => setProblemArea(e.target.value)}
                        aria-label="Problem Area"
                        className="w-full appearance-none px-3.5 py-2.5 text-xs font-bold rounded-xl border-2 border-black bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                      >
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Environment">Environment</option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-3 top-3 pointer-events-none text-slate-700" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleGenerateIdea}
                  className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-orange-600 text-white font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Next-Gen Idea</span>
                </button>
              </div>

              {/* Generated Idea Box */}
              <div className="p-5 rounded-2xl border-2 border-black bg-[#FFF5EB] dark:bg-slate-800/80 shadow-[3px_3px_0px_0px_#000] space-y-2">
                <span className="inline-block text-[10px] font-display font-black uppercase text-primary tracking-wider bg-peach px-2.5 py-0.5 rounded border border-black">
                  AI Recommendation
                </span>
                <h4 className="font-display font-black text-base text-slate-900 dark:text-white leading-snug">
                  {generatedIdea.title}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-body leading-relaxed">
                  {generatedIdea.description}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/idea-pitching"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-black font-display font-black text-xs bg-[#FFD166] hover:bg-[#ffc63b] text-black shadow-[2px_2px_0px_0px_#000] transition-all"
              >
                <Lightbulb className="w-4 h-4 text-black" />
                <span>Pitch This Idea To E-Cell</span>
              </Link>
            </div>
          </div>

          {/* WALL OF OPPORTUNITIES (7 cols on lg) */}
          <div className="lg:col-span-7 memphis-card rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border-3 border-black flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b-2 border-black dark:border-slate-800">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 dark:text-white tracking-tight uppercase">
                    WALL OF OPPORTUNITIES
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    Active grants, internships, and accelerator cohorts.
                  </p>
                </div>
              </div>

              {/* 3 Opportunity Horizontal Cards */}
              <div className="pt-6 space-y-4">
                {opportunitiesData.map((op, idx) => {
                  const Icon = op.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl border-2 border-black bg-slate-50 dark:bg-slate-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-[#FFF9F5] dark:hover:bg-slate-800/80 transition-all shadow-[3px_3px_0px_0px_#000]"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border-2 border-black shadow-[2px_2px_0px_0px_#000] ${op.iconBg}`}>
                          <Icon className="w-6 h-6 stroke-[2.2]" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-display font-black text-base text-slate-900 dark:text-white tracking-tight">
                              {op.title}
                            </h4>
                            <span className={`text-[10px] font-display font-black px-2 py-0.5 rounded-full border border-black ${op.badgeColor}`}>
                              {op.status}
                            </span>
                          </div>
                          <p className="text-xs font-body text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                            {op.description}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={op.href}
                        className="self-end sm:self-center shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border-2 border-black font-display font-black text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-primary hover:text-white shadow-[2px_2px_0px_0px_#000] transition-all"
                      >
                        <span>{op.action}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t-2 border-black/10 dark:border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs font-display font-bold text-slate-500">
                Want to partner or sponsor opportunities?
              </span>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-xs font-display font-black text-primary hover:underline"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
