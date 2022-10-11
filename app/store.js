import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from '../redux/services/shazamCoreApi';
import musicPlayer from '../redux/features/musicPlayer';
import currentSongArtistListReducer from '../redux/features/currentSongArtistList';

const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    musicPlayer: musicPlayer,
    currentSongArtistList: currentSongArtistListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

export default store;
