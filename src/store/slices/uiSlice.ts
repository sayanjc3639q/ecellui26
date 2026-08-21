import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeMode } from '@/types/common';

interface UIState {
  theme: ThemeMode;
  isMobileMenuOpen: boolean;
  activeModal: string | null;
}

const initialState: UIState = {
  theme: 'light',
  isMobileMenuOpen: false,
  activeModal: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    setActiveModal: (state, action: PayloadAction<string | null>) => {
      state.activeModal = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, toggleMobileMenu, closeMobileMenu, setActiveModal } = uiSlice.actions;
export default uiSlice.reducer;
