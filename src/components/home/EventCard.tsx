'use client';

import React from 'react';
import { EventItem } from '@/types/event';
import { MemphisCard } from '../common/MemphisCard';
import { MemphisButton } from '../common/MemphisButton';
import { Calendar, MapPin, Trophy } from 'lucide-react';

interface EventCardProps {
  event: EventItem;
}

/**
 * EventCard renders a single Memphis-styled card representation of an event.
 * Displays category badge, prize pool, date, location, title, description, and registration CTA.
 */
export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <MemphisCard bgColor="bg-peach/30 dark:bg-slate-800">
      <div className="flex justify-between items-start mb-4">
        <span className="bg-primary text-white text-xs font-black font-display px-3 py-1 rounded-full border border-black">
          {event.category}
        </span>
        {event.prizePool && (
          <span className="flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 px-3 py-1 rounded-full border border-amber-300">
            <Trophy className="w-3.5 h-3.5" /> {event.prizePool}
          </span>
        )}
      </div>

      <h3 className="font-display font-black text-2xl mb-2 text-slate-900 dark:text-white">
        {event.title}
      </h3>

      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 font-body">
        {event.description}
      </p>

      <div className="space-y-2 text-xs font-bold text-slate-600 dark:text-slate-300 mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" /> {event.date} at {event.time}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-secondary" /> {event.location}
        </div>
      </div>

      <MemphisButton variant="primary" className="w-full">
        Register Now
      </MemphisButton>
    </MemphisCard>
  );
};
