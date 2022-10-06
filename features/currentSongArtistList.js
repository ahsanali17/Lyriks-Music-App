import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genre: '',
  searchQuery: '',
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

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenre, setSearchQuery } = currentSongArtistList.actions;

export default currentSongArtistList.reducer;
