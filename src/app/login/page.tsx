'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Lock,
  User,
  GraduationCap,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles,
  Eye,
  EyeOff,
  CheckCircle2,
} from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { MemphisButton } from '@/components/common/MemphisButton';

const DEPARTMENTS = [
  'Computer Science & Engineering (CSE)',
  'Information Technology (IT)',
  'Electronics & Communication (ECE)',
  'Electrical Engineering (EE)',
  'Mechanical Engineering (ME)',
  'Chemical Engineering (CHE)',
  'Civil Engineering (CE)',
  'Applied Electronics & Instrumentation (AEIE)',
  'Biotechnology (BT)',
  'Master of Computer Applications (MCA)',
  'MBA',
  'Other',
];

const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Alumni / Postgrad'];

export default function LoginPage() {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sign In State
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  // Sign Up State
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    department: '',
    batch: '2022-2026',
    year: '3rd Year',
  });

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, integrate Firebase / NextAuth / Supabase
    setTimeout(() => {
      alert(`Signed in successfully as ${signInData.email}!`);
      setSubmitted(false);
    }, 600);
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert(`Account created successfully for ${signUpData.name} (${signUpData.department}, Batch ${signUpData.batch})!`);
      setSubmitted(false);
      setAuthMode('signin');
    }, 600);
  };

  const handleGoogleAuth = () => {
    alert('Redirecting to Google OAuth authentication...');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#faf8f5] dark:bg-[#121418] text-slate-900 dark:text-white relative overflow-hidden flex items-center justify-center">
      {/* Background Textures & Memphis Floating Shapes */}
      <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-30 z-0" />
      <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-25 z-0" />

      {/* Large Decorative Corner Shapes */}
      <div className="hidden lg:block absolute -top-10 -left-10 w-64 h-64 bg-peach rounded-full border-4 border-black pointer-events-none z-0 shadow-[6px_6px_0px_0px_#000] opacity-70 animate-shape-float-a" />
      <div className="hidden lg:block absolute -bottom-10 -right-10 w-72 h-72 bg-mint rounded-3xl border-4 border-black rotate-12 pointer-events-none z-0 shadow-[8px_8px_0px_0px_#000] opacity-70 animate-shape-float-b" />

      {/* Floating Memphis Elements */}
      <div className="hidden md:block absolute left-14 top-1/2 pointer-events-none z-10 animate-hero-spin-slow opacity-50">
        <svg width="54" height="54" viewBox="0 0 100 100">
          <path d="M50 0 L60 38 L98 50 L60 62 L50 100 L40 62 L2 50 L40 38 Z" fill="#FFD166" stroke="#000" strokeWidth="5"/>
        </svg>
      </div>

      <div className="w-full max-w-xl mx-auto px-4 relative z-20">
        {/* Auth Mode Toggle Pill */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-slate-900 p-1.5 rounded-full border-3 border-black dark:border-white shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] flex gap-2">
            <button
              onClick={() => setAuthMode('signin')}
              className={`px-8 py-2.5 text-sm font-display font-black rounded-full transition-all ${
                authMode === 'signin'
                  ? 'bg-primary text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]'
                  : 'text-slate-700 dark:text-slate-300 hover:text-primary'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthMode('signup')}
              className={`px-8 py-2.5 text-sm font-display font-black rounded-full transition-all ${
                authMode === 'signup'
                  ? 'bg-secondary text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]'
                  : 'text-slate-700 dark:text-slate-300 hover:text-secondary'
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Main Form Container Card */}
        <div className="bg-white dark:bg-slate-900 border-4 border-black dark:border-white rounded-[36px] p-8 sm:p-10 shadow-[10px_10px_0px_0px_#000] dark:shadow-[10px_10px_0px_0px_#fff] relative">
          {/* Header */}
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 bg-amber-300 text-slate-950 font-display font-black text-xs rounded-full border-2 border-black mb-2 shadow-[2px_2px_0px_0px_#000]">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              {authMode === 'signin' ? 'E-CELL HIT HALDIA PORTAL' : 'JOIN THE INNOVATION NETWORK'}
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
              {authMode === 'signin' ? 'Welcome Back!' : 'Create Your Account'}
            </h1>
            <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {authMode === 'signin'
                ? 'Sign in with your email or Google account to continue.'
                : 'Enter your academic & profile details to get full membership access.'}
            </p>
          </div>

          {/* Google OAuth Quick Action */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-900 dark:text-white font-display font-black text-sm flex items-center justify-center gap-3 border-3 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] active:translate-y-0.5 active:shadow-none transition-all mb-6"
          >
            <FcGoogle className="w-5 h-5 shrink-0" />
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-0.5 bg-black/20 dark:bg-white/20" />
            <span className="text-xs font-display font-black uppercase text-slate-500 tracking-wider">
              Or with Email
            </span>
            <div className="flex-1 h-0.5 bg-black/20 dark:bg-white/20" />
          </div>

          {/* 1. SIGN IN FORM */}
          {authMode === 'signin' ? (
            <form onSubmit={handleSignInSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-display font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={signInData.email}
                    onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                    placeholder="student@hithaldia.ac.in"
                    className="w-full pl-11 pr-4 py-3 text-sm font-body font-bold rounded-2xl border-3 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff]"
                  />
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-display font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Password
                  </label>
                  <a href="#" className="text-xs font-display font-black text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={signInData.password}
                    onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                    placeholder="••••••••••••"
                    className="w-full pl-11 pr-11 py-3 text-sm font-body font-bold rounded-2xl border-3 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff]"
                  />
                  <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-4 px-6 rounded-2xl bg-primary hover:bg-[#e05724] text-white font-display font-black text-base flex items-center justify-center gap-2 border-3 border-black shadow-[4px_4px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all mt-4"
              >
                {submitted ? 'Signing In...' : 'Sign In'} <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            /* 2. CREATE ACCOUNT FORM (NAME, EMAIL, PASSWORD, DEPT, BATCH, YEAR) */
            <form onSubmit={handleSignUpSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-display font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={signUpData.name}
                    onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                    placeholder="e.g. Aryan Raj"
                    className="w-full pl-11 pr-4 py-2.5 text-sm font-body font-bold rounded-2xl border-3 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff]"
                  />
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="block text-xs font-display font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={signUpData.email}
                    onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                    placeholder="student@hithaldia.ac.in"
                    className="w-full pl-11 pr-4 py-2.5 text-sm font-body font-bold rounded-2xl border-3 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff]"
                  />
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="block text-xs font-display font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Create Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={signUpData.password}
                    onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                    placeholder="At least 8 characters"
                    className="w-full pl-11 pr-11 py-2.5 text-sm font-body font-bold rounded-2xl border-3 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff]"
                  />
                  <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Department Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-display font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Department
                </label>
                <div className="relative">
                  <select
                    required
                    value={signUpData.department}
                    onChange={(e) => setSignUpData({ ...signUpData, department: e.target.value })}
                    className="w-full pl-11 pr-8 py-2.5 text-sm font-body font-bold rounded-2xl border-3 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] appearance-none"
                  >
                    <option value="" disabled>Select Department</option>
                    {DEPARTMENTS.map((dept, i) => (
                      <option key={i} value={dept}>{dept}</option>
                    ))}
                  </select>
                  <GraduationCap className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                </div>
              </div>

              {/* Batch & Year Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Batch */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-display font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Batch (e.g. 2023-2027)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={signUpData.batch}
                      onChange={(e) => setSignUpData({ ...signUpData, batch: e.target.value })}
                      placeholder="2023-2027"
                      className="w-full pl-10 pr-3 py-2.5 text-sm font-body font-bold rounded-2xl border-3 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff]"
                    />
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* Academic Year */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-display font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Year of Study
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={signUpData.year}
                      onChange={(e) => setSignUpData({ ...signUpData, year: e.target.value })}
                      className="w-full pl-10 pr-8 py-2.5 text-sm font-body font-bold rounded-2xl border-3 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] appearance-none"
                    >
                      {YEARS.map((yr, i) => (
                        <option key={i} value={yr}>{yr}</option>
                      ))}
                    </select>
                    <Layers className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-4 px-6 rounded-2xl bg-secondary hover:bg-[#347cd3] text-white font-display font-black text-base flex items-center justify-center gap-2 border-3 border-black shadow-[4px_4px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all mt-4"
              >
                {submitted ? 'Creating Account...' : 'Register Account'} <CheckCircle2 className="w-5 h-5" />
              </button>
            </form>
          )}

          {/* Footer toggle prompt */}
          <div className="text-center pt-6 mt-6 border-t-2 border-dashed border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-body">
            {authMode === 'signin' ? (
              <p className="text-slate-600 dark:text-slate-400">
                Don&apos;t have an account yet?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('signup')}
                  className="font-display font-black text-secondary hover:underline ml-1"
                >
                  Create Account
                </button>
              </p>
            ) : (
              <p className="text-slate-600 dark:text-slate-400">
                Already registered?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('signin')}
                  className="font-display font-black text-primary hover:underline ml-1"
                >
                  Sign In to existing account
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

