'use client';

import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { MemphisCard } from '../common/MemphisCard';

interface FacultyCoordinator {
  id: string;
  name: string;
  role: string;
  dept: string;
  image: string;
}

const facultyList: FacultyCoordinator[] = [
  {
    id: '1',
    name: 'Dr. A. Sharma',
    role: 'Chief Faculty Advisor',
    dept: 'Dept. of CSE, HIT',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Prof. V. Gupta',
    role: 'Technical Coordinator',
    dept: 'Dept. of IT, HIT',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Dr. S. Mukherjee',
    role: 'Incubation Mentor',
    dept: 'Dept. of ECE, HIT',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Prof. R. Banerjee',
    role: 'Industry Liaison Officer',
    dept: 'Dept. of ME, HIT',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  },
];

export const GuidanceThatEmpowers: React.FC = () => {
  return (
    <section className="gsap-section-reveal py-24 bg-pink-soft/15 border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Advisory"
          title="Guidance that Empowers"
          subtitle="Esteemed faculty coordinators steering students toward entrepreneurial milestones."
        />

        <div className="gsap-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyList.map((faculty) => (
            <MemphisCard key={faculty.id} className="p-6 text-center space-y-4 group">
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-black p-1 bg-peach/40 overflow-hidden group-hover:rotate-6 transition-transform">
                <img src={faculty.image} alt={faculty.name} className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h4 className="text-xl font-display font-black text-slate-900">{faculty.name}</h4>
                <p className="text-sm font-display font-bold text-primary">{faculty.role}</p>
                <p className="text-xs text-slate-500 font-body mt-1">{faculty.dept}</p>
              </div>
            </MemphisCard>
          ))}
        </div>
      </div>
    </section>
  );
};
