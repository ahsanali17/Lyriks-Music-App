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
  
  const [volume, setVolume] = useState(0.3);
  
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const audioRef = useRef();
  
  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }
  
  const getCurrentDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

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
          <CurrentTrack currentSongData={currentSongData} />
          
          <ControlSeekbarWrapper>
            <Controls
              isPlaying={isPlaying}
              isActive={isActive}
              handlePlayPause={handlePlayPause}
            />
            
            <SeekBar 
              onChange={onChange}
              percentage={percentage}
              value={currentTime}
              min="0"
              max={duration}
            />
          </ControlSeekbarWrapper>
          
          <AudioPlayerVolumeBarWrapper>
            <AudioPlayer
              activeSong={activeSong}
              isPlaying={isPlaying}
              currentIndex={currentIndex}
              onTimeUpdate={getCurrentDuration}
              onLoadedData={(e) => {setDuration(e.currentTarget.duration.toFixed(2))
              }}
              audioRef={audioRef}
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
