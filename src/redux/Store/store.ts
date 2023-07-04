import * as Interfaces from '@/Interfaces';
import { configureStore } from '@reduxjs/toolkit';
import FavoritesPer from './states/Favorites';

export interface AppStore {
  favorites: Interfaces.DataModel[];
}

const store: any = configureStore<AppStore>({
  reducer: {
    favorites: FavoritesPer.reducer,
  },
});
export default store;
