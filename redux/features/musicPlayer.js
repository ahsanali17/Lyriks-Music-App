import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 songList:  {},
 currentSongData: {},
 currentIndex: 0,
 isActive: false,
 isPlaying: false,
 activeSong: {},
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
  },
  playPause: (state, action) => {
    state.isPlaying = action.payload;
  },
  setSongList: (state, action) => {
    state.songList = action.payload.songList;
  },
  nextSong: (state, action) => {
    if (state.songList[action.payload]) {
      state.activeSong = state.songList[action.payload].hub?.actions[1].uri;
      state.currentSongData = state.songList[action.payload];
    } else {
      state.activeSong = state.songList[action.payload].hub?.actions[1].uri;
    }
    state.currentIndex = action.payload;
    state.isActive = true;
  },

  prevSong: (state, action) => {
    if (state.songList[action.payload]) {
      state.activeSong = state.songList[action.payload].hub?.actions[1].uri;
      state.currentSongData = state.songList[action.payload];
    } else {
      state.activeSong = state.songList[action.payload].hub?.actions[1].uri;
    }
    state.currentIndex = action.payload;
    state.isActive = true;
  },
 }
})

export const { setActiveSong, playPause, setSongList, nextSong, prevSong } = musicPlayer.actions;

export default musicPlayer.reducer;