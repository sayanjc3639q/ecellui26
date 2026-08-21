import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventItem, EventCategory } from '@/types/event';

export interface DraftRegistration {
  eventSlug: string;
  eventTitle: string;
  eventType: 'hackathon' | 'workshop' | 'seminar';
  step: 'individual' | 'team-choice' | 'create-team' | 'join-team' | 'direct';
  lastSavedAt: string;
  directForm?: {
    name: string;
    email: string;
    department: string;
    year: string;
    phone: string;
    expectations: string;
  };
  hackathonForm?: {
    name: string;
    email: string;
    college: string;
    github: string;
    role: string;
    teamName?: string;
    track?: string;
    inviteEmails?: string[];
    teamCode?: string;
  };
}

interface EventsState {
  items: EventItem[];
  selectedCategory: EventCategory | 'All';
  searchQuery: string;
  loading: boolean;
  draftRegistration: DraftRegistration | null;
  confirmedRegistrations: string[]; // eventSlugs
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
  draftRegistration: null,
  confirmedRegistrations: [],
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
    saveDraftRegistration: (state, action: PayloadAction<DraftRegistration>) => {
      state.draftRegistration = action.payload;
    },
    clearDraftRegistration: (state) => {
      state.draftRegistration = null;
    },
    completeRegistration: (state, action: PayloadAction<string>) => {
      if (!state.confirmedRegistrations.includes(action.payload)) {
        state.confirmedRegistrations.push(action.payload);
      }
      state.draftRegistration = null;
    },
  },
});

export const {
  setCategoryFilter,
  setSearchQuery,
  saveDraftRegistration,
  clearDraftRegistration,
  completeRegistration,
} = eventsSlice.actions;
export default eventsSlice.reducer;
