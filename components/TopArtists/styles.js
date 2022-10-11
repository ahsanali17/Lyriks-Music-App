import styled from 'styled-components';

export const TopArtistsWrapper = styled.div`
  grid-area: main-content-top-artists;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  font-size: 1.5rem;

  h1 {
    margin-top: 100px;

    background-image: ${(props) => props.theme.colors.gradients.gold};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
`;

export const ArtistCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 40px;
`;

export const ArtistGradientWrapper = styled.div`
  max-width: max-content;
  max-height: max-content;

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.gradients.gold};
  padding: 4px;
  border-radius: 50%;
`;

export const ArtistWrapper = styled.div`
  max-width: fit-content;
  max-height: fit-content;

  transition: transform 250ms;

  border-radius: 50%;

  cursor: pointer;

  img {
    border-radius: 50%;
    max-width: fit-content;
    max-height: fit-content;

    overflow: hidden;
  }

  @media (pointer: fine) {
    h6 {
      display: none;
    }

    &:hover {
      img {
        border-radius: 50%;
        opacity: 0.5;
      }

      h6 {
        overflow: hidden;
        text-overflow: ellipsis;

        padding: 20px;
        display: revert;
        max-width: max-content;
        max-height: max-content;
        position: absolute;
      }
    }
  }

  :nth-of-type(1) {
    width: 150px;
    height: 150px;

    position: relative;
    left: 100px;
    z-index: 0;

    @media (pointer: fine) {
      &:hover {
        position: relative;

        z-index: 2;
        transform: scale(1.25);
        bottom: 20px;
        left: 95px;
      }
    }
  }

  :nth-of-type(2) {
    width: 175px;
    height: 175px;

    position: relative;
    left: 50px;
    z-index: 1;

    @media (pointer: fine) {
      &:hover {
        z-index: 3;
        transform: scale(1.25);
        bottom: 20px;
        left: 45px;
      }
    }
  }

  :nth-of-type(3) {
    width: 200px;
    height: 200px;

    position: relative;
    z-index: 2;

    @media (pointer: fine) {
      &:hover {
        z-index: 2;
        transform: scale(1.25);
        bottom: 20px;
      }
    }
  }

  :nth-of-type(4) {
    width: 175px;
    height: 175px;

    position: relative;
    right: 50px;
    z-index: 1;

    @media (pointer: fine) {
      &:hover {
        z-index: 2;
        transform: scale(1.25);
        right: 45px;
        bottom: 20px;
      }
    }
  }

  :nth-of-type(5) {
    width: 150px;
    height: 150px;
    position: relative;
    right: 100px;
    z-index: 0;

    @media (pointer: fine) {
      &:hover {
        z-index: 2;
        transform: scale(1.25);
        right: 95px;
        bottom: 20px;
      }
    }
  }
`;
