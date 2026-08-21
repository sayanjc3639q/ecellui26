'use client';

import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { MemphisCard } from '@/components/common/MemphisCard';
import { MemphisButton } from '@/components/common/MemphisButton';
import {
  Lightbulb,
  Users,
  TrendingUp,
  Flame,
  Heart,
  Target,
  Sparkles,
  ArrowRight,
  Quote,
  Clock,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

interface TimelineEvent {
  step: string;
  title: string;
  description: string;
  color: string;
  badgeBg: string;
}

const journeyTimeline: TimelineEvent[] = [
  {
    step: 'Night 1',
    title: 'Midnight Spark',
    description:
      'Aryan Raj and Rohan Kumar Singh, between chai and Maggi, sparked an idea: "Let\'s start an E-Cell."',
    color: 'bg-primary text-white',
    badgeBg: 'bg-amber-300 text-slate-900',
  },
  {
    step: 'Month 1-8',
    title: '8 Months of Grit',
    description:
      'Rejections, sleepless nights, and pitch failures. But the dream never shook.',
    color: 'bg-peach text-slate-900',
    badgeBg: 'bg-primary text-white',
  },
  {
    step: 'Month 4',
    title: 'Core Team Formed',
    description:
      'A few believers turned into a core team. That team grew into a movement.',
    color: 'bg-secondary text-white',
    badgeBg: 'bg-white text-slate-900',
  },
  {
    step: 'Month 6',
    title: 'Workshops Launch',
    description:
      'Students began thinking like founders and solving real-world problems.',
    color: 'bg-mint text-slate-900',
    badgeBg: 'bg-black text-white',
  },
  {
    step: 'Today',
    title: 'E-Cell HIT Haldia',
    description:
      "The driving force of HIT's startup culture, built by passionate visionaries.",
    color: 'bg-pink-soft text-slate-900',
    badgeBg: 'bg-primary text-white',
  },
];

const pillars = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Fostering creative thinking and breakthrough ideas.',
    color: 'bg-amber-100 dark:bg-amber-950/40 text-amber-600',
  },
  {
    icon: Users,
    title: 'Strong Community',
    description: 'Building an inclusive network of student entrepreneurs.',
    color: 'bg-blue-100 dark:bg-blue-950/40 text-secondary',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description: 'Learning through workshops, events, and mentorship programs.',
    color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600',
  },
];

const stats = [
  { number: '50+', label: 'Active Members', bg: 'bg-white dark:bg-slate-900' },
  { number: '20+', label: 'Events Annually', bg: 'bg-primary text-white' },
  { number: '5+', label: 'Startups Launched', bg: 'bg-white dark:bg-slate-900' },
  { number: '$25M+', label: 'Funding Raised', bg: 'bg-secondary text-white' },
];

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Creative thinking & breakthrough ideas',
    badgeColor: 'bg-amber-300 text-slate-900',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Strong, inclusive community',
    badgeColor: 'bg-secondary text-white',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Continuous learning & mentorship',
    badgeColor: 'bg-mint text-slate-900',
  },
  {
    icon: Flame,
    title: 'Passion',
    description: 'Enthusiasm for real-world impact',
    badgeColor: 'bg-primary text-white',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#faf8f5] dark:bg-[#121418]">
      {/* 1. HERO SECTION */}
      <section className="py-20 lg:py-28 border-b-4 border-black relative overflow-hidden bg-white dark:bg-slate-950 text-center">
        {/* Background Texture & Patterns */}
        <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-35 z-0" />
        <div className="absolute inset-0 bg-pattern-zigzag pointer-events-none opacity-30 z-0" />

        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none z-0 animate-hero-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none z-0 animate-hero-pulse-slow" />

        {/* Floating Shapes */}
        <div className="hidden md:block absolute left-12 top-20 pointer-events-none z-10 animate-shape-float-a">
          <div className="w-14 h-14 bg-amber-300 border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] rotate-12 flex items-center justify-center font-black">
            ✦
          </div>
        </div>
        <div className="hidden md:block absolute right-14 bottom-16 pointer-events-none z-10 animate-shape-float-b">
          <div className="w-16 h-16 bg-pink-soft border-3 border-black rounded-full shadow-[4px_4px_0px_0px_#000] -rotate-12 flex items-center justify-center font-black text-primary">
            ★
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-peach dark:bg-slate-800 text-slate-900 dark:text-white font-display font-black text-xs sm:text-sm rounded-full border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff]">
            <Sparkles className="w-4 h-4 text-primary" /> E-Cell HIT Haldia
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-white leading-[1.05]">
            Where Ideas Become <span className="text-primary underline decoration-black dark:decoration-white decoration-wavy decoration-4">Reality</span>
          </h1>

          <p className="font-body text-slate-600 dark:text-slate-300 text-lg sm:text-2xl max-w-3xl mx-auto font-bold leading-relaxed">
            Igniting entrepreneurial fire • Building tomorrow&apos;s leaders • Transforming dreams into startups
          </p>

          <div className="pt-4 flex justify-center">
            <a href="#who-we-are">
              <MemphisButton variant="primary" className="flex items-center gap-2 px-8 py-3.5 text-base shadow-[4px_4px_0px_0px_#000]">
                Discover More <ArrowRight className="w-5 h-5" />
              </MemphisButton>
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE, MISSION & VISION */}
      <section id="who-we-are" className="py-24 border-b-4 border-black relative overflow-hidden bg-peach/20">
        <div className="absolute inset-0 bg-pattern-crosshatch pointer-events-none opacity-40 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <SectionHeader
            badge="About Us"
            title="Who We Are"
            subtitle="E-Cell HIT is the official Entrepreneurship Cell of Haldia Institute of Technology, dedicated to fostering the spirit of innovation and entrepreneurship among students."
          />

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <MemphisCard bgColor="bg-white dark:bg-slate-900" className="p-8 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center border-2 border-black font-display font-black shadow-[3px_3px_0px_0px_#000]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">Our Mission</h3>
              <p className="font-body text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                To foster innovation, leadership, and entrepreneurship among students by providing the right tools, resources, and mindset to build and lead impactful ventures.
              </p>
            </MemphisCard>

            <MemphisCard bgColor="bg-white dark:bg-slate-900" className="p-8 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center border-2 border-black font-display font-black shadow-[3px_3px_0px_0px_#000]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">Our Vision</h3>
              <p className="font-body text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                To be a leading force in student-led innovation and startup creation.
              </p>
            </MemphisCard>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 pt-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-3 border-black dark:border-white shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-3"
                >
                  <div className={`w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center ${pillar.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-black text-xl text-slate-900 dark:text-white">{pillar.title}</h4>
                  <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OUR JOURNEY (ORIGIN STORY TIMELINE) */}
      <section className="py-24 border-b-4 border-black relative overflow-hidden bg-mint/20">
        <div className="absolute inset-0 bg-pattern-diagonal-waves pointer-events-none opacity-45 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <SectionHeader
            badge="Our Journey"
            title="The Origin Story"
            subtitle="From a midnight idea to a thriving movement"
          />

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {journeyTimeline.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-3xl border-4 border-black dark:border-white p-6 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] flex flex-col justify-between space-y-6 hover:-translate-y-2 transition-transform duration-300 relative group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`px-3 py-1 text-xs font-black font-display rounded-full border-2 border-black ${item.badgeBg}`}>
                      {item.step}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-black flex items-center justify-center font-display font-black text-xs">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="w-full h-2 rounded-full border-2 border-black bg-slate-100 overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${(index + 1) * 20}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Quote Callout Banner */}
          <div className="bg-primary text-white border-4 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000] relative overflow-hidden">
            <Quote className="absolute right-6 -bottom-4 w-32 h-32 opacity-15 pointer-events-none" />
            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="px-3.5 py-1 bg-white text-slate-900 font-display font-black text-xs rounded-full border-2 border-black inline-block">
                ✦ E-CELL LEGACY
              </span>
              <p className="font-display font-black text-2xl sm:text-4xl leading-tight">
                &ldquo;What began as a late-night whisper became the driving force of HIT&apos;s startup culture.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR IMPACT (NUMBERS THAT MATTER) */}
      <section className="py-24 border-b-4 border-black relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-pattern-isometric-grid pointer-events-none opacity-40 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <SectionHeader
            badge="Our Impact"
            title="Numbers That Matter"
            subtitle="The verifiable scale and momentum of our student-led startup ecosystem."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`${stat.bg} p-8 rounded-3xl border-4 border-black shadow-[6px_6px_0px_0px_#000] text-center space-y-2 hover:rotate-1 transition-transform`}
              >
                <div className="font-display font-black text-4xl sm:text-6xl tracking-tight leading-none">
                  {stat.number}
                </div>
                <div className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider opacity-85">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT DRIVES US (CORE VALUES) */}
      <section className="py-24 border-b-4 border-black relative overflow-hidden bg-pink-soft/20">
        <div className="absolute inset-0 bg-pattern-bubbles pointer-events-none opacity-50 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <SectionHeader
            badge="What Drives Us"
            title="Core Values"
            subtitle="The fundamental principles guiding every decision, hackathon, and mentorship session."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl border-4 border-black dark:border-white p-7 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-4 hover:-translate-y-2 transition-transform"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-black flex items-center justify-center">
                      <Icon className="w-6 h-6 text-slate-900 dark:text-white" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-black font-display rounded-full border-2 border-black ${val.badgeColor}`}>
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white">{val.title}</h3>
                  <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA banner */}
          <div className="text-center pt-8">
            <Link href="/events">
              <MemphisButton variant="primary" className="px-10 py-4 text-lg">
                Explore Our Events <ArrowRight className="w-5 h-5 ml-2 inline" />
              </MemphisButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

