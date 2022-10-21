import React from 'react'
import { TrackWrapper, CoverArtContainer, CoverArtImage, TitleContainer, Title, Subtitle } from './styles';

const CurrentTrack = ({ artistImage, artistTitle, artistSubtitle }) => {
  return (
    <TrackWrapper>
      <CoverArtContainer>
        <CoverArtImage src={artistImage} alt="artist-cover" />
      </CoverArtContainer>
      <TitleContainer>
        <Title>{artistTitle}</Title>        
        <Subtitle>{artistSubtitle}</Subtitle>
      </TitleContainer>
    </TrackWrapper>
  )
}

export default CurrentTrack
