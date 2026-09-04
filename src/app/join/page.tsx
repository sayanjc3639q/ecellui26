import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { MemphisButton } from '@/components/common/MemphisButton';

export default function JoinPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeText="RECRUITMENT 2026"
        title="Join E-Cell HIT Haldia"
        subtitle="Be a part of the most vibrant student startup community on campus."
      />
      <form className="bg-white dark:bg-slate-900 border-3 border-black dark:border-white p-8 rounded-2xl shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1">Full Name</label>
          <input type="text" className="w-full p-3 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Department & Year</label>
          <input type="text" className="w-full p-3 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800" placeholder="CSE, 2nd Year" />
        </div>
        <MemphisButton variant="primary" type="button" className="w-full">
          Submit Application
        </MemphisButton>
      </form>
    </div>
  );
}
