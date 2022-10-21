import React from 'react' 

import { TrackWrapper, CoverArtContainer, CoverArtImage, TitleContainer, Title, Subtitle } from './styles';

const CurrentTrack = ({ currentSongData }) => {
  const {images, title, subtitle} = currentSongData;

  return (
    <TrackWrapper>
      <CoverArtContainer>
        <CoverArtImage src={images.coverart} alt="artist-cover" />
      </CoverArtContainer>
      <TitleContainer>
        <Title>{title}</Title>        
        <Subtitle>{subtitle}</Subtitle>
      </TitleContainer>
    </TrackWrapper>
  )
}

export default CurrentTrack
