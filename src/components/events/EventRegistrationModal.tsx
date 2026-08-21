'use client';

import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Users,
  UserPlus,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Rocket,
  Layers,
  Send,
  AlertCircle,
} from 'lucide-react';
import { EventDetail } from '@/data/eventsData';
import { useAppSelector } from '@/store/hooks';

interface EventRegistrationModalProps {
  event: EventDetail;
  isOpen: boolean;
  onClose: () => void;
}

export const EventRegistrationModal: React.FC<EventRegistrationModalProps> = ({
  event,
  isOpen,
  onClose,
}) => {
  const authUser = useAppSelector((state) => state.auth.user);

  // Workshop / Seminar Direct Form State
  const [directForm, setDirectForm] = useState({
    name: authUser?.name || '',
    email: authUser?.email || '',
    department: authUser?.department || 'Computer Science & Engineering (CSE)',
    year: authUser?.year || '3rd Year',
    phone: '',
    expectations: '',
  });

  // Hackathon Step State ('individual' | 'team-choice' | 'create-team' | 'join-team' | 'success')
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

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedTeamCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleIndividualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHackathonStep('team-choice');
  };

  const handleCreateTeamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const randomCode = `HIT-HACK-${Math.floor(1000 + Math.random() * 9000)}`;
      setGeneratedTeamCode(randomCode);
      setSubmitted(false);
      setHackathonStep('success');
    }, 600);
  };

  const handleJoinTeamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setHackathonStep('success');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[220] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 z-0"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-xl bg-white dark:bg-slate-900 border-4 border-black dark:border-white rounded-[32px] p-5 sm:p-8 shadow-[10px_10px_0px_0px_#000] dark:shadow-[10px_10px_0px_0px_#fff] my-auto max-h-[92vh] flex flex-col justify-between overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 border-2 border-black dark:border-white text-slate-800 dark:text-white transition-colors shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5 z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto pr-1 -mr-1 space-y-4">
          {/* Header */}
          <div className="space-y-1 text-center pr-6">
            <span className={`inline-block px-3.5 py-0.5 text-[10px] font-display font-black uppercase tracking-wider rounded-full border border-black ${event.badgeBg}`}>
              {event.type === 'hackathon' ? '🏆 48-Hour Hackathon Registration' : '⚡ Direct Event Pass Registration'}
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-tight leading-tight">
              {event.title}
            </h3>
            <p className="text-xs font-body text-slate-500 dark:text-slate-400">
              {event.date} • {event.venue}
            </p>
          </div>

          {/* ========================================================================= */}
          {/* CASE 1: WORKSHOP & SEMINAR REGISTRATION (DIRECT PROCESS)                   */}
          {/* ========================================================================= */}
          {event.type !== 'hackathon' && (
            <div>
              {isSuccess ? (
                <div className="text-center py-8 space-y-4 font-body">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border-3 border-black mx-auto flex items-center justify-center shadow-[3px_3px_0px_0px_#000]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-black text-2xl text-slate-950 dark:text-white">
                    Registration Confirmed! 🎉
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your delegate pass has been issued for <strong>{directForm.name || 'you'}</strong>. A confirmation email with QR entry ticket has been dispatched to <strong>{directForm.email}</strong>.
                  </p>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-2 border-black space-y-1 text-left text-xs">
                    <p className="font-bold text-slate-900 dark:text-white">📍 Venue: {event.venue}</p>
                    <p className="font-bold text-slate-900 dark:text-white">⏰ Time: {event.time}</p>
                    <p className="font-bold text-emerald-600">✦ Entry Status: Confirmed (Free Delegate Pass)</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="py-2.5 px-6 rounded-xl bg-primary text-white font-display font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5"
                  >
                    Done & View Pass
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDirectSubmit} className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={directForm.name}
                        onChange={(e) => setDirectForm({ ...directForm, name: e.target.value })}
                        placeholder="e.g. Aryan Raj"
                        className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={directForm.email}
                        onChange={(e) => setDirectForm({ ...directForm, email: e.target.value })}
                        placeholder="student@hithaldia.ac.in"
                        className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Department
                      </label>
                      <input
                        type="text"
                        required
                        value={directForm.department}
                        onChange={(e) => setDirectForm({ ...directForm, department: e.target.value })}
                        className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={directForm.phone}
                        onChange={(e) => setDirectForm({ ...directForm, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                      What do you hope to learn or achieve?
                    </label>
                    <textarea
                      rows={2}
                      value={directForm.expectations}
                      onChange={(e) => setDirectForm({ ...directForm, expectations: e.target.value })}
                      placeholder="e.g. Seeking mentorship to validate my health-tech MVP concept..."
                      className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-[#e05724] text-white font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 transition-all mt-2"
                  >
                    {submitted ? 'Generating Pass...' : 'Confirm Direct Registration'} <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* CASE 2: HACKATHON MULTI-STEP TEAM REGISTRATION PROCESS                   */}
          {/* ========================================================================= */}
          {event.type === 'hackathon' && (
            <div className="space-y-4">
              {/* Stepper Indicator */}
              <div className="flex items-center justify-center gap-2 py-1">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-display font-black border-2 border-black ${hackathonStep === 'individual' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700'}`}>
                  1. Hacker ID
                </span>
                <span className="text-slate-400 font-bold">→</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-display font-black border-2 border-black ${hackathonStep.includes('team') ? 'bg-secondary text-white' : 'bg-slate-100 text-slate-700'}`}>
                  2. Team Config
                </span>
                <span className="text-slate-400 font-bold">→</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-display font-black border-2 border-black ${hackathonStep === 'success' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  3. Confirmed
                </span>
              </div>

              {/* STEP 1: INDIVIDUAL REGISTRATION */}
              {hackathonStep === 'individual' && (
                <form onSubmit={handleIndividualSubmit} className="space-y-3">
                  <div className="p-3 bg-[#e0e7ff] dark:bg-blue-950/40 rounded-xl border-2 border-black text-xs font-body text-slate-800 dark:text-slate-200">
                    💡 <strong>Step 1 of 2:</strong> Register your individual hacker identity before creating or joining a team.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Hacker Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={individualData.name}
                        onChange={(e) => setIndividualData({ ...individualData, name: e.target.value })}
                        placeholder="e.g. Sneha Kapoor"
                        className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={individualData.email}
                        onChange={(e) => setIndividualData({ ...individualData, email: e.target.value })}
                        placeholder="sneha@hithaldia.ac.in"
                        className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Primary Role
                      </label>
                      <select
                        value={individualData.role}
                        onChange={(e) => setIndividualData({ ...individualData, role: e.target.value })}
                        className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000]"
                      >
                        <option value="Full Stack Developer">Full Stack Developer</option>
                        <option value="AI / ML Engineer">AI / ML Engineer</option>
                        <option value="Frontend & UI/UX Designer">Frontend & UI/UX Designer</option>
                        <option value="Mobile App Developer">Mobile App Developer</option>
                        <option value="Blockchain & Web3 Dev">Blockchain & Web3 Dev</option>
                        <option value="Pitch & Business Lead">Pitch & Business Lead</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        GitHub / Portfolio URL
                      </label>
                      <input
                        type="url"
                        value={individualData.github}
                        onChange={(e) => setIndividualData({ ...individualData, github: e.target.value })}
                        placeholder="https://github.com/username"
                        className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-secondary hover:bg-[#347cd3] text-white font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 transition-all mt-2"
                  >
                    Proceed to Team Setup <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* STEP 2: TEAM CHOICE (CREATE OR JOIN) */}
              {hackathonStep === 'team-choice' && (
                <div className="space-y-4 text-center py-2">
                  <h4 className="font-display font-black text-xl text-slate-950 dark:text-white">
                    How would you like to participate?
                  </h4>
                  <p className="text-xs font-body text-slate-600 dark:text-slate-400">
                    Teams can have 2 to 4 members. You can either create a new team and invite your peers or enter an existing team invite code.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Option A: Create Team */}
                    <div
                      onClick={() => setHackathonStep('create-team')}
                      className="p-5 rounded-2xl bg-white dark:bg-slate-800 border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 cursor-pointer transition-all space-y-2 text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#ffedd5] text-[#9a3412] border-2 border-black flex items-center justify-center font-black">
                        <Users className="w-5 h-5" />
                      </div>
                      <h5 className="font-display font-black text-base text-slate-950 dark:text-white">
                        Create New Team
                      </h5>
                      <p className="text-[11px] font-body text-slate-600 dark:text-slate-400">
                        Become team lead, choose your track, and generate an invite code for members.
                      </p>
                    </div>

                    {/* Option B: Join Team */}
                    <div
                      onClick={() => setHackathonStep('join-team')}
                      className="p-5 rounded-2xl bg-white dark:bg-slate-800 border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 cursor-pointer transition-all space-y-2 text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#dbeafe] text-[#1e40af] border-2 border-black flex items-center justify-center font-black">
                        <UserPlus className="w-5 h-5" />
                      </div>
                      <h5 className="font-display font-black text-base text-slate-950 dark:text-white">
                        Join Existing Team
                      </h5>
                      <p className="text-[11px] font-body text-slate-600 dark:text-slate-400">
                        Have a code from your team leader? Enter the invite code to link your profile.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setHackathonStep('individual')}
                    className="text-xs font-display font-black text-slate-500 hover:text-slate-900 dark:hover:text-white underline pt-2"
                  >
                    ← Back to Hacker Details
                  </button>
                </div>
              )}

              {/* STEP 2A: CREATE TEAM FORM */}
              {hackathonStep === 'create-team' && (
                <form onSubmit={handleCreateTeamSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                      Team Name
                    </label>
                    <input
                      type="text"
                      required
                      value={teamData.teamName}
                      onChange={(e) => setTeamData({ ...teamData, teamName: e.target.value })}
                      placeholder="e.g. ByteCraft Founders"
                      className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                      Preferred Innovation Track
                    </label>
                    <select
                      value={teamData.track}
                      onChange={(e) => setTeamData({ ...teamData, track: e.target.value })}
                      className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000]"
                    >
                      <option value="AI & Healthcare">AI & Healthcare</option>
                      <option value="CleanTech & Sustainability">CleanTech & Sustainability</option>
                      <option value="Web3 & FinTech">Web3 & FinTech</option>
                      <option value="Smart Campus & Logistics">Smart Campus & Logistics</option>
                      <option value="Open Innovation Track">Open Innovation Track</option>
                    </select>
                  </div>

                  {/* Member Invite Emails */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
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
                        className="w-full px-3 py-1.5 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="w-full px-3 py-1.5 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
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
                      className="w-2/3 py-3 px-5 rounded-xl bg-primary hover:bg-[#e05724] text-white font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 transition-all"
                    >
                      {submitted ? 'Generating Team...' : 'Create Team & Get Code'} <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2B: JOIN TEAM FORM */}
              {hackathonStep === 'join-team' && (
                <form onSubmit={handleJoinTeamSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-display font-black uppercase text-slate-700 dark:text-slate-300">
                      Enter Team Invite Code
                    </label>
                    <input
                      type="text"
                      required
                      value={teamCodeInput}
                      onChange={(e) => setTeamCodeInput(e.target.value.toUpperCase())}
                      placeholder="e.g. HIT-HACK-4921"
                      className="w-full px-4 py-2.5 text-sm uppercase tracking-widest font-mono font-black rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000]"
                    />
                  </div>

                  <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border-2 border-black text-xs font-body text-slate-800 dark:text-slate-200">
                    ℹ️ Ask your team leader for the unique 8-character team passcode.
                  </div>

                  <div className="flex gap-2 pt-2">
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
                      className="w-2/3 py-3 px-5 rounded-xl bg-secondary hover:bg-[#347cd3] text-white font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 transition-all"
                    >
                      {submitted ? 'Joining Team...' : 'Join Team & Register'} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: HACKATHON CONFIRMED SUCCESS */}
              {hackathonStep === 'success' && (
                <div className="text-center py-6 space-y-4 font-body">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border-3 border-black mx-auto flex items-center justify-center shadow-[3px_3px_0px_0px_#000]">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-black text-2xl text-slate-950 dark:text-white">
                    You&apos;re In the Hackathon! 🚀
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Team registration for <strong>{teamData.teamName || 'Your Team'}</strong> is locked in for the HIT Grand Hackathon!
                  </p>

                  {/* Shareable Team Code Box */}
                  <div className="p-4 bg-[#fef08a] dark:bg-amber-950/60 rounded-2xl border-3 border-black shadow-[4px_4px_0px_0px_#000] space-y-2">
                    <span className="text-[10px] font-display font-black uppercase tracking-wider text-slate-800 dark:text-amber-200">
                      SHARE THIS TEAM INVITE CODE WITH MEMBERS
                    </span>
                    <div className="flex items-center justify-center gap-3">
                      <span className="font-mono font-black text-xl text-slate-950 dark:text-white tracking-widest">
                        {generatedTeamCode}
                      </span>
                      <button
                        onClick={handleCopyCode}
                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-black font-display font-black text-xs flex items-center gap-1 shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={onClose}
                    className="py-2.5 px-6 rounded-xl bg-primary text-white font-display font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5"
                  >
                    Go to Hackathon Arena
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
