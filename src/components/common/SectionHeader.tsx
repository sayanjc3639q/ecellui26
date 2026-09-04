'use client';

import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  badgeText?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeText,
  title,
  subtitle,
  centered = true,
}) => {
  const displayBadge = badge || badgeText;

  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {displayBadge && (
        <span className="inline-block bg-peach dark:bg-slate-800 text-primary font-display font-extrabold text-xs px-4 py-1.5 rounded-full border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] mb-3">
          {displayBadge}
        </span>
      )}
      <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-600 dark:text-slate-400 font-body text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
