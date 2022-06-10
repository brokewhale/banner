import { configureStore } from '@reduxjs/toolkit';
import {
  bannerMessageReducer,
  interviewSummaryReducer,
  userReducer,
} from './slices';

export const store = configureStore({
  reducer: {
    bannerMessage: bannerMessageReducer,
    interviewSummary: interviewSummaryReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
