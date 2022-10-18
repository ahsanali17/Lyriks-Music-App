import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playPause, nextSong, prevSong } from '../../redux/features/musicPlayer';

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
  // console.log("currentSongData:",currentSongData);
  
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  
  const [duration, setDuration] = useState(0);
  // Percentage that the seekbar has traveled for the duration of currently playing song
  const [percentage, setPercentage] = useState(0);
  // The current time that the seekbar is on for the duration of the currently playing song
  const [currentTime, setCurrentTime] = useState(0);
  
  const audioRef = useRef(null);

  const currentSongDataLengthIs = Object.keys(currentSongData).length;
    
  const onChange = (e) => {
    const audio = audioRef.current;
    if (isPlaying && isActive) {
      audio.currentTime = (audio.duration / 100) * e.target.value;
      setPercentage(e.target.value);
      
      console.log("audio", audio, "audio.currentTime", audio.currentTime);
    }
    else {
      
      audio.currentTime = (audio.duration / 100) * e.target.value;
      setPercentage(e.target.value);
    }
  
    // audioRef.currentTime = e.target.value;
    // setPercentage(audioRef.currentTime);
  }
  
  const getCurrentDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
    const time = e.currentTarget.currentTime;
    // console.log("percent", percent);
    // console.log("time", time)
    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  }

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };
  
  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongDataLengthIs));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongDataLengthIs)));
    }
  };
 
  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongDataLengthIs - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongDataLengthIs)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  // console.log("try to get the length", currentSongDataLengthIs);
  
  useEffect(() => {
    if (currentSongDataLengthIs) dispatch(playPause(true));
  }, [currentIndex]);
  
  return (
      <MusicPlayerWrapper>
        <MusicPlayerContainer>
          <CurrentTrack currentSongData={currentSongData} />
          
          <ControlSeekbarWrapper>
            <Controls
              isPlaying={isPlaying}
              repeat={repeat}
              setRepeat={setRepeat}
              shuffle={shuffle}
              setShuffle={setShuffle}
              currentSongDataLengthIs={currentSongDataLengthIs}
              handlePlayPause={handlePlayPause}
              handlePrevSong={handlePrevSong}
              handleNextSong={handleNextSong}
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
              repeat={repeat}
              currentIndex={currentIndex}
              onEnded={handleNextSong}
              onTimeUpdate={getCurrentDuration}
              onLoadedData={(e) => {setDuration(e.target.duration)
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
