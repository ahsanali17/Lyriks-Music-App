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
  
  
  
  const dispatch = useDispatch();
  // Logic will be handled here for all the dispatches 
  
  // Handle functions for dispatching the actions in control component
  
  return (
      <MusicPlayerWrapper>
        <MusicPlayerContainer>
          <CurrentTrack/>
         
          <ControlSeekbarWrapper>
            <Controls/>
            <SeekBar/>
          </ControlSeekbarWrapper>
          
          <AudioPlayerVolumeBarWrapper>
          <AudioPlayer/>
          <VolumeBar/>
          </AudioPlayerVolumeBarWrapper>
        
        </MusicPlayerContainer>
      </MusicPlayerWrapper>
    )
};

export default MusicPlayer;
