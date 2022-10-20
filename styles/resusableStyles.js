import styled from 'styled-components';

export const OverlayWrapper = styled.div`
  @media (pointer: fine) {
    &:hover {
      height: max-content;
      width: max-content;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  @media (pointer: fine) {
    svg {
      display: ${props => props.isSongPlaying ? 'revert' : 'none'};
      position: absolute;
      inset: 0;
      margin: auto;

      width: 25%;
      height: 25%;
    }

    &:hover {
      img {
        opacity: 0.75;
      }

      svg {
        display: revert;
      }
    }
  }
`;
