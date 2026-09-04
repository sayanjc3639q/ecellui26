import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { MemphisButton } from '@/components/common/MemphisButton';

export default function IdeaPitchingPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeText="PITCH DECK PORTAL"
        title="Submit Your Idea"
        subtitle="Got a revolutionary startup idea? Pitch to our panel for incubation and mentorship."
      />
      <form className="bg-white dark:bg-slate-900 border-3 border-black dark:border-white p-8 rounded-2xl shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1">Startup / Idea Name</label>
          <input type="text" className="w-full p-3 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800" placeholder="e.g. EcoByte" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Elevator Pitch</label>
          <textarea rows={4} className="w-full p-3 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800" placeholder="Describe your startup in 2-3 sentences..." />
        </div>
        <MemphisButton variant="primary" type="button" className="w-full">
          Submit Pitch
        </MemphisButton>
      </form>
    </div>
  );
}
