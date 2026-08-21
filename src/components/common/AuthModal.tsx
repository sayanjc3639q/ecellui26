'use client';

import React, { useState } from 'react';
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
  X,
} from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setActiveModal } from '@/store/slices/uiSlice';
import { loginUser } from '@/store/slices/authSlice';

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

export const AuthModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector((state) => state.ui.activeModal);
  const isOpen = activeModal === 'auth' || activeModal === 'login';

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
    batch: '2023-2027',
    year: '3rd Year',
  });

  if (!isOpen) return null;

  const closeModal = () => {
    dispatch(setActiveModal(null));
  };

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      dispatch(
        loginUser({
          name: signInData.email.split('@')[0].replace('.', ' ').toUpperCase(),
          email: signInData.email,
        })
      );
      setSubmitted(false);
      closeModal();
    }, 400);
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      dispatch(
        loginUser({
          name: signUpData.name,
          email: signUpData.email,
          department: signUpData.department,
          batch: signUpData.batch,
          year: signUpData.year,
        })
      );
      setSubmitted(false);
      closeModal();
    }, 400);
  };

  const handleGoogleAuth = () => {
    dispatch(
      loginUser({
        name: 'Aryan Raj',
        email: 'aryan.raj@hithaldia.ac.in',
        department: 'Computer Science & Engineering (CSE)',
        batch: '2022-2026',
        year: '3rd Year',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
      })
    );
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop with Blur */}
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-0"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-lg bg-white dark:bg-slate-900 border-4 border-black dark:border-white rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 shadow-[10px_10px_0px_0px_#000] dark:shadow-[10px_10px_0px_0px_#fff] my-auto max-h-[92vh] flex flex-col justify-between overflow-hidden">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 border-2 border-black dark:border-white text-slate-800 dark:text-white transition-colors shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5 z-20"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto pr-1 -mr-1 space-y-4">
          {/* Auth Mode Toggle Pill */}
          <div className="flex justify-center mt-1">
            <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] flex gap-1.5">
              <button
                onClick={() => setAuthMode('signin')}
                className={`px-5 py-1.5 text-xs font-display font-black rounded-full transition-all ${
                  authMode === 'signin'
                    ? 'bg-primary text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]'
                    : 'text-slate-700 dark:text-slate-300 hover:text-primary'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setAuthMode('signup')}
                className={`px-5 py-1.5 text-xs font-display font-black rounded-full transition-all ${
                  authMode === 'signup'
                    ? 'bg-secondary text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]'
                    : 'text-slate-700 dark:text-slate-300 hover:text-secondary'
                }`}
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Header */}
          <div className="text-center space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-amber-300 text-slate-950 font-display font-black text-[10px] uppercase tracking-wider rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              <Sparkles className="w-3 h-3 text-primary" />
              {authMode === 'signin' ? 'E-CELL HIT HALDIA' : 'JOIN THE INNOVATION NETWORK'}
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-tight leading-tight">
              {authMode === 'signin' ? 'Welcome Back!' : 'Create Your Account'}
            </h2>
            <p className="font-body text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
              {authMode === 'signin'
                ? 'Sign in to access your pitching applications and member features.'
                : 'Enter your student & academic details to get full membership access.'}
            </p>
          </div>

          {/* Google OAuth Quick Action */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-900 dark:text-white font-display font-black text-xs flex items-center justify-center gap-2.5 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] active:translate-y-0.5 active:shadow-none transition-all"
          >
            <FcGoogle className="w-4 h-4 shrink-0" />
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-0.5 bg-black/15 dark:bg-white/15" />
            <span className="text-[10px] font-display font-black uppercase text-slate-400 tracking-wider">
              Or with Email
            </span>
            <div className="flex-1 h-0.5 bg-black/15 dark:bg-white/15" />
          </div>

          {/* 1. SIGN IN FORM */}
          {authMode === 'signin' ? (
            <form onSubmit={handleSignInSubmit} className="space-y-3">
              <div className="space-y-1">
                <label className="block text-[10px] font-display font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={signInData.email}
                    onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                    placeholder="student@hithaldia.ac.in"
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm font-body font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
                  />
                  <Mail className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="block text-[10px] font-display font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Password
                  </label>
                  <a href="#" className="text-[10px] font-display font-black text-primary hover:underline">
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
                    className="w-full pl-9 pr-9 py-2 text-xs sm:text-sm font-body font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
                  />
                  <Lock className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-[#e05724] text-white font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all mt-2"
              >
                {submitted ? 'Signing In...' : 'Sign In'} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* 2. CREATE ACCOUNT FORM (COMPACT 2-COLUMN GRID) */
            <form onSubmit={handleSignUpSubmit} className="space-y-2.5">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="space-y-1">
                  <label className="block text-[10px] font-display font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={signUpData.name}
                      onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                      placeholder="e.g. Aryan Raj"
                      className="w-full pl-8 pr-3 py-2 text-xs font-body font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
                    />
                    <User className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-display font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={signUpData.email}
                      onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                      placeholder="student@hithaldia.ac.in"
                      className="w-full pl-8 pr-3 py-2 text-xs font-body font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
                    />
                    <Mail className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Row 2: Password & Department */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="space-y-1">
                  <label className="block text-[10px] font-display font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Create Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={signUpData.password}
                      onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full pl-8 pr-8 py-2 text-xs font-body font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
                    />
                    <Lock className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-2.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-display font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Department
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={signUpData.department}
                      onChange={(e) => setSignUpData({ ...signUpData, department: e.target.value })}
                      className="w-full pl-8 pr-6 py-2 text-xs font-body font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] appearance-none text-ellipsis"
                    >
                      <option value="" disabled>Select Department</option>
                      {DEPARTMENTS.map((dept, i) => (
                        <option key={i} value={dept}>{dept}</option>
                      ))}
                    </select>
                    <GraduationCap className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Row 3: Batch & Year */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="space-y-1">
                  <label className="block text-[10px] font-display font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Batch
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={signUpData.batch}
                      onChange={(e) => setSignUpData({ ...signUpData, batch: e.target.value })}
                      placeholder="2023-2027"
                      className="w-full pl-8 pr-2 py-2 text-xs font-body font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]"
                    />
                    <Calendar className="absolute left-2.5 top-2.5 w-3 h-3 text-slate-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-display font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Year of Study
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={signUpData.year}
                      onChange={(e) => setSignUpData({ ...signUpData, year: e.target.value })}
                      className="w-full pl-8 pr-6 py-2 text-xs font-body font-bold rounded-xl border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] appearance-none"
                    >
                      {YEARS.map((yr, i) => (
                        <option key={i} value={yr}>{yr}</option>
                      ))}
                    </select>
                    <Layers className="absolute left-2.5 top-2.5 w-3 h-3 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3 px-5 rounded-xl bg-secondary hover:bg-[#347cd3] text-white font-display font-black text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all mt-2"
              >
                {submitted ? 'Creating Account...' : 'Register Account'} <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Footer prompt */}
          <div className="text-center pt-2 border-t-2 border-dashed border-slate-200 dark:border-slate-800 text-[11px] font-body">
            {authMode === 'signin' ? (
              <p className="text-slate-600 dark:text-slate-400">
                Don&apos;t have an account?{' '}
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
                  Sign In
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
