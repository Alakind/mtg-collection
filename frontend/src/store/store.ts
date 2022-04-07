import { configureStore } from '@reduxjs/toolkit';
import collectionReduser from '../common/state/collectionSlice';

export const store = configureStore({
  reducer: {
    collection: collectionReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
