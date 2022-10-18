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
    // console.log("activeSong:", state.activeSong);
    console.log("currentSongState:", state.currentSongData);
    // console.log("currentIndex:", state.currentIndex);
  },
  playPause: (state, action) => {
    state.isPlaying = action.payload;
  },
  setSongList: (state, action) => {
    state.songList = action.payload.songList;
    // console.log("songList:", state.songList);
  },
  nextSong: (state, action) => {
    if (state.songList[action.payload]) {
      state.activeSong = state.songList[action.payload].hub?.actions[1].uri;
      state.currentSongData = state.songList[action.payload];
    } else {
      state.activeSong = state.songList[action.payload].hub?.actions[1].uri;
    }
    console.log("tracks?:", state.songList[action.payload]?.track);
    console.log("object keys current songs uri:", 
      state.songList[action.payload].hub?.actions[1].uri
    );
    console.log("nextSong, state.activeSong:", state.activeSong);
    console.log("nextSong, state.currentSongData", state.currentSongData);
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
    // console.log("object keys current index", 
    // state.songList[action.payload].hub?.actions[1].uri);
    console.log("prevSong, state.activeSong:", state.activeSong);
    console.log("prevSong, state.currentSongData", state.currentSongData);
    // console.log("state.currentIndex:", state.currentIndex);
    
  },
 }
})

export const { setActiveSong, playPause, setSongList, nextSong, prevSong } = musicPlayer.actions;

export default musicPlayer.reducer;