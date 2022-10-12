import React from 'react'

const AudioPlayer = ({activeSong, isPlaying, currentIndex }) => {
  return (
    <audio autoPlay src={activeSong} type='audio/mp3' />
  )
}

export default AudioPlayer