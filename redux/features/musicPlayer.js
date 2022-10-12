import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 songList:  [],
 currentSongs: [],
 currentIndex: 0,
 isActive: false,
 isPlaying: false,
 activeSong: {},
 // nextSong: '' ,
 // previousSong: '',
}

const musicPlayer = createSlice({
 name: "musicPlayer",
 initialState,
 reducers: {
  setActiveSong: (state, action) => {
    state.activeSong = action.payload.song;
    
    if (action.payload?.data?.tracks?.hits) {
      state.currentSongs = action.payload.data.tracks.hits;
    } else if (action.payload?.data?.properties) {
      state.currentSongs = action.payload?.data?.tracks;
    } else {
      state.currentSongs = action.payload.data;
    }
    
    state.currentIndex = action.payload.i;
    state.isActive = true;
    // console.log("currentSongState:", state.currentSongs);
    // console.log("currentSongState:", state.currentSongs);
    
  },
  playPause: (state, action) => {
   state.isPlaying = action.payload;
  }
 }
})

export const { setActiveSong, playPause } = musicPlayer.actions;

export default musicPlayer.reducer;