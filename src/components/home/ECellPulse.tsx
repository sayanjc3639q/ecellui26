'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Zap, Rocket, TrendingUp, Users, Presentation } from 'lucide-react';

interface PulseMetric {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  cardBg: string;
  textColor: string;
  badgeBg: string;
  rotate: string;
}

const pulseMetrics: PulseMetric[] = [
  {
    target: 50,
    suffix: '+',
    label: 'Startups Incubated',
    sublabel: 'From campus ideas to active ventures',
    icon: Rocket,
    cardBg: 'bg-white dark:bg-slate-900',
    textColor: 'text-slate-900 dark:text-white',
    badgeBg: 'bg-primary text-white',
    rotate: 'hover:rotate-1',
  },
  {
    target: 10,
    prefix: '₹',
    suffix: 'Cr+',
    label: 'Funding Raised',
    sublabel: 'Angel, seed & grant capital deployed',
    icon: TrendingUp,
    cardBg: 'bg-primary text-white',
    textColor: 'text-white',
    badgeBg: 'bg-black text-white dark:bg-white dark:text-black',
    rotate: 'hover:-rotate-1',
  },
  {
    target: 200,
    suffix: '+',
    label: 'Workshops & Meets',
    sublabel: 'Bootcamps, hackathons & masterclasses',
    icon: Presentation,
    cardBg: 'bg-white dark:bg-slate-900',
    textColor: 'text-slate-900 dark:text-white',
    badgeBg: 'bg-secondary text-white',
    rotate: 'hover:rotate-1',
  },
  {
    target: 15,
    suffix: 'k+',
    label: 'Active Members',
    sublabel: 'Student founders, mentors & alumni network',
    icon: Users,
    cardBg: 'bg-secondary text-white',
    textColor: 'text-white',
    badgeBg: 'bg-amber-300 text-slate-900',
    rotate: 'hover:-rotate-1',
  },
];

const AnimatedCounter: React.FC<{
  target: number;
  prefix?: string;
  suffix?: string;
  isVisible: boolean;
}> = ({ target, prefix = '', suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    const frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, target]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const ECellPulse: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="gsap-section-reveal py-16 sm:py-20 bg-amber-50/50 dark:bg-slate-950/70 border-b-4 border-black relative overflow-hidden"
    >
      {/* Background Texture Patterns */}
      <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-30 z-0" />
      <div className="absolute inset-0 bg-pattern-zigzag pointer-events-none opacity-20 z-0" />

      {/* Floating Memphis Accents */}
      <div className="hidden lg:block absolute left-6 top-8 pointer-events-none z-0 animate-shape-float-a">
        <svg width="42" height="42" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="36" fill="none" stroke="#FF6B35" strokeWidth="12" />
        </svg>
      </div>
      <div className="hidden lg:block absolute right-8 bottom-6 pointer-events-none z-0 animate-shape-float-b">
        <svg width="50" height="20" viewBox="0 0 120 40">
          <path d="M5 20 Q 25 5 45 20 T 85 20 T 115 20" stroke="#4895EF" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header with ⚡ E-CELL PULSE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-center md:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-300 text-slate-950 font-display font-black text-xs sm:text-sm uppercase tracking-widest rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000]">
              <Zap className="w-4 h-4 fill-slate-950 text-slate-950 animate-bounce" />
              E-CELL PULSE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight">
              Real Impact, Measured in Motion
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 font-body text-sm sm:text-base max-w-md">
            Live metrics from our entrepreneurship hub powering India&apos;s next generation of builders.
          </p>
        </div>

        {/* Pulse Metrics Cards Grid */}
        <div className="gsap-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pulseMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className={`gsap-card-item p-6 sm:p-7 rounded-3xl border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#000] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${metric.cardBg} ${metric.rotate}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000] ${metric.badgeBg}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-black tracking-widest opacity-60">
                    0{idx + 1} //
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div
                    className={`text-4xl sm:text-5xl font-display font-black tracking-tight ${metric.textColor}`}
                  >
                    <AnimatedCounter
                      target={metric.target}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      isVisible={isVisible}
                    />
                  </div>
                  <div
                    className={`font-display font-extrabold text-base sm:text-lg tracking-tight ${metric.textColor}`}
                  >
                    {metric.label}
                  </div>
                  <p
                    className={`font-body text-xs sm:text-sm leading-relaxed opacity-80 ${metric.textColor}`}
                  >
                    {metric.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
