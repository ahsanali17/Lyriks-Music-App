import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  object-fit: contain;

  height: 100vh;
  width: 100%;

  background: ${(props) => props.theme.colors.gradients.blackRight};


  svg, img, span, path {
    position: relative;
    top: 150px;
  }

  h1 {
    position: relative;
    top: 150px;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
  }
`