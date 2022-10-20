import React from 'react'
import { TrackWrapper, CoverArtContainer, CoverArtImage, TitleContainer, Title, Subtitle } from './styles';

const CurrentTrack = ({ currentSongData, artistImage, artistTitle, artistSubtitle }) => {
  // const {images, title, subtitle} = currentSongData;

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
