'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import {
  ArrowLeft,
  X,
  Sparkles,
  Users,
  UserPlus,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  Calendar,
  Clock,
  MapPin,
  Save,
  AlertCircle,
  HelpCircle,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
import { eventsData } from '@/data/eventsData';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  saveDraftRegistration,
  completeRegistration,
  clearDraftRegistration,
} from '@/store/slices/eventsSlice';

export default function DedicatedEventRegistrationPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const slug = (params?.slug as string) || 'innovation-challenge';
  const event = eventsData[slug] || eventsData['innovation-challenge'];

  const authUser = useAppSelector((state) => state.auth.user);
  const draft = useAppSelector((state) => state.events.draftRegistration);

  // Workshop / Seminar Direct Form State
  const [directForm, setDirectForm] = useState({
    name: authUser?.name || '',
    email: authUser?.email || '',
    department: authUser?.department || 'Computer Science & Engineering (CSE)',
    year: authUser?.year || '3rd Year',
    phone: '',
    expectations: '',
  });

  // Hackathon Multi-Step State
  const [hackathonStep, setHackathonStep] = useState<
    'individual' | 'team-choice' | 'create-team' | 'join-team' | 'success'
  >('individual');

  const [individualData, setIndividualData] = useState({
    name: authUser?.name || '',
    email: authUser?.email || '',
    college: 'Haldia Institute of Technology',
    github: '',
    role: 'Full Stack Developer',
  });

  const [teamData, setTeamData] = useState({
    teamName: '',
    track: 'AI & Healthcare',
    inviteEmails: ['', ''],
  });

  const [teamCodeInput, setTeamCodeInput] = useState('');
  const [generatedTeamCode, setGeneratedTeamCode] = useState('HIT-HACK-8842');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [saveBannerVisible, setSaveBannerVisible] = useState(false);

  // Restore existing draft if for this event
  useEffect(() => {
    if (draft && draft.eventSlug === slug) {
      if (draft.eventType !== 'hackathon' && draft.directForm) {
        setDirectForm(draft.directForm);
      } else if (draft.eventType === 'hackathon' && draft.hackathonForm) {
        setIndividualData({
          name: draft.hackathonForm.name || '',
          email: draft.hackathonForm.email || '',
          college: draft.hackathonForm.college || 'Haldia Institute of Technology',
          github: draft.hackathonForm.github || '',
          role: draft.hackathonForm.role || 'Full Stack Developer',
        });
        if (draft.hackathonForm.teamName) {
          setTeamData({
            teamName: draft.hackathonForm.teamName,
            track: draft.hackathonForm.track || 'AI & Healthcare',
            inviteEmails: draft.hackathonForm.inviteEmails || ['', ''],
          });
        }
        if (draft.step && draft.step !== 'direct') {
          setHackathonStep(draft.step as any);
        }
      }
    }
  }, [draft, slug]);

  const handleSaveAndExit = () => {
    dispatch(
      saveDraftRegistration({
        eventSlug: slug,
        eventTitle: event.title,
        eventType: event.type,
        step: (event.type === 'hackathon' && hackathonStep !== 'success') ? hackathonStep : 'direct',
        lastSavedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        directForm: event.type !== 'hackathon' ? directForm : undefined,
        hackathonForm: event.type === 'hackathon' ? {
          ...individualData,
          teamName: teamData.teamName,
          track: teamData.track,
          inviteEmails: teamData.inviteEmails,
          teamCode: generatedTeamCode,
        } : undefined,
      })
    );
    setSaveBannerVisible(true);
    setTimeout(() => {
      router.push(`/events/${slug}`);
    }, 800);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedTeamCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      dispatch(completeRegistration(slug));
      setSubmitted(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleIndividualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auto-save draft on step change
    dispatch(
      saveDraftRegistration({
        eventSlug: slug,
        eventTitle: event.title,
        eventType: event.type,
        step: 'team-choice',
        lastSavedAt: 'Just now',
        hackathonForm: { ...individualData },
      })
    );
    setHackathonStep('team-choice');
  };

  const handleCreateTeamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const randomCode = `HIT-HACK-${Math.floor(1000 + Math.random() * 9000)}`;
      setGeneratedTeamCode(randomCode);
      dispatch(completeRegistration(slug));
      setSubmitted(false);
      setHackathonStep('success');
    }, 600);
  };

  const handleJoinTeamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      dispatch(completeRegistration(slug));
      setSubmitted(false);
      setHackathonStep('success');
    }, 600);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#faf8f5] dark:bg-[#121418] text-slate-900 dark:text-white relative overflow-hidden">
      {/* Background Textures */}
      <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-30 z-0" />
      <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-20 z-0" />

      {/* Floating Memphis Decor */}
      <div className="hidden lg:block absolute -top-10 -left-10 w-52 h-52 bg-[#fecdd3] rounded-full border-4 border-black pointer-events-none z-0 shadow-[6px_6px_0px_0px_#000] opacity-40" />
      <div className="hidden lg:block absolute top-1/2 -right-8 w-44 h-44 bg-[#DCE7FD] rounded-3xl border-4 border-black rotate-12 pointer-events-none z-0 shadow-[6px_6px_0px_0px_#000] opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        {/* Top Actions: Back & Save & Exit */}
        <div className="flex items-center justify-between">
          <Link
            href={`/events/${slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border-2 border-black dark:border-white font-display font-black text-xs shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] hover:-translate-y-0.5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Event Overview
          </Link>

          <button
            onClick={handleSaveAndExit}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffedd5] hover:bg-[#fed7aa] text-[#9a3412] rounded-full border-2 border-black font-display font-black text-xs shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 transition-all"
          >
            <Save className="w-4 h-4" /> Save & Continue Later
          </button>
        </div>

        {/* Save Notification Toast */}
        {saveBannerVisible && (
          <div className="p-3 bg-emerald-100 text-emerald-800 border-2 border-black rounded-2xl flex items-center gap-2 text-xs font-bold shadow-[3px_3px_0px_0px_#000] animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Draft registration progress saved! You can resume anytime from the Homepage or Profile section.</span>
          </div>
        )}

        {/* MAIN REGISTRATION CARD CONTAINER */}
        <div className="bg-white dark:bg-slate-900 rounded-[36px] border-4 border-black dark:border-white p-6 sm:p-10 shadow-[10px_10px_0px_0px_#000] dark:shadow-[10px_10px_0px_0px_#fff] space-y-6">
          {/* Header Banner Strip */}
          <div className="border-b-3 border-black dark:border-white pb-6 space-y-2 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className={`inline-flex items-center gap-1.5 px-3.5 py-0.5 text-[10px] font-display font-black uppercase tracking-wider rounded-full border border-black ${event.badgeBg} mb-2`}>
                {event.type === 'hackathon' ? (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5" /> 48-Hour Hackathon Registration
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" /> Direct Event Pass Registration
                  </>
                )}
              </span>
              <h1 className="font-display font-black text-2xl sm:text-4xl text-slate-950 dark:text-white tracking-tight leading-tight">
                {event.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-body font-semibold text-slate-600 dark:text-slate-300 mt-2">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" /> {event.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-secondary" /> {event.venue}
                </span>
              </div>
            </div>

            {/* Auto-Save Status Pill */}
            <div className="self-center sm:self-auto shrink-0 flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border-2 border-black text-[11px] font-display font-black">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Auto-Save Enabled
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CASE 1: WORKSHOP & SEMINAR REGISTRATION (DIRECT PROCESS)                   */}
          {/* ========================================================================= */}
          {event.type !== 'hackathon' && (
            <div>
              {isSuccess ? (
                <div className="text-center py-10 space-y-5 font-body">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 border-4 border-black mx-auto flex items-center justify-center shadow-[4px_4px_0px_0px_#000]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-black text-3xl text-slate-950 dark:text-white">
                    Registration Confirmed! 🎉
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-semibold">
                    Your delegate pass has been issued for <strong>{directForm.name || 'you'}</strong>. A confirmation email with QR entry ticket has been dispatched to <strong>{directForm.email}</strong>.
                  </p>

                  <div className="max-w-md mx-auto p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border-3 border-black space-y-2 text-left text-xs">
                    <p className="font-bold text-slate-900 dark:text-white">📍 Venue: {event.venue}</p>
                    <p className="font-bold text-slate-900 dark:text-white">⏰ Time: {event.time}</p>
                    <p className="font-bold text-emerald-600">✦ Entry Pass: Confirmed (Free Pass Issued)</p>
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <Link href="/profile">
                      <button className="py-3 px-6 rounded-xl bg-primary text-white font-display font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5">
                        View in Profile Passports
                      </button>
                    </Link>
                    <Link href="/events">
                      <button className="py-3 px-6 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-display font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5">
                        Browse More Events
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDirectSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={directForm.name}
                        onChange={(e) => setDirectForm({ ...directForm, name: e.target.value })}
                        placeholder="e.g. Aryan Raj"
                        className="w-full p-3 text-xs sm:text-sm font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={directForm.email}
                        onChange={(e) => setDirectForm({ ...directForm, email: e.target.value })}
                        placeholder="student@hithaldia.ac.in"
                        className="w-full p-3 text-xs sm:text-sm font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Department
                      </label>
                      <input
                        type="text"
                        required
                        value={directForm.department}
                        onChange={(e) => setDirectForm({ ...directForm, department: e.target.value })}
                        className="w-full p-3 text-xs sm:text-sm font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={directForm.phone}
                        onChange={(e) => setDirectForm({ ...directForm, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full p-3 text-xs sm:text-sm font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                      What do you hope to learn or achieve at this session?
                    </label>
                    <textarea
                      rows={3}
                      value={directForm.expectations}
                      onChange={(e) => setDirectForm({ ...directForm, expectations: e.target.value })}
                      placeholder="e.g. Seeking mentorship to validate my health-tech MVP concept..."
                      className="w-full p-3 text-xs sm:text-sm font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitted}
                      className="w-full py-4 px-6 rounded-2xl bg-primary hover:bg-[#e05724] text-white font-display font-black text-sm sm:text-base flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all"
                    >
                      {submitted ? 'Generating Pass...' : 'Confirm Registration & Issue Pass'}{' '}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* CASE 2: HACKATHON MULTI-STEP TEAM REGISTRATION PROCESS                   */}
          {/* ========================================================================= */}
          {event.type === 'hackathon' && (
            <div className="space-y-6">
              {/* Stepper Indicator */}
              <div className="flex items-center justify-center gap-2 sm:gap-4 py-2 border-b-2 border-slate-100 dark:border-slate-800">
                <span className={`px-4 py-1 rounded-full text-xs font-display font-black border-2 border-black ${hackathonStep === 'individual' ? 'bg-primary text-white shadow-[2px_2px_0px_0px_#000]' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                  1. Hacker Identity
                </span>
                <span className="text-slate-400 font-bold">→</span>
                <span className={`px-4 py-1 rounded-full text-xs font-display font-black border-2 border-black ${hackathonStep.includes('team') ? 'bg-secondary text-white shadow-[2px_2px_0px_0px_#000]' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                  2. Team Configuration
                </span>
                <span className="text-slate-400 font-bold">→</span>
                <span className={`px-4 py-1 rounded-full text-xs font-display font-black border-2 border-black ${hackathonStep === 'success' ? 'bg-emerald-500 text-white shadow-[2px_2px_0px_0px_#000]' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                  3. Confirmed
                </span>
              </div>

              {/* STEP 1: INDIVIDUAL REGISTRATION */}
              {hackathonStep === 'individual' && (
                <form onSubmit={handleIndividualSubmit} className="space-y-4">
                  <div className="p-4 bg-[#e0e7ff] dark:bg-blue-950/40 rounded-2xl border-3 border-black text-xs font-body text-slate-800 dark:text-slate-200 leading-relaxed flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>
                      <strong>Step 1 of 2:</strong> Register your individual hacker identity. In the next step, you will configure your team (create a new team or enter a team passcode).
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Hacker Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={individualData.name}
                        onChange={(e) => setIndividualData({ ...individualData, name: e.target.value })}
                        placeholder="e.g. Sneha Kapoor"
                        className="w-full p-3 text-xs sm:text-sm font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={individualData.email}
                        onChange={(e) => setIndividualData({ ...individualData, email: e.target.value })}
                        placeholder="sneha@hithaldia.ac.in"
                        className="w-full p-3 text-xs sm:text-sm font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Primary Role
                      </label>
                      <select
                        value={individualData.role}
                        onChange={(e) => setIndividualData({ ...individualData, role: e.target.value })}
                        className="w-full p-3 text-xs sm:text-sm font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000]"
                      >
                        <option value="Full Stack Developer">Full Stack Developer</option>
                        <option value="AI / ML Engineer">AI / ML Engineer</option>
                        <option value="Frontend & UI/UX Designer">Frontend & UI/UX Designer</option>
                        <option value="Mobile App Developer">Mobile App Developer</option>
                        <option value="Blockchain & Web3 Dev">Blockchain & Web3 Dev</option>
                        <option value="Pitch & Business Lead">Pitch & Business Lead</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        GitHub / Portfolio URL
                      </label>
                      <input
                        type="url"
                        value={individualData.github}
                        onChange={(e) => setIndividualData({ ...individualData, github: e.target.value })}
                        placeholder="https://github.com/username"
                        className="w-full p-3 text-xs sm:text-sm font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl bg-secondary hover:bg-[#347cd3] text-white font-display font-black text-sm sm:text-base flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] active:translate-y-0.5 transition-all"
                    >
                      Proceed to Team Setup <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2: TEAM CHOICE */}
              {hackathonStep === 'team-choice' && (
                <div className="space-y-6 text-center py-4">
                  <h3 className="font-display font-black text-2xl text-slate-950 dark:text-white">
                    Select Your Participation Method
                  </h3>
                  <p className="text-xs sm:text-sm font-body text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
                    Hackathon teams range from 2 to 4 members. You can create a team to lead it or join an already created team using an invite code.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div
                      onClick={() => setHackathonStep('create-team')}
                      className="p-6 rounded-[28px] bg-white dark:bg-slate-800 border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1.5 cursor-pointer transition-all space-y-3 text-left group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#ffedd5] text-[#9a3412] border-2 border-black flex items-center justify-center font-black">
                        <Users className="w-6 h-6" />
                      </div>
                      <h4 className="font-display font-black text-xl text-slate-950 dark:text-white">
                        Create New Team
                      </h4>
                      <p className="text-xs font-body text-slate-600 dark:text-slate-300 leading-relaxed">
                        Become team lead, specify your startup/project title, select problem track, and receive a shareable team code.
                      </p>
                    </div>

                    <div
                      onClick={() => setHackathonStep('join-team')}
                      className="p-6 rounded-[28px] bg-white dark:bg-slate-800 border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1.5 cursor-pointer transition-all space-y-3 text-left group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#dbeafe] text-[#1e40af] border-2 border-black flex items-center justify-center font-black">
                        <UserPlus className="w-6 h-6" />
                      </div>
                      <h4 className="font-display font-black text-xl text-slate-950 dark:text-white">
                        Join Existing Team
                      </h4>
                      <p className="text-xs font-body text-slate-600 dark:text-slate-300 leading-relaxed">
                        Have a passcode from your team leader? Enter your team code to instantly register and sync rosters.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setHackathonStep('individual')}
                    className="text-xs font-display font-black text-slate-500 hover:text-slate-900 dark:hover:text-white underline"
                  >
                    ← Back to Hacker Details
                  </button>
                </div>
              )}

              {/* STEP 2A: CREATE TEAM FORM */}
              {hackathonStep === 'create-team' && (
                <form onSubmit={handleCreateTeamSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                      Team Name
                    </label>
                    <input
                      type="text"
                      required
                      value={teamData.teamName}
                      onChange={(e) => setTeamData({ ...teamData, teamName: e.target.value })}
                      placeholder="e.g. ByteCraft Founders"
                      className="w-full p-3 text-xs sm:text-sm font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                      Preferred Innovation Track
                    </label>
                    <select
                      value={teamData.track}
                      onChange={(e) => setTeamData({ ...teamData, track: e.target.value })}
                      className="w-full p-3 text-xs sm:text-sm font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                    >
                      <option value="AI & Healthcare">AI & Healthcare</option>
                      <option value="CleanTech & Sustainability">CleanTech & Sustainability</option>
                      <option value="Web3 & FinTech">Web3 & FinTech</option>
                      <option value="Smart Campus & Logistics">Smart Campus & Logistics</option>
                      <option value="Open Innovation Track">Open Innovation Track</option>
                    </select>
                  </div>

                  {/* Member Invite Emails */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                      Invite Teammates by Email (Optional)
                    </label>
                    <div className="space-y-2">
                      <input
                        type="email"
                        value={teamData.inviteEmails[0]}
                        onChange={(e) => {
                          const emails = [...teamData.inviteEmails];
                          emails[0] = e.target.value;
                          setTeamData({ ...teamData, inviteEmails: emails });
                        }}
                        placeholder="teammate1@hithaldia.ac.in"
                        className="w-full p-2.5 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                      <input
                        type="email"
                        value={teamData.inviteEmails[1]}
                        onChange={(e) => {
                          const emails = [...teamData.inviteEmails];
                          emails[1] = e.target.value;
                          setTeamData({ ...teamData, inviteEmails: emails });
                        }}
                        placeholder="teammate2@hithaldia.ac.in"
                        className="w-full p-2.5 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setHackathonStep('team-choice')}
                      className="w-1/3 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-display font-black text-xs border-2 border-black"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitted}
                      className="w-2/3 py-4 px-6 rounded-2xl bg-primary hover:bg-[#e05724] text-white font-display font-black text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] active:translate-y-0.5 transition-all"
                    >
                      {submitted ? 'Locking In Team...' : 'Create Team & Generate Passcode'}{' '}
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2B: JOIN TEAM FORM */}
              {hackathonStep === 'join-team' && (
                <form onSubmit={handleJoinTeamSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                      Enter Team Invite Code
                    </label>
                    <input
                      type="text"
                      required
                      value={teamCodeInput}
                      onChange={(e) => setTeamCodeInput(e.target.value.toUpperCase())}
                      placeholder="e.g. HIT-HACK-4921"
                      className="w-full p-3.5 text-base uppercase tracking-widest font-mono font-black rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[3px_3px_0px_0px_#000]"
                    />
                  </div>

                  <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-2xl border-2 border-black text-xs font-body text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Ask your team leader for their unique 8-character team passcode to join their official roster.</span>
                  </div>

                  <div className="flex gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setHackathonStep('team-choice')}
                      className="w-1/3 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-display font-black text-xs border-2 border-black"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitted}
                      className="w-2/3 py-4 px-6 rounded-2xl bg-secondary hover:bg-[#347cd3] text-white font-display font-black text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] active:translate-y-0.5 transition-all"
                    >
                      {submitted ? 'Verifying Code...' : 'Join Team & Confirm Registration'}{' '}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: HACKATHON CONFIRMED SUCCESS */}
              {hackathonStep === 'success' && (
                <div className="text-center py-8 space-y-6 font-body">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 border-4 border-black mx-auto flex items-center justify-center shadow-[4px_4px_0px_0px_#000]">
                    <Rocket className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-black text-3xl text-slate-950 dark:text-white">
                    Team Registered for Hackathon! 🚀
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-semibold">
                    Registration for <strong>{teamData.teamName || 'Your Team'}</strong> is locked in for the HIT Grand Hackathon!
                  </p>

                  {/* Shareable Team Code Box */}
                  <div className="max-w-md mx-auto p-5 bg-[#fef08a] dark:bg-amber-950/60 rounded-3xl border-3 border-black shadow-[5px_5px_0px_0px_#000] space-y-3">
                    <span className="text-[10px] font-display font-black uppercase tracking-wider text-slate-800 dark:text-amber-200">
                      SHARE THIS TEAM INVITE CODE WITH MEMBERS
                    </span>
                    <div className="flex items-center justify-center gap-3">
                      <span className="font-mono font-black text-2xl text-slate-950 dark:text-white tracking-widest">
                        {generatedTeamCode}
                      </span>
                      <button
                        onClick={handleCopyCode}
                        className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-black font-display font-black text-xs flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied' : 'Copy Code'}
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <Link href="/profile">
                      <button className="py-3 px-6 rounded-xl bg-primary text-white font-display font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5">
                        View Team in Profile
                      </button>
                    </Link>
                    <Link href="/events">
                      <button className="py-3 px-6 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-display font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5">
                        Back to Events
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
