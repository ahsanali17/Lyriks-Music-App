import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  MusicPlayerWrapper, 
  MusicPlayerContainer, 
  TrackWrapper,
  ControlSeekbarWrapper,
  AudioPlayerVolumeBarWrapper,
} from './styles';

import { AudioPlayer, CurrentTrack, Controls, SeekBar, VolumeBar } from './index';

const MusicPlayer = () => {
  // Object that we will have to import from our feature slice
  const { activeSong, isActive, isPlaying, currentSongs, currentIndex } = useSelector((state) => state.musicPlayer);
  
  
  const dispatch = useDispatch();
  // Logic will be handled here for all the dispatches 
  
  // Handle functions for dispatching the actions in control component
  // console.log("currentSong:", currentSongs, "currentIndex:", currentIndex);
  return (
      <MusicPlayerWrapper>
        <MusicPlayerContainer>
          <CurrentTrack isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
         
          <ControlSeekbarWrapper>
            <Controls/>
            <SeekBar/>
          </ControlSeekbarWrapper>
          
          <AudioPlayerVolumeBarWrapper>
            <AudioPlayer
              activeSong={activeSong}
              isPlaying={isPlaying}
              currentIndex={currentIndex}
            />
            <VolumeBar/>
          </AudioPlayerVolumeBarWrapper>
        
        </MusicPlayerContainer>
      </MusicPlayerWrapper>
    )
};

export default MusicPlayer;
