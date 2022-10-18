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

  @media (pointer: coarse) {
    margin-top: -40px;
  }

  @media (${(props) => props.theme.queries.verySmallAndDown}) {
    font-size: 1.25rem;
  }
`;

export const Heading = styled.h1`
  @media (pointer: fine) {
    margin-top: 100px;

    background-image: ${(props) => props.theme.colors.gradients.gold};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  @media (pointer: coarse) {
    display: none;
  }
`;

export const ArtistCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 40px;

  @media (pointer: coarse) {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'heading heading'
      'one one'
      'two three'
      'four five';
    gap: 40px;
  }
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
  width: fit-content;
  height: fit-content;

  border-radius: 50%;

  cursor: pointer;

  img,
  span {
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
        height: max-content;
        width: max-content;
        border-radius: 50%;
        opacity: 0.5;
      }

      h6 {
        display: revert;

        overflow: hidden;
        text-overflow: ellipsis;

        padding: 20px;
        display: revert;
        max-width: max-content;
        max-height: max-content;
        position: absolute;
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
          left: 20px;
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
  }

  @media (pointer: coarse) {
    h6 {
      display: none;
    }
    :nth-of-type(1) {
      grid-area: four;
      justify-self: center;
    }

    :nth-of-type(2) {
      grid-area: two;
      justify-self: center;
    }

    :nth-of-type(3) {
      grid-area: one;
      justify-self: center;
    }

    :nth-of-type(4) {
      grid-area: three;
      justify-self: center;
    }

    :nth-of-type(5) {
      grid-area: five;
      justify-self: center;
    }
  }
`;

export const TouchScreenHeading = styled.h1`
  @media (pointer: fine) {
    display: none;
  }

  @media (pointer: coarse) {
    display: revert;

    grid-area: heading;

    margin-top: 50px;
    background-image: ${(props) => props.theme.colors.gradients.gold};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    justify-self: center;
  }
`;

export const TouchScreenTextWrapper = styled.div`
  @media (pointer: fine) {
    display: none;
  }

  @media (pointer: coarse) {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    h6 {
      display: revert;
    }
  }
`;
