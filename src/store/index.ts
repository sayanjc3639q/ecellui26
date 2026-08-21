import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import eventsReducer from './slices/eventsSlice';
import startupsReducer from './slices/startupsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
      events: eventsReducer,
      startups: startupsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
