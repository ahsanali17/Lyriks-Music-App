import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from '../services/shazamCoreApi';

const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

export default store;
