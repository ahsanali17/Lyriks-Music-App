import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playPause } from '../../redux/features/musicPlayer';

import { 
  MusicPlayerWrapper, 
  MusicPlayerContainer, 
  TrackWrapper,
  ControlSeekbarWrapper,
  AudioPlayerVolumeBarWrapper,
} from './styles';

import { AudioPlayer, CurrentTrack, Controls, SeekBar, VolumeBar } from './index';

const MusicPlayer = () => {
  const dispatch = useDispatch();
  // Object that we will have to import from our feature slice
  const { activeSong, isActive, isPlaying, currentSongData, currentIndex } = useSelector((state) => state.musicPlayer);
  
  const [duration, setDuration] = useState(0);
  
  
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);

  const [volume, setVolume] = useState(0.3);
  
 
  const [percentage, setPercentage] = useState(0);
  
  const onChange = (e) => {
    setPercentage(e.target.value);
  }
  
  
  // Logic will be handled here for all the dispatches 
  
  // Handle functions for dispatching the actions in control component
  
  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  return (
      <MusicPlayerWrapper>
        <MusicPlayerContainer>
          <CurrentTrack 
            currentSongData={currentSongData}
            />
          <ControlSeekbarWrapper>
            <Controls
              isPlaying={isPlaying}
              isActive={isActive}
              handlePlayPause={handlePlayPause}
            />
            <SeekBar 
              onChange={onChange}
              percentage={percentage}
              value={appTime}
              min="0"
              max={duration}
              onInput={(e) => setSeekTime(e.target.value)}
              setSeekTime={setSeekTime}
              appTime={appTime}
            />
          </ControlSeekbarWrapper>
          
          <AudioPlayerVolumeBarWrapper>
            <AudioPlayer
              activeSong={activeSong}
              volume={volume}
              isPlaying={isPlaying}
              currentIndex={currentIndex}
              onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
              onLoadedData={(event) => setDuration(event.target.duration)}
            />
            <VolumeBar
              value={volume}
              min='0'
              max='1'
              onChange={(event) => setVolume(event.target.value)}
              setVolume={setVolume}
            />
          </AudioPlayerVolumeBarWrapper>
        
        </MusicPlayerContainer>
      </MusicPlayerWrapper>
    )
};

export default MusicPlayer;
