import React from 'react'
import { ControlWrapper } from './styles';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongDataLengthIs, handlePlayPause, handlePrevSong, handleNextSong}) => {
  return (
    <ControlWrapper>
    
      <BsArrowRepeat
        size={20}
        color={repeat ? 'red' : 'white'}
        onClick={() => setRepeat((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
        
      {currentSongDataLengthIs
      && (
        <MdSkipPrevious
          size={30}
          color="#FFF"
          className="cursor-pointer"
          onClick={handlePrevSong}
        />
      )}
        
      {isPlaying ? (
        <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      ) : (
        <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      )}
      
      {currentSongDataLengthIs
      && (
        <MdSkipNext
          size={30}
          color="#FFF"
          className="cursor-pointer"
          onClick={handleNextSong}
        />
      )}
      
      <BsShuffle
        size={20}
        color={shuffle ? 'red' : 'white'}
        onClick={() => setShuffle((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
    
    </ControlWrapper>
  )
}

export default Controls