'use client';

import React from 'react';

interface MemphisButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const MemphisButton: React.FC<MemphisButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-orange-600',
    secondary: 'bg-secondary text-white hover:bg-blue-600',
    dark: 'bg-black text-white dark:bg-white dark:text-black',
    outline: 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white',
  };

  return (
    <button
      className={`px-6 py-2.5 rounded-full font-display font-extrabold text-sm border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-y-0.5 hover:shadow-none transition-all active:translate-y-1 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
