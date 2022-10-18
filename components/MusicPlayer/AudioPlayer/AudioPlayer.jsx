import React, { useEffect } from 'react'

const AudioPlayer = ({activeSong, volume, isPlaying, repeat, onEnded, onTimeUpdate, onLoadedData, audioRef}) => {
  
  if(audioRef.current) {
    if(isPlaying) {
      audioRef.current.play();
    } 
    else {
      audioRef.current.pause();
    }
  }

  useEffect(()=> {
    audioRef.current.volume = volume;
  }, [volume]);
  
  return (
   <>
    {isPlaying ? (
      <audio 
        autoPlay 
        type='audio/mp3' 
        src={activeSong} 
        loop={repeat}
        ref={audioRef}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onLoadedData={onLoadedData}
      /> 
    ) : ''}
   </>       
  )
}

export default AudioPlayer
