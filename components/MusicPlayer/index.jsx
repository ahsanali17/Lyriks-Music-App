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
  const { activeSong, isActive, isPlaying, currentSongData, currentIndex } = useSelector((state) => state.musicPlayer);
  
  
  const dispatch = useDispatch();
  // Logic will be handled here for all the dispatches 
  
  // Handle functions for dispatching the actions in control component

  return (
      <MusicPlayerWrapper>
        <MusicPlayerContainer>
          <CurrentTrack 
            currentSongData={currentSongData}
            />
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
