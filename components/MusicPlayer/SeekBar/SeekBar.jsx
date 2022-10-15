import React, {useState, useRef} from 'react'
import { SliderContainer, ProgressBarCover, Thumb, AudioInputSlider} from './styles';

const SeekBar = ({ value, min, max, onInput, onChange, percentage }) => {
  
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`; 
  
  
  console.log(percentage);
  
  
  return (
    <>
      <SliderContainer>
        <ProgressBarCover></ProgressBarCover>
        <Thumb />
        <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
        <AudioInputSlider 
          onChange={onChange}
          percentage={percentage}
          type="range"
          value={value}
          step="any"
          min={min}
          max={max}
          onInput={onInput}
          />
        <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      </SliderContainer>
    </>
  )
}

export default SeekBar