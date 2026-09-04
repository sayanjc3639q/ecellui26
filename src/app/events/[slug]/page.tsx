'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Users,
  Trophy,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Sparkles,
  Share2,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { eventsData } from '@/data/eventsData';
import { EventRegistrationModal } from '@/components/events/EventRegistrationModal';

export default function EventDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const event = eventsData[slug] || eventsData['e-summit-2024'];

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!event) {
    return notFound();
  }

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-[#faf8f5] dark:bg-[#121418] text-slate-900 dark:text-white relative overflow-hidden">
      {/* Background Textures */}
      <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-30 z-0" />
      <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-20 z-0" />

      {/* Floating Memphis Accents */}
      <div className="hidden lg:block absolute top-28 -left-12 w-48 h-48 bg-[#fecdd3] rounded-full border-4 border-black pointer-events-none z-0 shadow-[6px_6px_0px_0px_#000] opacity-40" />
      <div className="hidden lg:block absolute top-1/2 -right-10 w-44 h-44 bg-[#DCE7FD] rounded-3xl border-4 border-black rotate-12 pointer-events-none z-0 shadow-[6px_6px_0px_0px_#000] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 space-y-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border-2 border-black dark:border-white font-display font-black text-xs shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] hover:-translate-y-0.5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Events
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border-2 border-black dark:border-white font-display font-black text-xs shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] active:translate-y-0.5 transition-all"
          >
            <Share2 className="w-4 h-4 text-primary" /> {copiedLink ? 'Link Copied!' : 'Share Event'}
          </button>
        </div>

        {/* 1. HERO EVENT BANNER & METADATA CARD */}
        <div className="bg-white dark:bg-slate-900 rounded-[36px] border-4 border-black dark:border-white overflow-hidden shadow-[10px_10px_0px_0px_#000] dark:shadow-[10px_10px_0px_0px_#fff] relative">
          {/* Banner Image Frame */}
          <div className="relative h-64 sm:h-96 w-full overflow-hidden border-b-4 border-black bg-slate-200">
            <img
              src={event.bannerImage}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Category Tag Overlay */}
            <div className="absolute top-6 left-6">
              <span className={`px-4 py-1.5 font-display font-black text-xs sm:text-sm uppercase tracking-wider rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000] ${event.badgeBg}`}>
                {event.categoryBadge}
              </span>
            </div>

            {/* Floating Title on Banner Bottom */}
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight drop-shadow-[2px_2px_0px_#000]">
                {event.title}
              </h1>
              <p className="font-body text-xs sm:text-base text-slate-200 font-semibold max-w-3xl">
                {event.tagline}
              </p>
            </div>
          </div>

          {/* Quick Info Grid Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x-4 divide-black dark:divide-white bg-[#fffbeb] dark:bg-slate-850 font-body">
            <div className="p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0052cc] text-white border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-display font-black text-slate-400 uppercase">DATE</span>
                <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">{event.date}</p>
              </div>
            </div>

            <div className="p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B35] text-white border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-display font-black text-slate-400 uppercase">TIME</span>
                <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">{event.time}</p>
              </div>
            </div>

            <div className="p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#eab308] text-slate-950 border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-display font-black text-slate-400 uppercase">VENUE</span>
                <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">{event.venue}</p>
              </div>
            </div>

            <div className="p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000]">
                <Ticket className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-display font-black text-slate-400 uppercase">ENTRY</span>
                <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">{event.entryFee}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MAIN CONTENT GRID (LEFT 2 COLS: OVERVIEW, RULES, SCHEDULE | RIGHT 1 COL: REGISTRATION CTA & REWARD CARD) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left 2 Cols */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Description Section */}
            <div className="bg-white dark:bg-slate-900 rounded-[32px] border-4 border-black dark:border-white p-7 sm:p-9 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-slate-200 dark:border-slate-800">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950 dark:text-white">
                  About The Event
                </h2>
              </div>
              <p className="font-body text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {event.overview}
              </p>
            </div>

            {/* Event Agenda & Schedule */}
            <div className="bg-white dark:bg-slate-900 rounded-[32px] border-4 border-black dark:border-white p-7 sm:p-9 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-slate-200 dark:border-slate-800">
                <Clock className="w-6 h-6 text-secondary" />
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950 dark:text-white">
                  Event Schedule & Agenda
                </h2>
              </div>

              <div className="space-y-4 font-body">
                {event.agenda.map((slot, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border-2 border-black dark:border-white flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-display font-black text-primary uppercase">
                        {slot.time}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {slot.activity}
                      </h4>
                    </div>
                    {slot.speakerOrHost && (
                      <span className="text-xs font-bold text-slate-500 bg-white dark:bg-slate-700 px-3 py-1 rounded-full border border-black self-start sm:self-auto">
                        {slot.speakerOrHost}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Event Rules & Guidelines */}
            <div className="bg-white dark:bg-slate-900 rounded-[32px] border-4 border-black dark:border-white p-7 sm:p-9 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-slate-200 dark:border-slate-800">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950 dark:text-white">
                  Rules & Participation Guidelines
                </h2>
              </div>

              <div className="space-y-3 font-body">
                {event.rules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-display font-black text-xs border border-black flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility & Perks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-[28px] bg-[#dbeafe] dark:bg-blue-950/40 border-3 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] space-y-3">
                <h3 className="font-display font-black text-lg text-slate-950 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-secondary" /> Eligibility
                </h3>
                <ul className="space-y-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  {event.eligibility.map((el, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      ✦ {el}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-[28px] bg-[#dcfce7] dark:bg-emerald-950/40 border-3 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] space-y-3">
                <h3 className="font-display font-black text-lg text-slate-950 dark:text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-emerald-600" /> Perks & Rewards
                </h3>
                <ul className="space-y-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  {event.perks.map((pk, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      ✦ {pk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right 1 Col: Registration Action Card & Rewards */}
          <div className="space-y-6 lg:sticky lg:top-28">
            {/* Primary Action Registration Card */}
            <div className="bg-white dark:bg-slate-900 rounded-[32px] border-4 border-black dark:border-white p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] space-y-5">
              <div className="space-y-2">
                <span className="text-[10px] font-display font-black uppercase tracking-wider text-slate-400">
                  REGISTRATION STATUS
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-black text-2xl text-slate-950 dark:text-white">
                    {event.type === 'hackathon' ? 'Team Registration' : 'Direct Pass'}
                  </h3>
                  <span className="flex items-center gap-1 text-xs font-display font-black text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Open
                  </span>
                </div>
              </div>

              {event.prizePool && (
                <div className="p-4 rounded-2xl bg-[#ffedd5] dark:bg-amber-950/40 border-2 border-black space-y-1">
                  <span className="text-[10px] font-display font-black uppercase text-amber-800 dark:text-amber-300">
                    🏆 TOTAL PRIZE POOL
                  </span>
                  <p className="font-display font-black text-xl text-slate-950 dark:text-white">
                    {event.prizePool}
                  </p>
                </div>
              )}

              {event.type === 'hackathon' && event.teamSize && (
                <div className="p-4 rounded-2xl bg-[#ede9fe] dark:bg-purple-950/40 border-2 border-black space-y-1">
                  <span className="text-[10px] font-display font-black uppercase text-purple-800 dark:text-purple-300 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> TEAM CONFIGURATION
                  </span>
                  <p className="font-bold text-xs text-slate-900 dark:text-white">
                    {event.teamSize.min} to {event.teamSize.max} Members per Team
                  </p>
                </div>
              )}

              <Link href={`/events/${event.slug}/register`} className="block w-full">
                <button
                  className={`w-full py-4 px-6 rounded-2xl font-display font-black text-sm sm:text-base flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all ${
                    event.type === 'hackathon'
                      ? 'bg-[#e11d48] hover:bg-[#be123c] text-white'
                      : 'bg-primary hover:bg-[#e05724] text-white'
                  }`}
                >
                  {event.type === 'hackathon' ? 'Configure & Register Team' : 'Register Now (Free Pass)'}{' '}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Link>

              <p className="text-[11px] font-body text-center text-slate-500 font-semibold">
                Instant digital pass confirmation with QR ticket check-in.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal Dialog */}
      <EventRegistrationModal
        event={event}
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
}
