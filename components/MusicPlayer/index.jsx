import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MusicPlayerWrapper, MusicPlayerContainer } from './styles';

import { CurrentTrack, Controls, SeekBar, VolumeBar } from './index';

const MusicPlayer = () => {
  // Object that we will have to import from our feature slice
  
  
  
  const dispatch = useDispatch();
  // Logic will be handled here for all the dispatches 
  
  // Handle functions for dispatching the actions in control component
  
  return (
      <MusicPlayerWrapper>
        <MusicPlayerContainer>
          <a>Links</a>
          <a>Links</a>
          <a>Links</a>
          
        </MusicPlayerContainer>
      </MusicPlayerWrapper>
    )
};

export default MusicPlayer;
