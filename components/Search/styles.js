import styled from 'styled-components';

export const SearchWrapper = styled.div`
  grid-area: main-content-search;

  display: flex;
  justify-content: center;
  flex: 1;

  padding-top: 10px;
`;

export const GradientWrapper = styled.div`
  position: relative;
  text-indent: 15px;

  display: flex;
  flex: 0.5;
  height: 35px;

  padding: 2px;
  background: ${(props) => props.theme.colors.gradients.gold};
  border-radius: 10px;

  input {
    width: 100%;
    border: none;
    outline: none;
    padding-top: 3.75px;
    border-radius: 10px;
    caret-color: ${(props) => props.theme.colors.white};

    text-indent: 45px;
    font-family: roboto, sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1rem;
    letter-spacing: 0.5px;

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blacks[300]};
  }
`;

export const IconWrapper = styled.div`
  svg {
    width: 15px;
    height: 15px;

    position: absolute;
    top: 12.25px;
    left: 15px;

    color: ${(props) => props.theme.colors.grays[100]};
  }
`;
