import React from 'react'
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
const Controls = ({isPlaying, isActive, handlePlayPause}) => {
  return (
    <div>
      {isPlaying && isActive ? (
        <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      ) : (
        <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      )}
    </div>
  )
}

export default Controls