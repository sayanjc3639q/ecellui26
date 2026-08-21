import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StartupItem, StartupStage } from '@/types/startup';

interface StartupsState {
  items: StartupItem[];
  selectedStage: StartupStage | 'All';
}

const mockStartups: StartupItem[] = [
  {
    id: 'st-1',
    name: 'FinTech Innovators',
    tagline: 'Revolutionizing micro-payments for rural India using blockchain solutions.',
    stage: 'Incubated',
    founders: ['Aarav Sharma', 'Priya Roy'],
    domain: 'FinTech',
    foundedYear: 2024,
    logoUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'st-2',
    name: 'EcoCharge',
    tagline: 'Sustainable charging infrastructure built from recycled industrial waste.',
    stage: 'Scaled',
    founders: ['Rohan Das', 'Ananya Patel'],
    domain: 'CleanTech',
    foundedYear: 2025,
    logoUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'st-3',
    name: 'EdVantage Labs',
    tagline: 'Interactive peer-to-peer skill exchange platform for engineers.',
    stage: 'Early Stage',
    founders: ['Sneha Sen'],
    domain: 'EdTech',
    foundedYear: 2025,
    logoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'st-4',
    name: 'HealthSphere AI',
    tagline: 'Predictive diagnostic assistant for tier-2 healthcare centers.',
    stage: 'Incubated',
    founders: ['Dr. Vikram Roy', 'Karan Verma'],
    domain: 'HealthTech',
    foundedYear: 2026,
    logoUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop',
  },
];

const initialState: StartupsState = {
  items: mockStartups,
  selectedStage: 'All',
};

export const startupsSlice = createSlice({
  name: 'startups',
  initialState,
  reducers: {
    setStageFilter: (state, action: PayloadAction<StartupStage | 'All'>) => {
      state.selectedStage = action.payload;
    },
  },
});

export const { setStageFilter } = startupsSlice.actions;
export default startupsSlice.reducer;
