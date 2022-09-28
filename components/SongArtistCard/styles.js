import styled from 'styled-components';

export const CardWrapper = styled.div`
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
  }

  h5 {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: ${(props) => props.theme.colors.grays[200]};
  }
`;
