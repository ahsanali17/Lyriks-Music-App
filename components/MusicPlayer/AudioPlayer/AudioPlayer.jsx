import React, {useRef, useEffect } from 'react'

const AudioPlayer = ({activeSong, isPlaying, volume, seekTime, onTimeUpdate, onLoadedData}) => {

  const audioRef = useRef(null);

  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }
  // useEffect(() => {
  //   audioRef.current.volume = volume;
  // }, [volume]);
  
  // useEffect(() => {
  //   audioRef.current.currentTime = seekTime;
  // }, [seekTime]);
  
  return (
   <>
    {isPlaying ? (
      <audio 
        autoPlay 
        type='audio/mp3' 
        src={activeSong} 
        // ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedData={onLoadedData}
        
      /> 
    ) : ''}
   </>       
  )
}

export default AudioPlayer
