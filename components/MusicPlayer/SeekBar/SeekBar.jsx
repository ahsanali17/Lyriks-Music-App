import React, { useState, useEffect, useRef } from 'react'

import { SliderContainer, ProgressBarCover, Thumb, AudioInputSlider} from './styles';

const SeekBar = ({ value, min, max, onChange, percentage = 0 }) => {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  
  const rangeRef = useRef();
  const thumbRef = useRef();
  
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`; 
  
  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth/100) * percentage * -1;
    const centerProgressBar = thumbWidth + rangeWidth/100 * percentage - (thumbWidth/100 * percentage);
    
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);
  
  return (
    <>
      <SliderContainer>
        <ProgressBarCover progressBarWidth={progressBarWidth} />
        
        <Thumb ref={thumbRef} left={position} marginLeft={marginLeft} /> 
        
        <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
        
        <AudioInputSlider 
          type="range"
          step="any"
          value={position}
          min={min}
          max={max}
          onChange={onChange}
          ref={rangeRef}
        />
          
        <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      </SliderContainer>
    </>
  )
}

export default SeekBar