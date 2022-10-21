import React from 'react'
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

import { VolumeBarWrap, VolumeBarInput } from "./styles";

const VolumeBar = ({ value, min, max, onChange, setVolume }) => {
  return (
    <VolumeBarWrap>
      
      {value <= 1 && value > 0.5 && 
        (<BsFillVolumeUpFill 
          size={25} 
          color="#FFF" 
          onClick={() => setVolume(0)} 
        />
      )}
      
      {value <= 0.5 && value > 0 && 
        (<BsVolumeDownFill 
          size={25} 
          color="#FFF" 
          onClick={() => setVolume(0)} 
        />
      )}
      
      {value === 0 && ( 
        <BsFillVolumeMuteFill 
          size={25} 
          color="#FFF" 
          onClick={() => setVolume(1)} 
        />
      )}
      
      <VolumeBarInput 
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
      
    </VolumeBarWrap>
  )
}

export default VolumeBar