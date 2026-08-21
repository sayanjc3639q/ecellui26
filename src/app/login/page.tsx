import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function LoginPage() {
  return (
    <div className="pt-32 pb-20 max-w-md mx-auto px-4">
      <SectionHeader
        badgeText="WELCOME BACK"
        title="Login to E-Cell"
        subtitle="Access your member dashboard and pitching applications."
      />
      <form className="bg-white dark:bg-slate-900 border-3 border-black dark:border-white p-8 rounded-2xl shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1">Email Address</label>
          <input type="email" className="w-full p-3 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800" placeholder="student@hithaldia.ac.in" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Password</label>
          <input type="password" className="w-full p-3 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800" placeholder="••••••••" />
        </div>
        <button type="button" className="w-full bg-secondary text-white py-3 rounded-full font-display font-extrabold border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_#000] hover:translate-y-0.5 transition-all">
          Login
        </button>
      </form>
    </div>
  );
}
