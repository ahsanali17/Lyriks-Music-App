import styled from 'styled-components';
import { OverlayWrapper } from '../../styles/resusableStyles';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 325px;
  width: 250px;

  background: ${(props) => props.theme.colors.gradients.goldTransparent};
  border-radius: 20px;

  cursor: pointer;

  @media (${(props) => props.theme.queries.mediumAndDown}) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const PlayOrPauseWrapper = styled.div`
  --tw-bg-opacity: 0.5;
  justify-content: center;
  align-items: center;
  display: none;
  position: absolute;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  margin-top: 10px;

  h3 {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-weight: 600;
    line-height: 1.75;

    @media (pointer: fine) {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  h5 {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: ${(props) => props.theme.colors.grays[200]};

    @media (pointer: fine) {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export const CardOverlay = styled(OverlayWrapper)`
  @media (pointer: fine) {
    &:hover {
      background: ${(props) => props.theme.colors.gradients.gold};
      border-radius: 20px;
    }
  }
`;
