'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { MemphisButton } from '@/components/common/MemphisButton';

interface EventData {
  id: string;
  slug: string;
  title: string;
  categoryBadge: 'Seminar' | 'Competition' | 'Meetup' | 'Summit' | 'Hackathon';
  dateLocation: string;
  locationName: string;
  description: string;
  image: string;
  statusBadge: 'OPEN' | 'COMPLETED' | 'UPCOMING';
  type: 'Seminars' | 'Competitions' | 'Meetups';
}

// Events ordered by pattern: 1. Seminars -> 2. Competitions -> 3. Meetups
const eventsList: EventData[] = [
  // 1. SEMINARS
  {
    id: '69493f220d1ac58875dba36a',
    slug: 'the-founder-road',
    title: 'The Founder Road',
    categoryBadge: 'Seminar',
    dateLocation: 'Nov 22, 2025',
    locationName: 'Zoho Meet',
    description:
      'An exclusive online session featuring founders sharing their real entrepreneurial journeys, breakthroughs, and growth mindset.',
    image: 'https://ik.imagekit.io/qlynnooa4/ecell-events/event-1766407968863-1000240028_7CcHSMguu.jpg',
    statusBadge: 'COMPLETED',
    type: 'Seminars',
  },
  {
    id: '695960f91396b9072e6934cc',
    slug: 'online-seminar-pradeep-motwani',
    title: 'Tech Entrepreneurship Seminar',
    categoryBadge: 'Seminar',
    dateLocation: 'Jul 06, 2025',
    locationName: 'Google Meet',
    description:
      'Featuring Pradeep Motwani. Deep dive into the world of tech entrepreneurship, sustainable innovation, and market scaling.',
    image: 'https://ik.imagekit.io/qlynnooa4/ecell-events/event-1767465207580-514965770_506594759166643_6496856742163189562_n_QRwefOPt4.jpg',
    statusBadge: 'COMPLETED',
    type: 'Seminars',
  },
  {
    id: '6923481f2880fc3977b8cba2',
    slug: 'from-idea-to-launch',
    title: 'From Idea to Launch Masterclass',
    categoryBadge: 'Seminar',
    dateLocation: 'Jan 25, 2025',
    locationName: 'Google Meet',
    description:
      'Interactive webinar by HIT E-Cell featuring Jitender Singh Dahiya, a renowned fintech innovator and startup mentor.',
    image: 'https://ik.imagekit.io/qlynnooa4/ecell-events/event-1766407210654-1000240023_Z45uH5IfM.jpg',
    statusBadge: 'COMPLETED',
    type: 'Seminars',
  },

  // 2. COMPETITIONS
  {
    id: '69c37d65cf34e6ee0a1c866d',
    slug: 'startup-sprint-offline',
    title: 'Startup Sprint - Offline Final Pitch',
    categoryBadge: 'Competition',
    dateLocation: 'Mar 25, 2026',
    locationName: 'EE Dept, HIT Haldia',
    description:
      'Congratulations to the shortlisted top 5 teams! Present your pitch deck in front of the evaluation panel to claim prize seed grants.',
    image: 'https://ik.imagekit.io/qlynnooa4/ecell-events/event-1774419299837-74f14b85-0b65-434d-84c6-c0d3e94a7ec9_21KmsJbEh.jpg',
    statusBadge: 'COMPLETED',
    type: 'Competitions',
  },
  {
    id: '69838a6b4584f64e76d82e98',
    slug: 'startup-sprint',
    title: 'STARTUP SPRINT 2026',
    categoryBadge: 'Competition',
    dateLocation: 'Feb 08, 2026',
    locationName: 'Online Arena',
    description:
      'Build • Validate • Pitch • Win. An intense 12-hour hands-on startup challenge turning raw ideas into validated business models.',
    image: 'https://ik.imagekit.io/qlynnooa4/ecell-events/event-1770228577785-Blue_and_Orange_Modern_Event_Doc_Banner_f_ehuLBop.png',
    statusBadge: 'COMPLETED',
    type: 'Competitions',
  },
  {
    id: '695960581396b9072e6934c8',
    slug: 'think-tank',
    title: 'Think Tank Pitch Challenge',
    categoryBadge: 'Competition',
    dateLocation: 'Aug 02, 2025',
    locationName: 'EE Dept, HIT',
    description:
      'An idea-pitching event by HITian Inside and E-Cell where student teams present creative solutions for cash prizes & MAR points.',
    image: 'https://ik.imagekit.io/qlynnooa4/ecell-events/event-1767465045918-514819133_18276074881286544_4834495075059779385_n_s9hr8T3Vv.webp',
    statusBadge: 'COMPLETED',
    type: 'Competitions',
  },
  {
    id: '69595e4e1396b9072e6934b9',
    slug: 'pitch-desk',
    title: 'Pitch Desk Mentorship',
    categoryBadge: 'Competition',
    dateLocation: 'Mar 30, 2025',
    locationName: 'EE Dept Auditorium',
    description:
      'Learn from experts! Pitching mentorship event featuring mentors who have guided startups that featured on Shark Tank India.',
    image: 'https://ik.imagekit.io/qlynnooa4/ecell-events/event-1767464524382-488160408_17919822879066326_4866712479038606398_n_kwKOJ7z3B.webp',
    statusBadge: 'COMPLETED',
    type: 'Competitions',
  },
  {
    id: '69493aa50d1ac58875dba32d',
    slug: 'national-case-study-competition',
    title: 'National Case Study Competition',
    categoryBadge: 'Competition',
    dateLocation: 'Nov 01, 2024',
    locationName: 'HIT Campus & IIT-B',
    description:
      'National Case Study Competition in collaboration with E-Cell IIT Bombay focusing on supply chain & logistics problem-solving.',
    image: 'https://ik.imagekit.io/qlynnooa4/ecell-events/event-1766406819550-1000240020_A5_pq4R7z.jpg',
    statusBadge: 'COMPLETED',
    type: 'Competitions',
  },

  // 3. MEETUPS
  {
    id: '69595fcf1396b9072e6934c4',
    slug: 'women-entrepreneurs',
    title: 'Women Entrepreneurs Summit',
    categoryBadge: 'Meetup',
    dateLocation: 'May 11, 2025',
    locationName: 'Google Meet',
    description:
      'Empowerment, inspiration, and solidarity as we honor the contributions of women entrepreneurs and startup leaders worldwide.',
    image: 'https://ik.imagekit.io/qlynnooa4/ecell-events/event-1767464909561-495613402_17923532679066326_6688281191358413797_n_fCzGOg6LF.webp',
    statusBadge: 'COMPLETED',
    type: 'Meetups',
  },
];

const categoryBadgeStyles: Record<string, string> = {
  Competition: 'bg-[#FF6B35] text-white shadow-[2px_2px_0px_0px_#000]',
  Seminar: 'bg-[#FFD166] text-slate-950 shadow-[2px_2px_0px_0px_#000]',
  Meetup: 'bg-[#4895EF] text-white shadow-[2px_2px_0px_0px_#000]',
  Summit: 'bg-[#06D6A0] text-slate-950 shadow-[2px_2px_0px_0px_#000]',
  Hackathon: 'bg-[#9D4EDD] text-white shadow-[2px_2px_0px_0px_#000]',
};

type TabType = 'All' | 'Upcoming' | 'Seminars' | 'Competitions' | 'Meetups';

const typewriterWords = ['seminars', 'hackathons', 'summits'];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('All');
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Typewriter effect state
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Gyroscope & Mouse Parallax tilt state for background water waves
  const [gyro, setGyro] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const normY = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setGyro({ x: normX, y: normY });
    };

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        const normX = Math.max(-1, Math.min(1, e.gamma / 30));
        const normY = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
        setGyro({ x: normX, y: normY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, []);

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];
    let typingSpeed = isDeleting ? 60 : 110;

    if (!isDeleting && typedText === currentWord) {
      typingSpeed = 1800;
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typewriterWords.length);
      typingSpeed = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && typedText !== currentWord) {
        setTypedText(currentWord.slice(0, typedText.length + 1));
      } else if (isDeleting && typedText !== '') {
        setTypedText(currentWord.slice(0, typedText.length - 1));
      } else if (!isDeleting && typedText === currentWord) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  const filteredEvents = eventsList.filter((event) => {
    if (activeTab === 'All') return true;
    return event.type === activeTab;
  });

  // Calculate real-time 3D Hemispherical Dome curvature transform as cards slide (Responsive for Mobile & Desktop)
  useEffect(() => {
    if (activeTab !== 'All') return;

    let animationFrameId: number;

    const updateHemisphericalSlide = () => {
      if (marqueeRef.current) {
        const children = Array.from(marqueeRef.current.children) as HTMLElement[];
        const screenWidth = window.innerWidth;
        const isMobile = screenWidth < 640;

        children.forEach((child) => {
          const rect = child.getBoundingClientRect();
          const childCenter = rect.left + rect.width / 2;
          const ratio = Math.max(0, Math.min(1, childCenter / screenWidth));

          const angleRad = (ratio - 0.5) * Math.PI * (isMobile ? 0.45 : 0.75);
          const rotateY = isMobile ? -(ratio - 0.5) * 25 : -(ratio - 0.5) * 55;
          const translateZ = isMobile ? Math.cos(angleRad) * 45 - 25 : Math.cos(angleRad) * 110 - 70;
          const translateY = isMobile ? -Math.sin(ratio * Math.PI) * 16 : -Math.sin(ratio * Math.PI) * 32;
          const scale = isMobile ? 0.92 + Math.sin(ratio * Math.PI) * 0.1 : 0.84 + Math.sin(ratio * Math.PI) * 0.22;
          const opacity = isMobile ? 0.85 + Math.sin(ratio * Math.PI) * 0.15 : 0.7 + Math.sin(ratio * Math.PI) * 0.3;

          child.style.transform = `translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
          child.style.opacity = `${opacity}`;
          child.style.zIndex = `${Math.round(Math.sin(ratio * Math.PI) * 30)}`;
        });
      }
      animationFrameId = requestAnimationFrame(updateHemisphericalSlide);
    };

    animationFrameId = requestAnimationFrame(updateHemisphericalSlide);
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeTab]);

  const renderCard = (event: EventData) => (
    <div className="bg-white dark:bg-slate-900 rounded-[20px] sm:rounded-[24px] border-3 border-black dark:border-white overflow-hidden shadow-[4px_4px_0px_0px_#000] sm:shadow-[5px_5px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] hover:shadow-[8px_8px_0px_0px_#000] dark:hover:shadow-[8px_8px_0px_0px_#fff] transition-all duration-300 flex flex-col justify-between group relative h-full">
      {/* Smooth dark overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/30 pointer-events-none transition-colors duration-300 z-20" />

      <div>
        {/* Card Header Image with Aspect Ratio & Dual Backdrop */}
        <div className="relative aspect-[16/9.5] w-full overflow-hidden border-b-3 border-black bg-slate-950">
          <div
            className="absolute inset-0 bg-cover bg-center blur-md opacity-30 scale-110 pointer-events-none"
            style={{ backgroundImage: `url(${event.image})` }}
          />
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="relative z-10 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 z-20 pointer-events-none" />
          <span
            className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-30 text-[9px] sm:text-[10px] font-display font-black px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 border-black ${
              categoryBadgeStyles[event.categoryBadge] || 'bg-amber-300 text-black border-2 border-black'
            }`}
          >
            {event.categoryBadge}
          </span>
          <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-30 text-[8px] sm:text-[9px] font-display font-black uppercase px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full border-2 border-black bg-slate-100 text-slate-800 shadow-[1px_1px_0px_0px_#000]">
            {event.statusBadge}
          </span>
        </div>

        {/* Card Main Body */}
        <div className="p-3.5 sm:p-4 space-y-2 sm:space-y-2.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-slate-900 dark:text-amber-300 border-2 border-black text-[10px] sm:text-[11px] font-display font-black shadow-[1.5px_1.5px_0px_0px_#000]">
              <Calendar className="w-3 h-3 text-primary" />
              {event.dateLocation}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-sky-100 dark:bg-sky-900/40 text-slate-900 dark:text-sky-300 border-2 border-black text-[10px] sm:text-[11px] font-display font-bold shadow-[1.5px_1.5px_0px_0px_#000]">
              <MapPin className="w-3 h-3 text-secondary" />
              {event.locationName}
            </span>
          </div>

          <h3 className="font-display font-black text-base sm:text-lg text-slate-950 dark:text-white tracking-tight leading-snug group-hover:text-primary transition-colors">
            {event.title}
          </h3>

          <p className="font-body text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
            {event.description}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-3.5 sm:p-4 pt-2.5 sm:pt-3 border-t-2 border-slate-100 dark:border-slate-800 mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-display font-bold text-slate-500 dark:text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span className="hidden xs:inline">E-Cell HIT Certified</span>
          <span className="xs:hidden">HIT Certified</span>
        </div>

        <Link href={`/events/${event.slug}`}>
          <MemphisButton
            variant="primary"
            className="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] uppercase group-hover:translate-x-1"
          >
            Details <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </MemphisButton>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#faf8f5] dark:bg-[#121418] text-slate-900 dark:text-white overflow-x-hidden">
      {/* 1. HERO HEADER WITH MEMPHIS PATTERNS */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden border-b-4 border-black bg-[#faf8f5] dark:bg-slate-950">
        {/* Left Big Solid Lilac Curved Shape */}
        <div className="absolute -top-16 -left-12 w-[45vw] sm:w-[34vw] min-w-[240px] max-w-[520px] h-[120%] bg-[#DCE7FD] dark:bg-[#1a233a] border-r-3 border-b-3 border-black rounded-br-[120px] sm:rounded-br-[180px] pointer-events-none z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]" />

        {/* Right Big Solid Peach Curved Shape */}
        <div className="absolute -top-12 -right-16 w-[45vw] sm:w-[36vw] min-w-[240px] max-w-[560px] h-[130%] bg-[#FFE3D6] dark:bg-[#32201c] border-l-3 border-b-3 border-black rounded-bl-[140px] sm:rounded-bl-[220px] pointer-events-none z-0 shadow-[-4px_4px_0px_0px_rgba(0,0,0,0.15)]" />

        {/* Memphis Overlays */}
        <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-30 sm:opacity-40 z-0" />
        <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-20 sm:opacity-30 z-0" />

        {/* Floating Geometric Memphis Accents */}
        <div className="hidden lg:block absolute left-8 bottom-10 pointer-events-none z-0 animate-shape-float-a">
          <svg width="42" height="42" viewBox="0 0 100 100">
            <polygon points="50,5 95,95 5,95" fill="#FF6B35" stroke="#000" strokeWidth="5" />
          </svg>
        </div>
        <div className="hidden lg:block absolute right-10 top-12 pointer-events-none z-0 animate-shape-float-b">
          <svg width="48" height="48" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="38" stroke="#4895EF" strokeWidth="14" fill="none" />
            <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-3 sm:px-4 text-center space-y-4 sm:space-y-6 relative z-10">
          {/* Yellow Memphis Pill Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:px-5 sm:py-1.5 bg-[#FFD166] text-slate-950 font-display font-black text-[10px] sm:text-xs uppercase tracking-widest rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000]">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> JOIN THE HUSTLE
            </span>
          </div>

          {/* Title Area Wrapper with Animated Background Elements */}
          <div className="relative inline-block my-1 sm:my-2">
            {/* 1. Pulsing Soft Aura */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[450px] h-32 sm:h-52 rounded-full bg-gradient-to-r from-amber-300/40 via-orange-400/30 to-sky-400/30 blur-2xl animate-hero-pulse-slow pointer-events-none z-0" />

            {/* 2. Rotating 12-Point Memphis Starburst Behind Text */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-20 sm:opacity-30 dark:opacity-40 animate-hero-spin-slow">
              <svg width="160" height="160" className="sm:w-[220px] sm:h-[220px]" viewBox="0 0 100 100" fill="none">
                <path d="M50 0 L60 35 L95 15 L70 45 L100 50 L70 55 L95 85 L60 65 L50 100 L40 65 L5 85 L30 55 L0 50 L30 45 L5 15 L40 35 Z" fill="#FF6B35" stroke="#000" strokeWidth="3" />
              </svg>
            </div>

            {/* 3. Floating Left Memphis Accent Box */}
            <div className="hidden sm:block absolute -left-16 top-3 w-12 h-12 bg-[#FFD166] border-3 border-black shadow-[4px_4px_0px_0px_#000] rotate-12 rounded-xl animate-hero-float-1 pointer-events-none z-10" />

            {/* 4. Floating Right Memphis Squiggle */}
            <div className="hidden sm:block absolute -right-16 top-4 pointer-events-none z-10 animate-shape-float-b">
              <svg width="70" height="35" viewBox="0 0 160 60" fill="none">
                <path d="M 10 30 Q 30 5 50 30 T 90 30 T 130 30" stroke="#4895EF" strokeWidth="10" strokeLinecap="round" />
              </svg>
            </div>

            {/* Main Title with Memphis 3D Offset Drop Shadow */}
            <h1 className="relative z-10 font-display font-black text-4xl sm:text-7xl md:text-8xl tracking-tight text-slate-950 dark:text-white leading-tight drop-shadow-[3px_3px_0px_#FF6B35] sm:drop-shadow-[5px_5px_0px_#FF6B35]">
              Our Events
            </h1>

            {/* 5. Animated Wavy Underline Accent */}
            <div className="flex justify-center -mt-1 sm:-mt-2 relative z-10">
              <svg width="150" height="14" viewBox="0 0 200 20" fill="none" className="w-[150px] h-[14px] sm:w-[220px] sm:h-[18px] animate-hero-float-2">
                <path d="M 5 10 Q 25 2 45 10 T 85 10 T 125 10 T 165 10 T 195 10" stroke="#FF6B35" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Subtitle inside Memphis Pill Frame with Typewriter Effect */}
          <div className="inline-block max-w-2xl mx-auto p-1 bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] relative z-10">
            <p className="font-body text-slate-700 dark:text-slate-200 text-xs sm:text-base px-4 py-2.5 sm:px-6 sm:py-3 font-semibold leading-relaxed">
              Igniting ideas through{' '}
              <span className="font-black text-slate-950 dark:text-white text-xs sm:text-base inline-block min-w-[70px] sm:min-w-[90px] text-left">
                {typedText}
              </span>
              .
              <br />
              Dive into the entrepreneurial ecosystem and build the future.
            </p>
          </div>

          {/* FILTER PILLS (All / Upcoming / Seminars / Competitions / Meetups) */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 pt-2 sm:pt-4">
            {(['All', 'Upcoming', 'Seminars', 'Competitions', 'Meetups'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 sm:px-7 sm:py-2.5 text-xs sm:text-sm font-display font-black rounded-full border-2 border-black dark:border-white transition-all ${
                  activeTab === tab
                    ? 'bg-[#FF6B35] text-white shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] -translate-y-0.5'
                    : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-amber-100 dark:hover:bg-slate-800 shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Subtle Wave Divider Accent at bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none opacity-40 z-0">
          <svg className="w-full h-8 sm:h-12 animate-wave-hero-1" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,40 C320,90 440,0 740,40 C1040,80 1200,10 1440,40 L1440,120 L0,120 Z" fill="#4895EF" />
          </svg>
        </div>
      </section>

      {/* 2. EVENTS DISPLAY SECTION */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Interactive Gyroscope Water Waves Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
          {/* Layer 1: Deep Blue Water Wave */}
          <svg
            className="absolute -bottom-12 -left-12 -right-12 w-[112%] h-48 sm:h-64 transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${gyro.x * 30}px, ${gyro.y * 18}px, 0) scale(1.05)`,
            }}
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
          >
            <path
              d="M0,96 C280,160 420,32 720,96 C1020,160 1200,48 1440,96 L1440,240 L0,240 Z"
              fill="#4895EF"
            />
          </svg>

          {/* Layer 2: Midground Emerald Fluid Wave */}
          <svg
            className="absolute -bottom-8 -left-12 -right-12 w-[112%] h-40 sm:h-56 transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${gyro.x * -40}px, ${gyro.y * -24}px, 0) scale(1.08)`,
            }}
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
          >
            <path
              d="M0,128 C360,32 540,192 900,128 C1140,80 1320,160 1440,128 L1440,240 L0,240 Z"
              fill="#06D6A0"
            />
          </svg>

          {/* Layer 3: Foreground Sunset Orange Wave Accent */}
          <svg
            className="absolute -bottom-4 -left-12 -right-12 w-[112%] h-32 sm:h-44 transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${gyro.x * 50}px, ${gyro.y * 30}px, 0) scale(1.1)`,
            }}
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
          >
            <path
              d="M0,160 C240,80 480,224 720,160 C960,96 1200,192 1440,160 L1440,240 L0,240 Z"
              fill="#FF6B35"
            />
          </svg>
        </div>

        {/* Background Dot Texture */}
        <div className="absolute inset-0 bg-memphis-dots opacity-15 pointer-events-none z-0" />

        {/* Clean Outer Margin Accents */}
        <div className="hidden xl:block absolute -left-12 top-28 pointer-events-none z-0 animate-shape-float-a">
          <div className="w-14 h-6 bg-[#FFD166] text-slate-950 border-2 border-black rounded-full shadow-[3px_3px_0px_0px_#000] -rotate-12 flex items-center justify-center font-black text-[9px]">
            ✦ E-CELL
          </div>
        </div>

        <div className="hidden xl:block absolute -right-10 top-1/3 pointer-events-none z-0 animate-shape-float-b">
          <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="34" stroke="#06D6A0" strokeWidth="12" />
            <circle cx="50" cy="50" r="42" stroke="#000" strokeWidth="3" />
          </svg>
        </div>

        {filteredEvents.length === 0 ? (
          /* Empty State when no events match filter (e.g. Upcoming) */
          <div className="text-center py-12 sm:py-20 bg-white dark:bg-slate-900 rounded-[28px] sm:rounded-[36px] border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] p-6 sm:p-8 max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-400 border-3 border-black rounded-2xl mx-auto flex items-center justify-center font-display font-black text-xl sm:text-2xl shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]">
              ⚡
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-slate-950 dark:text-white">
              No Events Listed Here Right Now
            </h3>
            <p className="font-body text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              We are currently curating new flagship events and sessions. Check back soon or explore our other sections!
            </p>
          </div>
        ) : activeTab === 'All' ? (
          /* 3D HEMISPHERICAL SLIDESHOW FOR "ALL" SECTION */
          <div className="relative py-6 sm:py-12">
            {/* Visual Hemispherical Arc Dashed Accent Line */}
            <svg
              className="absolute top-0 left-0 right-0 w-full h-24 sm:h-36 pointer-events-none opacity-30 z-0"
              viewBox="0 0 1200 140"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 130 Q 600 -20 1200 130"
                stroke="#FF6B35"
                strokeWidth="4"
                fill="none"
                strokeDasharray="12 12"
              />
            </svg>

            <div className="overflow-hidden p-4 sm:p-6 -m-4 sm:-m-6 relative z-10 [perspective:800px] sm:[perspective:1000px] [perspective-origin:center_center]">
              <div ref={marqueeRef} className="animate-continuous-marquee py-4 sm:py-8 [transform-style:preserve-3d]">
                {[...filteredEvents, ...filteredEvents].map((event, idx) => (
                  <div
                    key={`${event.id}-${idx}`}
                    className="w-[250px] sm:w-[320px] flex-shrink-0 px-2 sm:px-2.5 transition-all duration-150 ease-linear"
                  >
                    {renderCard(event)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* STATIC GRID LAYOUT FOR INDIVIDUAL CATEGORY TABS (Seminars / Competitions / Meetups) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch max-w-6xl mx-auto">
            {filteredEvents.map((event) => (
              <div key={event.id}>
                {renderCard(event)}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
