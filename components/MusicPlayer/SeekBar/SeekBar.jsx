import React from 'react'
import { SliderContainer, ProgressBarCover, Thumb, AudioInput} from './styles';

const SeekBar = ({ value, min, max, onInput }) => {
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;
  
  return (
    <>
      {/* <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      <input 
        value={value}
        min={min}
        max={max}
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p> */}
      
      <SliderContainer>
        <ProgressBarCover></ProgressBarCover>
        <Thumb />
        <AudioInput 
          type="range"
          value={value}
          step="0.01"
          min={min}
          max={max}
        />
      </SliderContainer>
    </>
  )
}

export default SeekBar