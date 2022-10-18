import styled from "styled-components";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  object-fit: contain;

  height: 100vh;
  width: 100%;

  margin-top: 100px;

  background: ${(props) => props.theme.colors.gradients.blackRight};

  h1 {
    margin-top: 2px;

    font-weight: 500;
    color: ${props => props.theme.colors.white};
  }
`