import React, {useRef, useEffect } from 'react'

const AudioPlayer = ({activeSong, isPlaying, onTimeUpdate, onLoadedData, audioRef}) => {
  
  return (
   <>
    {isPlaying ? (
      <audio 
        autoPlay 
        type='audio/mp3' 
        src={activeSong} 
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedData={onLoadedData}
      /> 
    ) : ''}
   </>       
  )
}

export default AudioPlayer
