import * as Interfaces from '@/Interfaces';
import { createSlice, current } from '@reduxjs/toolkit';

const initialState: Interfaces.DataModel[] = [];

const favoritePer = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFav(state, action) {
      state.push(action.payload);
    },
    delFav(state, action) {
      const filteredItems = current(state).filter(
        (p) => p.id !== action.payload.id,
      );
      return filteredItems;
    },
  },
});

export const { addFav, delFav } = favoritePer.actions;

export default favoritePer;
