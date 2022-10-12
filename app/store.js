import { configureStore } from '@reduxjs/toolkit';

import { shazamCoreApi } from '../services/shazamCoreApi';
import currentSongArtistListReducer from '../features/currentSongArtistList';

const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    currentSongArtistList: currentSongArtistListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

export default store;
