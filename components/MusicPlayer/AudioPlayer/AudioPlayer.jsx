import React from 'react'

const AudioPlayer = ({activeSong, isPlaying, currentIndex }) => {
  return (
   <>
    {isPlaying ? (
      <audio autoPlay src={activeSong} type='audio/mp3' /> 
    ) : ''}
   </>       
  )
}

export default AudioPlayer

// <audio 
//       src={activeSong}   
//       autoplay
//       type='audio/mp3' 
//       onTimeUpdate={onTimeUpdate}
//       onLoadedDate={onLoadedDate}
//     />

