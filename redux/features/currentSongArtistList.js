import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genre: '',
  discoverGenre: '',
  searchQuery: '',
};

export const currentSongArtistList = createSlice({
  name: 'currentSongArtistList',
  initialState,
  reducers: {
    selectGenre: (state, action) => {
      state.genre = action.payload;
      state.searchQuery = '';
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    setDiscoverGenre: (state, action) => {
      state.discoverGenre = action.payload;
    },
  },
});

export const { selectGenre, setSearchQuery, setDiscoverGenre } = currentSongArtistList.actions;

export default currentSongArtistList.reducer;
