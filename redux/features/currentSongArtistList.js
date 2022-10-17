import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genreCode: '',
  currentDiscoverGenre: '',
  searchQuery: '',
};

export const currentSongArtistList = createSlice({
  name: 'currentSongArtistList',
  initialState,
  reducers: {
    selectGenre: (state, action) => {
      state.genreCode = action.payload;
      state.searchQuery = '';
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    setDiscoverGenre: (state, action) => {
      state.currentDiscoverGenre = action.payload;
    },
  },
});

export const { selectGenre, setSearchQuery, setDiscoverGenre } = currentSongArtistList.actions;

export default currentSongArtistList.reducer;
