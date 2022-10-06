import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SHAZAM_CORE_API_HOST, SHAZAM_CORE_API_URL } from '../utils/constants';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SHAZAM_CORE_API_URL,
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        process.env.NEXT_PUBLIC_SHAZAM_CORE_API_API_KEY
      );
      headers.set('X-RapidAPI-Host', SHAZAM_CORE_API_HOST);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getWorldChartsByGenreOrSearch: builder.query({
      query: ({ genreCode, searchQuery }) => {
        if (searchQuery) {
          return `/search/multi?search_type=SONGS_ARTISTS&query=${searchQuery}`;
        }

        return `/charts/genre-world?genre_code=${genreCode}`;
      },
    }),

    getWorldCharts: builder.query({
      query: () => `/charts/world`,
    }),
  }),
});

export const { useGetWorldChartsByGenreOrSearchQuery, useGetWorldChartsQuery } =
  shazamCoreApi;
