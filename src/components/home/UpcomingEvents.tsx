'use client';

import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { SectionHeader } from '../common/SectionHeader';
import { EventCard } from './EventCard';

/**
 * UpcomingEvents section renders the grid of flagship events.
 * Connects to Redux store to pull event items and maps them via EventCard.
 */
export const UpcomingEvents: React.FC = () => {
  const events = useAppSelector((state) => state.events.items);

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="MARK YOUR CALENDAR"
          title="Upcoming Flagship Events"
          subtitle="Compete, network, and learn in our high-energy workshops and summits."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};
