'use client';

import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Award, BookOpen, Briefcase, GraduationCap, Mail } from 'lucide-react';

interface Advisor {
  id: string;
  name: string;
  role: string;
  dept: string;
  image: string;
  quote: string;
  expertise: string[];
  accentColor: string;
  roleIcon: React.ElementType;
  roleBg: string;
}

const advisors: Advisor[] = [
  {
    id: '1',
    name: 'Dr. A. Sharma',
    role: 'Chief Faculty Advisor',
    dept: 'Dept. of Computer Science & Engg.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    quote: '"Entrepreneurship transforms knowledge into impact — and I am here to guide every step of that journey."',
    expertise: ['AI & ML', 'Tech Policy', 'Venture Strategy'],
    accentColor: '#FF6B35',
    roleIcon: Award,
    roleBg: 'bg-[#FFE5D9]',
  },
  {
    id: '2',
    name: 'Prof. V. Gupta',
    role: 'Technical Coordinator',
    dept: 'Dept. of Information Technology',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    quote: '"Innovation at its core is a technical challenge. We give students the tools to build solutions that scale."',
    expertise: ['Cloud Infra', 'Cybersecurity', 'Product Mgmt'],
    accentColor: '#4895EF',
    roleIcon: BookOpen,
    roleBg: 'bg-blue-100',
  },
  {
    id: '3',
    name: 'Dr. S. Mukherjee',
    role: 'Incubation Mentor',
    dept: 'Dept. of Electronics & Comm. Engg.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    quote: '"A great startup starts with a problem worth solving. I help students discover those problems."',
    expertise: ['IoT Systems', 'Hardware MVP', 'Grant Writing'],
    accentColor: '#06D6A0',
    roleIcon: GraduationCap,
    roleBg: 'bg-mint',
  },
  {
    id: '4',
    name: 'Prof. R. Banerjee',
    role: 'Industry Liaison Officer',
    dept: 'Dept. of Mechanical Engineering',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    quote: '"The bridge between academia and industry is built one mentorship at a time."',
    expertise: ['Manufacturing', 'Industry Connect', 'Fundraising'],
    accentColor: '#A855F7',
    roleIcon: Briefcase,
    roleBg: 'bg-purple-100',
  },
];

export const GuidanceThatEmpowers: React.FC = () => {
  return (
    <section className="gsap-section-reveal py-20 sm:py-28 bg-[#FFF9F5] dark:bg-[#121418] border-b-4 border-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-pattern-diagonal-waves pointer-events-none opacity-50 z-0" />
      <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-20 z-0" />

      {/* Memphis floating accents */}
      <div className="hidden lg:block absolute left-10 top-12 pointer-events-none z-0 animate-shape-float-a">
        <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="38" stroke="#FBDAE9" strokeWidth="12" />
          <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" />
        </svg>
      </div>
      <div className="hidden lg:block absolute right-10 bottom-10 pointer-events-none z-0 animate-shape-float-b">
        <svg width="44" height="44" viewBox="0 0 100 100">
          <polygon points="50,5 95,95 5,95" fill="#FFD166" stroke="#000" strokeWidth="5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        <SectionHeader
          badge="Advisory Board"
          title="Guidance that Empowers"
          subtitle="Distinguished faculty mentors who bridge academia and entrepreneurship, steering HIT Haldia's next generation of founders."
        />

        <div className="gsap-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor) => {
            const RoleIcon = advisor.roleIcon;
            return (
              <div
                key={advisor.id}
                className="group relative flex flex-col rounded-3xl border-3 border-black bg-white dark:bg-slate-900 overflow-hidden shadow-[6px_6px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#000] transition-all duration-300"
              >
                {/* Coloured accent top stripe */}
                <div
                  className="h-2 w-full border-b-2 border-black"
                  style={{ backgroundColor: advisor.accentColor }}
                />

                {/* Image Section */}
                <div className="relative w-full h-52 overflow-hidden border-b-3 border-black bg-slate-100">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Role Icon Badge */}
                  <div className={`absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_#000] ${advisor.roleBg}`}>
                    <RoleIcon className="w-4 h-4" style={{ color: advisor.accentColor }} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-5 space-y-3">
                  {/* Name & Role */}
                  <div>
                    <h4 className="font-display font-black text-lg text-slate-900 dark:text-white tracking-tight leading-snug">
                      {advisor.name}
                    </h4>
                    <span
                      className="inline-block mt-1 text-[11px] font-display font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-black"
                      style={{ backgroundColor: advisor.accentColor + '22', color: advisor.accentColor }}
                    >
                      {advisor.role}
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-body mt-1.5 leading-snug">
                      {advisor.dept}
                    </p>
                  </div>

                  {/* Quote */}
                  <p className="text-xs font-body text-slate-600 dark:text-slate-300 italic leading-relaxed border-l-2 pl-3" style={{ borderColor: advisor.accentColor }}>
                    {advisor.quote}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {advisor.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-display font-black px-2 py-0.5 rounded-full border border-black bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer: Contact Links */}
                <div className="px-5 pb-5 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-wider">
                    HIT Haldia Faculty
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      aria-label={`Email ${advisor.name}`}
                      className="w-7 h-7 rounded-lg border border-black flex items-center justify-center bg-slate-50 dark:bg-slate-800 hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </button>
                    <button
                      aria-label={`LinkedIn ${advisor.name}`}
                      className="w-7 h-7 rounded-lg border border-black flex items-center justify-center bg-slate-50 dark:bg-slate-800 hover:bg-secondary hover:text-white transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

