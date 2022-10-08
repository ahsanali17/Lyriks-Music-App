import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const MusicPlayerWrapper = styled.div`
 display: flex;
 overflow: hidden;
 background-color: ${COLORS.blacks[200]};
 position: absolute;
 bottom: 0;
 width: 100%;
 height: 10%;
 z-index: 10;
`;

export const MusicPlayerContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 position: relative;
 padding-left: 3rem;
 padding-right: 3rem;
`;



export const ControlSeekbarWrapper = styled.div`
 display: grid;
`;

export const AudioPlayerVolumeBarWrapper = styled.div`
 display: grid;
 
`;