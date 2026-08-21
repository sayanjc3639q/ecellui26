'use client';

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setCategoryFilter, setSearchQuery } from '@/store/slices/eventsSlice';
import { EventCategory } from '@/types/event';
import { SectionHeader } from '../common/SectionHeader';
import { EventCard } from './EventCard';
import { Search } from 'lucide-react';

const CATEGORIES: ('All' | EventCategory)[] = [
  'All',
  'Pitching',
  'Summit',
  'Hackathon',
  'Workshop',
  'Webinar',
];

export const UpcomingEvents: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, selectedCategory, searchQuery } = useAppSelector((state) => state.events);

  const filteredEvents = items.filter((event) => {
    const matchesCategory =
      selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badgeText="GET INVOLVED"
        title="Upcoming & Flagship Events"
        subtitle="Compete, learn, network, and pitch at Eastern India's most energetic collegiate entrepreneurial events."
      />

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => dispatch(setCategoryFilter(category))}
              className={`px-4 py-2 text-xs font-black font-display uppercase rounded-xl border-2 border-black dark:border-white transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="w-full pl-10 pr-4 py-2 text-xs font-bold rounded-xl border-2 border-black dark:border-white bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff]"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700">
          <p className="text-slate-500 font-bold font-display text-lg">
            No events found matching your criteria.
          </p>
        </div>
      )}
    </section>
  );
};
