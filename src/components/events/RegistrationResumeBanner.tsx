'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, X, Sparkles, Rocket } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearDraftRegistration } from '@/store/slices/eventsSlice';

export const RegistrationResumeBanner: React.FC = () => {
  const dispatch = useAppDispatch();
  const draft = useAppSelector((state) => state.events.draftRegistration);

  if (!draft) return null;

  return (
    <div className="bg-[#fef08a] dark:bg-amber-950/80 border-y-4 border-black text-slate-950 dark:text-white py-3.5 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-full bg-primary text-white border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000]">
            <Rocket className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-[10px] font-display font-black uppercase tracking-wider px-2 py-0.5 bg-white dark:bg-slate-900 rounded-full border border-black">
                INCOMPLETE REGISTRATION
              </span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                Last saved {draft.lastSavedAt}
              </span>
            </div>
            <p className="font-display font-black text-sm sm:text-base text-slate-950 dark:text-white">
              You have an unfinished registration for <span className="underline decoration-primary decoration-2">{draft.eventTitle}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link href={`/events/${draft.eventSlug}/register`}>
            <button className="py-2 px-5 rounded-full bg-primary hover:bg-[#e05724] text-white font-display font-black text-xs flex items-center gap-1.5 border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5 transition-all">
              Resume Registration <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
          <button
            onClick={() => dispatch(clearDraftRegistration())}
            className="p-1.5 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 border-2 border-black text-slate-700 dark:text-slate-300 shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5"
            title="Discard Draft"
            aria-label="Discard unfinished registration"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
