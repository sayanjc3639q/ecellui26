'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeMobileMenu } from '@/store/slices/uiSlice';
import { MemphisButton } from '../common/MemphisButton';
import { LogIn, X, Zap } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Event', href: '/events' },
  { label: 'Member', href: '/team' },
  { label: 'Idea', href: '/idea-pitching' },
  { label: 'Join Us', href: '/join' },
];

export const MobileMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);

  return (
    <div
      className={`md:hidden fixed inset-0 z-50 transition-visibility duration-300 ${
        isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
      }`}
    >
      {/* Smooth Fade Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => dispatch(closeMobileMenu())}
      />

      {/* Smooth Slide-in/Slide-out Memphis Sidebar */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white border-l-4 border-black p-6 shadow-[-8px_0px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between pb-6 border-b-3 border-black">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center border-2 border-black">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-display font-black text-lg text-slate-900">E-CELL</span>
            </div>
            <button
              onClick={() => dispatch(closeMobileMenu())}
              className="p-1.5 rounded-xl border-2 border-black hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5 text-slate-900" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 mt-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => dispatch(closeMobileMenu())}
                  className={`font-display font-extrabold text-base px-4 py-3 rounded-xl border-2 border-transparent transition-all ${
                    isActive
                      ? 'bg-peach border-black shadow-[3px_3px_0px_0px_#000] text-slate-900'
                      : 'text-slate-700 hover:bg-slate-100 hover:border-black'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Login Action */}
        <div className="pt-6 border-t-3 border-black">
          <Link href="/login" onClick={() => dispatch(closeMobileMenu())}>
            <MemphisButton variant="secondary" className="w-full flex items-center justify-center gap-2 py-3 text-base">
              <LogIn className="w-4 h-4" /> Login
            </MemphisButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
