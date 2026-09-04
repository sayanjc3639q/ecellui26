'use client';

import React from 'react';

interface MemphisCardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export const MemphisCard: React.FC<MemphisCardProps> = ({
  children,
  className = '',
  bgColor = 'bg-white dark:bg-slate-900',
}) => {
  return (
    <div
      className={`memphis-card rounded-2xl p-6 ${bgColor} ${className}`}
    >
      {children}
    </div>
  );
};
