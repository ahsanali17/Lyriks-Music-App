import React from 'react'

const AudioPlayer = ({song}) => {
  return (
    <audio controls>
      <source src={song} type='audio/mp3'/>
    </audio>
  )
}

export default AudioPlayer