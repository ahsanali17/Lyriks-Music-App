import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 325px;
  width: 250px;

  background: ${(props) => props.theme.colors.gradients.goldTransparent};
  border-radius: 20px;
`;

export const TextContainer = styled.div`
  width: 100%;
`;
