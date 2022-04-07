import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Card from '../classes/Card';

export interface CollectionState {
  cards: Card[]
}

const initialState: CollectionState = {
  cards: [],
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addSampleCard: (state) => {
      state.cards.push(new Card(-1));
    },
    deleteLast: (state) => {
      state.cards.pop();
    },
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addSampleCard, deleteLast, addCard } = collectionSlice.actions;

export default collectionSlice.reducer;
