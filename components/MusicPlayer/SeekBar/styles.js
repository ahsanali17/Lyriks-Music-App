import styled from 'styled-components';

export const SliderContainer = styled.div`
 --progress-bar-height: 4px;
 --thumb-width: 20px;
 --thumb-height: 20px;
 
 position: relative;
 width: 100%;

 &::before {
  content: '';
  background-color: white;
  width: 99%;
  height: calc(var(--progress-bar-height) - 1px);
  display: block;
  position: absolute;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
 }
`;
export const ProgressBarCover = styled.div`
 background-color: rgb(218, 55, 145);
 width: 0%;
 height: var(--progress-bar-height);
 display: block;
 position: absolute;
 border-radius: 10px;
 top: 50%;
 transform: translateY(-50%);
 z-index: 1;
 user-select: none;
 pointer-events: none;
`;
export const Thumb = styled.div`
 width: var(--thumb-width);
 height: var(--thumb-height);
 box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.753);
 z-index: 3;
 background: rgb(252, 255, 25, 1);
 position: absolute;
 border-radius: 50%;
 top: 50%;
 transform: translate(0%, -50%);
 pointer-events: none;
 user-select: none;
 `;
 
 export const AudioInput = styled.input`
 -webkit-appearance: none;
 background-color: rgba(240, 9, 9, 0.397);
 height: var(--progress-bar-height);
 width: 100%;
 cursor: pointer;
 opacity: 1;
 margin: 0 auto;
 
 &::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--thumb-width);
  height: var(--thumb-height);
 
  background: #350f2d;
  border: 1px solid #000000;
  border-radius: 50%;
  cursor: pointer;
 }
 `;