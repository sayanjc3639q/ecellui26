import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import eventsReducer from './slices/eventsSlice';
import startupsReducer from './slices/startupsSlice';
import authReducer from './slices/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
      events: eventsReducer,
      startups: startupsReducer,
      auth: authReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
