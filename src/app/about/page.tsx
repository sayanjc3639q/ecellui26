import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badgeText="OUR STORY"
        title="About E-Cell HIT Haldia"
        subtitle="Empowering innovation, mentoring founders, and fostering entrepreneurial leadership since inception."
      />
      <div className="bg-white dark:bg-slate-900 border-3 border-black dark:border-white p-8 rounded-2xl shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff]">
        <p className="font-body text-slate-700 dark:text-slate-300 leading-relaxed text-base">
          The Entrepreneurship Cell at Haldia Institute of Technology is dedicated to nurturing the spirit of innovation among students. We bridge the gap between technical ideas and real-world commercial viability.
        </p>
      </div>
    </div>
  );
}
