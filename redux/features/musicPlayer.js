import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 listOfSongs:{},
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
    if(action.payload.songList.length === 49) {
      state.listOfSongs = action.payload.songList;
    } else if(action.payload.songList.length === 5) {
      state.listOfSongs = action.payload.songList;
    }
    
    if(action.payload.songList.length === 20) {
      state.listOfSongs = action.payload.songList;
    } 
  },
  setCurrentSongData: (state, action) => {
    if(action.payload.data?.key) {
      state.artistImage = action.payload.data.images.coverart;
      state.artistTitle = action.payload.data.title;
      state.artistSubtitle = action.payload.data.subtitle;

    }
    
    if(action.payload.data?.id) {
      state.artistImage = action.payload.data.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125');
      state.artistTitle = action.payload.data.attributes?.name;
      state.artistSubtitle = action.payload.data?.attributes?.artistName;
    }
  },
  nextSong: (state, action) => {
    if (state.listOfSongs[action.payload]?.key && state.listOfSongs.length === 49) {
      state.activeSong = state.listOfSongs[action.payload].hub?.actions[1].uri;
      state.currentSongData = state.listOfSongs[action.payload];
    
      state.artistImage = state.listOfSongs[action.payload].images.coverart;
      state.artistTitle = state.listOfSongs[action.payload].title;
      state.artistSubtitle = state.listOfSongs[action.payload].subtitle;
    } else if(state.listOfSongs[action.payload]?.key && state.listOfSongs.length === 5) {
      state.activeSong = state.listOfSongs[action.payload].hub?.actions[1].uri;
      state.currentSongData = state.listOfSongs[action.payload];
      
      state.artistImage = state.listOfSongs[action.payload].images.coverart;
      state.artistTitle = state.listOfSongs[action.payload].title;
      state.artistSubtitle = state.listOfSongs[action.payload].subtitle;
    }
    
    if(state.listOfSongs[action.payload]?.id && state.listOfSongs.length === 20) {
      state.currentSongData = state.listOfSongs[action.payload];
      state.activeSong = state.currentSongData.attributes?.previews[0]?.url;
      
      state.artistImage = state.listOfSongs[action.payload].attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125');
      state.artistTitle = state.listOfSongs[action.payload].attributes?.name;
      state.artistSubtitle = state.listOfSongs[action.payload].attributes?.artistName;
    }

    state.currentIndex = action.payload;
    state.isActive = true;
  },

  prevSong: (state, action) => {
    if (state.listOfSongs[action.payload]?.key && state.listOfSongs.length === 49) {
      state.activeSong = state.listOfSongs[action.payload].hub?.actions[1].uri;
      state.currentSongData = state.listOfSongs[action.payload];
      
      state.artistImage = state.listOfSongs[action.payload].images.coverart;
      state.artistTitle = state.listOfSongs[action.payload].title;
      state.artistSubtitle = state.listOfSongs[action.payload].subtitle;
    } else if (state.listOfSongs[action.payload]?.key && state.listOfSongs.length === 5) {
      state.activeSong = state.listOfSongs[action.payload].hub?.actions[1].uri;
      state.currentSongData = state.listOfSongs[action.payload];
      
      state.artistImage = state.listOfSongs[action.payload].images.coverart;
      state.artistTitle = state.listOfSongs[action.payload].title;
      state.artistSubtitle = state.listOfSongs[action.payload].subtitle;
    }
    
    if (state.listOfSongs[action.payload]?.id && state.listOfSongs.length === 20) {
      state.currentSongData = state.listOfSongs[action.payload];
      state.activeSong = state.currentSongData.attributes?.previews[0]?.url;
      
      state.artistImage = state.listOfSongs[action.payload].attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125');
      state.artistTitle = state.listOfSongs[action.payload].attributes?.name;
      state.artistSubtitle = state.listOfSongs[action.payload].attributes?.artistName;
    }
    
    state.currentIndex = action.payload;
    state.isActive = true;
  },
 }
})

export const { setActiveSong, playPause, setSongList, nextSong, prevSong, setCurrentSongData } = musicPlayer.actions;

export default musicPlayer.reducer;