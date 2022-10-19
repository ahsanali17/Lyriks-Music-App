import styled from "styled-components";

export const ArtistInformationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 300px 1fr;
  grid-template-areas:
    'artist-content-search'
    'artist-content-artist'
    'artist-content-discover-genre';

  overflow: auto;

  background: ${(props) => props.theme.colors.gradients.blackRight};

  padding: 20px;
  gap: 60px;
`;

export const SearchWrapper = styled.div`
  grid-area: artist-content-search;

  height: fit-content;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ArtistGradientWrapper = styled.div`
  grid-area: artist-content-artist;

  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;

  background: ${(props) => props.theme.colors.gradients.gold};
  padding: 4px;
  border-radius: 50%;

  @media (${(props) => props.theme.queries.smallAndDown}) {
    max-width: 250px; 
    max-height: 250px;
  }
`;

export const ArtistWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;

  img {
    border-radius: 50%;
  }

  @media (${(props) => props.theme.queries.smallAndDown}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;
  }
`

export const ArtistTextInformation = styled.div`
  position: relative;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding-left: 40px;

  line-height: 2;

  h2 {
    width: fit-content;
    height: fit-content;
    text-overflow: ellipsis;
  }

  h3 {
    width: fit-content;
    height: fit-content;
    text-overflow: ellipsis;

    color: ${(props) => props.theme.colors.grays[200]};
  }

  @media (${(props) => props.theme.queries.smallAndDown}) {
    align-items: center;
    padding: 0;
  }
` ;

export const RelatedSongsHeading = styled.div`
  display: flex;

  h2 {
    font-size: 2rem;
    background-image: ${(props) => props.theme.colors.gradients.gold};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    margin: 20px 0;
    justify-content: center;
  }
`;

export const RelatedSongsList = styled.ol`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  gap: 50px;
  height: 100%;

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

export const RelatedSong = styled.li`
  display: flex;
  width: 100%;

  list-style: none;
  cursor: pointer;

  @media (pointer: fine) {
    &:hover {
      background: ${(props) =>
        props.theme.colors.gradients.goldVeryTransparent};
    }
  }

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    gap: 10px;

    img {
      flex: 1;
    }
  }

  @media (${(props) => props.theme.queries.smallMediumAndDown}) {
    gap: 5px;
  }
`;

export const Number = styled.h6`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  margin-right: 15px;

  flex: 0.1;

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    flex: 0.25;
    margin-right: 0;
  }

  @media (${(props) => props.theme.queries.smallMediumAndDown}) {
    flex: 0.25;
  }
`;

export const RelatedSongsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  height: 100%;
  padding-left: 40px;

  line-height: 2;

  overflow: hidden;

  h3 {
    width: fit-content;
    height: fit-content;
    text-overflow: ellipsis;
  }

  h4 {
    width: fit-content;
    height: fit-content;
    text-overflow: ellipsis;

    color: ${(props) => props.theme.colors.grays[200]};
  }

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    gap: 10px;
  }
`;