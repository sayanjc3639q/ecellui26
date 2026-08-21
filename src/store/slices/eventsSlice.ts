import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventItem, EventCategory } from '@/types/event';

interface EventsState {
  items: EventItem[];
  selectedCategory: EventCategory | 'All';
  searchQuery: string;
  loading: boolean;
}

const mockEvents: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Haldia Pitch Fest 2026',
    category: 'Pitching',
    date: 'OCT 24, 2026',
    time: '10:00 AM',
    location: 'Main Auditorium, HIT Haldia',
    description: 'Pitch your breakthrough startup idea to top angel investors and venture capitalists.',
    bannerUrl: '/images/pitch.jpg',
    registrationOpen: true,
    prizePool: '₹1,50,000',
    tags: ['Pitch', 'Funding', 'Startups'],
  },
  {
    id: 'ev-2',
    title: 'E-Summit Memphis Edition',
    category: 'Summit',
    date: 'NOV 12, 2026',
    time: '09:00 AM',
    location: 'Campus Ground & Online',
    description: 'Annual Entrepreneurship Summit featuring keynote talks, workshops, and startup expos.',
    bannerUrl: '/images/esummit.jpg',
    registrationOpen: true,
    prizePool: '₹3,00,000',
    tags: ['Summit', 'Networking', 'Keynote'],
  },
];

const initialState: EventsState = {
  items: mockEvents,
  selectedCategory: 'All',
  searchQuery: '',
  loading: false,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setCategoryFilter: (state, action: PayloadAction<EventCategory | 'All'>) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setCategoryFilter, setSearchQuery } = eventsSlice.actions;
export default eventsSlice.reducer;
