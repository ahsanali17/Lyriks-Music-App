import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genre: '',
  searchQuery: '',
  searchResults: [],
};

export const currentSongArtistList = createSlice({
  name: 'currentSongArtistList',
  initialState,
  reducers: {
    selectGenre: (state, action) => {
      state.genre = action.payload;
      state.searchQuery = '';
      state.searchResults = [];
    },

    searchSongArtist: (state, action) => {
      state.searchQuery = action.payload;
    },

    getSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { selectGenre, searchSongArtist, getSearchResults } =
  currentSongArtistList.actions;

export default currentSongArtistList.reducer;
