import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 songList:  {},
 currentSongData: {},
 currentIndex: 0,
 isActive: false,
 isPlaying: false,
 activeSong: {},
 artistImage: {},
 artistTitle: {},
 artistSubtitle: {},
}

const musicPlayer = createSlice({
 name: "musicPlayer",
 initialState,
 reducers: {
  setActiveSong: (state, action) => {
    state.activeSong = action.payload.song;  
    state.currentIndex = action.payload.i;
    state.isActive = true;
  },
  playPause: (state, action) => {
    state.isPlaying = action.payload;
  },
  setSongList: (state, action) => {
    state.songList = action.payload.songList;
  },
  setCurrentSongData: (state, action) => {
    if(state.currentSongData = action.payload.data){
      if(action.payload.data?.key?.length) {
        state.artistImage = action.payload.data.images.coverart;
        state.artistTitle = action.payload.data.title;
        state.artistSubtitle = action.payload.data.subtitle;
        
        console.log("coverart image", state.artistImage, "coverart artistTitle", state.artistTitle, "coverart subtitle", state.artistSubtitle);
        
      } else if(state.CurrentSongData = action.payload.data.id.length) {
        state.artistImage = action.payload.data.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125');
        console.log("attribute image", state.artistImage, "attribute title", state.title, "attribute subtitle", state.artistSubtitle);
      }
    } else {
      return 'Nope, no data provided to currentSongData';
    }
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

export const { setActiveSong, playPause, setSongList, nextSong, prevSong, setCurrentSongData } = musicPlayer.actions;

export default musicPlayer.reducer;