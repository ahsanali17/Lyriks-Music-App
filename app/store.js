import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from '../redux/services/shazamCoreApi';
import musicPlayer from '../redux/features/musicPlayer';

const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    musicPlayer: musicPlayer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

export default store;
