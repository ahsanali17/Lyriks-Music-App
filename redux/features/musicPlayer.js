import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 songList:  [],
 currentSongData: {},
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
    state.currentSongData = action.payload.data;
    state.currentIndex = action.payload.i;
    state.isActive = true;
    // console.log("activeSong:", state.activeSong);
    console.log("currentSongState:", state.currentSongData);
    // console.log("currentIndex:", state.currentIndex);
    
  },
  playPause: (state, action) => {
   state.isPlaying = action.payload;
  }
 }
})

export const { setActiveSong, playPause } = musicPlayer.actions;

export default musicPlayer.reducer;