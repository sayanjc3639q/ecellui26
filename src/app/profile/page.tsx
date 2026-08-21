'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logoutUser } from '@/store/slices/authSlice';
import { clearDraftRegistration } from '@/store/slices/eventsSlice';
import {
  User,
  Mail,
  GraduationCap,
  Calendar,
  Layers,
  Award,
  Sparkles,
  Rocket,
  Edit3,
  CheckCircle2,
  CalendarDays,
  FileText,
  Clock,
  ExternalLink,
  ShieldCheck,
  Save,
  Plus,
  ArrowRight,
  LogOut,
} from 'lucide-react';
import { MemphisButton } from '@/components/common/MemphisButton';
import { MemphisCard } from '@/components/common/MemphisCard';

interface RegisteredEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  status: 'Confirmed' | 'Attended' | 'Pending';
  badgeColor: string;
}

interface PitchApplication {
  id: string;
  startupName: string;
  stage: string;
  submittedOn: string;
  reviewStatus: 'Under Review' | 'Shortlisted' | 'Selected';
  statusColor: string;
}

const initialRegisteredEvents: RegisteredEvent[] = [
  {
    id: '1',
    title: 'E-Summit 2024',
    category: 'Summit',
    date: 'Oct 15, 2024',
    time: '10:00 AM',
    location: 'Main Auditorium',
    status: 'Confirmed',
    badgeColor: 'bg-[#0052cc] text-white',
  },
  {
    id: '2',
    title: 'Lean Startup Workshop',
    category: 'Workshop',
    date: 'Nov 02, 2024',
    time: '2:30 PM',
    location: 'Room 304',
    status: 'Confirmed',
    badgeColor: 'bg-amber-400 text-slate-900',
  },
];

const initialPitches: PitchApplication[] = [
  {
    id: '1',
    startupName: 'NexusAI Health',
    stage: 'Prototype / MVP',
    submittedOn: 'Aug 18, 2024',
    reviewStatus: 'Shortlisted',
    statusColor: 'bg-emerald-500 text-white',
  },
  {
    id: '2',
    startupName: 'CampusCart QuickCommerce',
    stage: 'Idea Stage',
    submittedOn: 'Jul 29, 2024',
    reviewStatus: 'Under Review',
    statusColor: 'bg-amber-400 text-slate-900',
  },
];

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const authUser = useAppSelector((state) => state.auth.user);
  const draft = useAppSelector((state) => state.events.draftRegistration);

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'pitches'>('overview');

  // User Profile State
  const [userProfile, setUserProfile] = useState({
    name: authUser?.name || 'Aryan Raj',
    role: 'Student Entrepreneur',
    email: authUser?.email || 'aryan.raj@hithaldia.ac.in',
    department: authUser?.department || 'Computer Science & Engineering (CSE)',
    batch: authUser?.batch || '2022-2026',
    year: authUser?.year || '3rd Year',
    memberId: 'HIT-EC-2024-042',
    bio: 'Passionate full-stack developer & aspiring founder exploring AI health-tech applications.',
    avatar: authUser?.avatar || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
    badges: ['Founder Track', 'E-Summit Participant', 'Hackathon Finalist'],
  });

  useEffect(() => {
    if (authUser) {
      setUserProfile((prev) => ({
        ...prev,
        name: authUser.name || prev.name,
        email: authUser.email || prev.email,
        department: authUser.department || prev.department,
        batch: authUser.batch || prev.batch,
        year: authUser.year || prev.year,
        avatar: authUser.avatar || prev.avatar,
      }));
    }
  }, [authUser]);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    alert('Profile information updated successfully!');
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#faf8f5] dark:bg-[#121418] text-slate-900 dark:text-white relative overflow-hidden">
      {/* Background Textures */}
      <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-30 z-0" />
      <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-20 z-0" />

      {/* Floating Memphis Decor */}
      <div className="hidden lg:block absolute -top-10 -left-10 w-48 h-48 bg-peach rounded-full border-4 border-black pointer-events-none z-0 shadow-[6px_6px_0px_0px_#000] opacity-50" />
      <div className="hidden lg:block absolute top-1/3 -right-8 w-40 h-40 bg-mint rounded-3xl border-4 border-black rotate-12 pointer-events-none z-0 shadow-[6px_6px_0px_0px_#000] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* 1. TOP PROFILE HEADER BANNER */}
        <div className="bg-white dark:bg-slate-900 rounded-[36px] border-4 border-black dark:border-white p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] relative overflow-hidden">
          {/* Header Colored Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-primary via-secondary to-mint border-b-3 border-black" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 pt-4">
            {/* Avatar with Memphis Frame */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl border-4 border-black dark:border-white overflow-hidden shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] bg-slate-100">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-mint text-slate-950 px-2.5 py-1 rounded-full border-2 border-black font-display font-black text-[11px] shadow-[2px_2px_0px_0px_#000] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Verified
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-[#FFD166] text-slate-950 font-display font-black text-xs rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000] mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-primary" /> MEMBER ID: {userProfile.memberId}
                  </div>
                  <h1 className="font-display font-black text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight leading-tight">
                    {userProfile.name}
                  </h1>
                </div>

                {/* Profile Actions: Edit & Logout */}
                <div className="flex items-center justify-center sm:justify-start gap-2.5 self-center sm:self-auto">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-900 dark:text-white font-display font-black text-xs sm:text-sm border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] active:translate-y-0.5 transition-all"
                  >
                    {isEditing ? <Save className="w-4 h-4 text-primary" /> : <Edit3 className="w-4 h-4" />}
                    {isEditing ? 'Done' : 'Edit Profile'}
                  </button>

                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#fee2e2] hover:bg-[#fecaca] text-[#dc2626] font-display font-black text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 transition-all"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              </div>

              <p className="font-body text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
                {userProfile.bio}
              </p>

              {/* Badges / Chips */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2">
                {userProfile.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-peach/40 dark:bg-slate-800 text-slate-900 dark:text-white font-display font-black text-xs rounded-full border border-black dark:border-white"
                  >
                    ✦ {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. NAVIGATION TABS */}
        <div className="flex justify-center sm:justify-start gap-3 border-b-3 border-black dark:border-white pb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2.5 rounded-full font-display font-black text-xs sm:text-sm border-2 border-black dark:border-white transition-all ${
              activeTab === 'overview'
                ? 'bg-primary text-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] -translate-y-0.5'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            Academic & Profile
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-2.5 rounded-full font-display font-black text-xs sm:text-sm border-2 border-black dark:border-white transition-all ${
              activeTab === 'events'
                ? 'bg-secondary text-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] -translate-y-0.5'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            Registered Events ({initialRegisteredEvents.length})
          </button>
          <button
            onClick={() => setActiveTab('pitches')}
            className={`px-6 py-2.5 rounded-full font-display font-black text-xs sm:text-sm border-2 border-black dark:border-white transition-all ${
              activeTab === 'pitches'
                ? 'bg-[#eab308] text-slate-950 shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] -translate-y-0.5'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            Pitch Applications ({initialPitches.length})
          </button>
        </div>

        {/* 3. TAB 1: ACADEMIC & PROFILE DETAILS */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Editable / Display Academic Information */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[32px] border-4 border-black dark:border-white p-7 sm:p-9 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b-2 border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="font-display font-black text-2xl text-slate-950 dark:text-white">
                  Academic Details
                </h3>
              </div>

              {isEditing ? (
                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={userProfile.name}
                        onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                        className="w-full p-2.5 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 font-bold text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={userProfile.email}
                        onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                        className="w-full p-2.5 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 font-bold text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                      Department
                    </label>
                    <input
                      type="text"
                      value={userProfile.department}
                      onChange={(e) => setUserProfile({ ...userProfile, department: e.target.value })}
                      className="w-full p-2.5 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 font-bold text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Batch
                      </label>
                      <input
                        type="text"
                        value={userProfile.batch}
                        onChange={(e) => setUserProfile({ ...userProfile, batch: e.target.value })}
                        className="w-full p-2.5 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 font-bold text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                        Year of Study
                      </label>
                      <input
                        type="text"
                        value={userProfile.year}
                        onChange={(e) => setUserProfile({ ...userProfile, year: e.target.value })}
                        className="w-full p-2.5 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 font-bold text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-display font-black uppercase text-slate-700 dark:text-slate-300">
                      Bio / Interests
                    </label>
                    <textarea
                      rows={3}
                      value={userProfile.bio}
                      onChange={(e) => setUserProfile({ ...userProfile, bio: e.target.value })}
                      className="w-full p-2.5 rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 font-bold text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-6 rounded-xl bg-primary text-white font-display font-black text-sm border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5"
                  >
                    Save Changes
                  </button>
                </form>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-body">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border-2 border-black dark:border-white space-y-1">
                    <span className="text-[11px] font-display font-black text-slate-400 uppercase tracking-wider">
                      DEPARTMENT
                    </span>
                    <p className="font-bold text-base text-slate-900 dark:text-white">
                      {userProfile.department}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border-2 border-black dark:border-white space-y-1">
                    <span className="text-[11px] font-display font-black text-slate-400 uppercase tracking-wider">
                      BATCH & STUDY YEAR
                    </span>
                    <p className="font-bold text-base text-slate-900 dark:text-white">
                      Batch {userProfile.batch} • {userProfile.year}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border-2 border-black dark:border-white space-y-1">
                    <span className="text-[11px] font-display font-black text-slate-400 uppercase tracking-wider">
                      EMAIL ADDRESS
                    </span>
                    <p className="font-bold text-base text-slate-900 dark:text-white">
                      {userProfile.email}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border-2 border-black dark:border-white space-y-1">
                    <span className="text-[11px] font-display font-black text-slate-400 uppercase tracking-wider">
                      CAMPUS AFFILIATION
                    </span>
                    <p className="font-bold text-base text-slate-900 dark:text-white">
                      Haldia Institute of Technology
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right 1 Col: Quick Startup & Event Actions */}
            <div className="space-y-6">
              <div className="bg-[#fecdd3] dark:bg-pink-950/40 rounded-[32px] border-4 border-black dark:border-white p-6 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 border-2 border-black flex items-center justify-center font-black">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display font-black text-2xl text-slate-950 dark:text-white">
                  Got an Idea?
                </h4>
                <p className="font-body text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                  Pitch your innovation to E-Cell HIT Haldia mentors to access grant funding, incubation, and VC networking.
                </p>
                <Link href="/idea-pitching" className="block pt-2">
                  <button className="w-full py-2.5 px-4 rounded-xl bg-primary text-white font-display font-black text-xs flex items-center justify-center gap-2 border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5">
                    Submit New Pitch <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>

              <div className="bg-[#DCE7FD] dark:bg-blue-950/40 rounded-[32px] border-4 border-black dark:border-white p-6 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 border-2 border-black flex items-center justify-center font-black">
                  <CalendarDays className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="font-display font-black text-2xl text-slate-950 dark:text-white">
                  Join Events
                </h4>
                <p className="font-body text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                  Explore upcoming workshops, hackathons, and founder bootcamps organized on campus.
                </p>
                <Link href="/events" className="block pt-2">
                  <button className="w-full py-2.5 px-4 rounded-xl bg-secondary text-white font-display font-black text-xs flex items-center justify-center gap-2 border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5">
                    Browse All Events <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 4. TAB 2: REGISTERED EVENTS */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            {/* Unfinished Registration Draft Banner if Present */}
            {draft && (
              <div className="p-6 rounded-[32px] bg-[#fef08a] dark:bg-amber-950/60 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 text-[10px] font-display font-black bg-primary text-white rounded-full border border-black uppercase">
                      Draft In Progress
                    </span>
                    <span className="text-xs font-bold text-slate-600 dark:text-amber-200">
                      Saved {draft.lastSavedAt}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-xl sm:text-2xl text-slate-950 dark:text-white">
                    {draft.eventTitle}
                  </h4>
                  <p className="text-xs font-body text-slate-700 dark:text-slate-300">
                    You have an incomplete registration. Your progress is saved and ready to resume.
                  </p>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <Link href={`/events/${draft.eventSlug}/register`} className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-primary text-white font-display font-black text-xs flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5">
                      Resume Registration <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                  <button
                    onClick={() => dispatch(clearDraftRegistration())}
                    className="py-2.5 px-3 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-display font-black text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5"
                    title="Discard Draft"
                  >
                    Discard
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initialRegisteredEvents.map((ev) => (
                <div
                  key={ev.id}
                  className="bg-white dark:bg-slate-900 rounded-[32px] border-4 border-black dark:border-white p-6 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-4 flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 text-xs font-display font-black rounded-full border-2 border-black ${ev.badgeColor}`}>
                        {ev.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-display font-black text-emerald-600 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {ev.status}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl text-slate-950 dark:text-white">
                      {ev.title}
                    </h3>

                    <div className="space-y-1 text-xs font-bold text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-primary" /> {ev.date} at {ev.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-secondary" /> {ev.location}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link href="/events">
                      <button className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-900 dark:text-white font-display font-black text-xs flex items-center justify-center gap-2 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]">
                        View Event Pass <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. TAB 3: PITCH APPLICATIONS */}
        {activeTab === 'pitches' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-display font-black text-2xl text-slate-950 dark:text-white">
                Your Submitted Pitch Decks
              </h3>
              <Link href="/idea-pitching">
                <button className="py-2.5 px-5 rounded-full bg-primary text-white font-display font-black text-xs flex items-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5">
                  <Plus className="w-4 h-4" /> New Pitch
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initialPitches.map((pitch) => (
                <div
                  key={pitch.id}
                  className="bg-white dark:bg-slate-900 rounded-[32px] border-4 border-black dark:border-white p-6 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-500">
                        Submitted: {pitch.submittedOn}
                      </span>
                      <span className={`px-3 py-1 text-xs font-display font-black rounded-full border-2 border-black ${pitch.statusColor}`}>
                        {pitch.reviewStatus}
                      </span>
                    </div>

                    <h4 className="font-display font-black text-2xl text-slate-950 dark:text-white">
                      {pitch.startupName}
                    </h4>

                    <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      Development Stage: <span className="text-primary font-black">{pitch.stage}</span>
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link href="/idea-pitching">
                      <button className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-900 dark:text-white font-display font-black text-xs flex items-center justify-center gap-2 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]">
                        Manage Pitch & Feedback <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
