import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SHAZAM_CORE_API_HOST, SHAZAM_CORE_API_URL } from '../../utils/constants';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SHAZAM_CORE_API_URL,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.NEXT_PUBLIC_SHAZAM_CORE_API_API_KEY);
      headers.set('X-RapidAPI-Host', SHAZAM_CORE_API_HOST);

      return headers;
    },
  }),
  
  keepUnusedDataFor: 60,

  endpoints: (builder) => ({
    getWorldChartsByGenreOrSearch: builder.query({
      query: ({ genreCode, searchQuery }) => {
        if (searchQuery) return `/search/multi?search_type=SONGS_ARTISTS&query=${searchQuery}`;
      
        return `/charts/genre-world?genre_code=${genreCode}`;
      },
    }),

    getArtistDetails: builder.query({
      query: ({ artistCode }) => `/artists/details?artist_id=${artistCode}`
    }),

    getSongDetails: builder.query({
      query: ({ songCode }) => `/tracks/details?track_id=${songCode}`
    }),

    getWorldCharts: builder.query({
      query: () => `/charts/world`,
    }),
    
    getChartsByCountry: builder.query({
      query: ({country_code}) => `/charts/country?country_code=${country_code}`
    }),
  }),
});

export const { useGetWorldChartsByGenreOrSearchQuery, useGetWorldChartsQuery, useGetArtistDetailsQuery, useGetSongDetailsQuery, useGetChartsByCountryQuery } = shazamCoreApi;
