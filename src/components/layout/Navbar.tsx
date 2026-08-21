'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleMobileMenu, setActiveModal } from '@/store/slices/uiSlice';
import { MemphisButton } from '../common/MemphisButton';
import { Zap, Menu, X, LogIn, User } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Event', href: '/events' },
  { label: 'Member', href: '/team' },
  { label: 'Idea', href: '/idea-pitching' },
];

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isMobileMenuOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <nav className="fixed w-full top-0 z-[100] bg-white/90 backdrop-blur-md border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              <Zap className="w-6 h-6 text-white fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tighter leading-none text-slate-900">
                E-Cell
              </span>
              <span className="font-display font-bold text-[10px] text-slate-500 tracking-widest">
                HIT HALDIA
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8 font-display font-bold text-base">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-slate-800 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated && user ? (
              <Link href="/profile" className="hidden sm:block">
                <MemphisButton
                  variant="primary"
                  className="flex items-center gap-2 px-5 py-2 text-xs uppercase"
                >
                  <User className="w-3.5 h-3.5" />
                  <span className="max-w-[120px] truncate">{user.name.split(' ')[0]}</span>
                </MemphisButton>
              </Link>
            ) : (
              <div className="hidden sm:block">
                <MemphisButton
                  onClick={() => dispatch(setActiveModal('auth'))}
                  variant="secondary"
                  className="flex items-center gap-1.5 px-5"
                >
                  <LogIn className="w-4 h-4" /> Login
                </MemphisButton>
              </div>
            )}

            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="md:hidden p-2 rounded-xl border-2 border-black bg-slate-100 text-slate-900"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
