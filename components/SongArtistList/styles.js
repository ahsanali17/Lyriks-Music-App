import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(0, min(100%/3, max(250px, 100%/5)))
  );
  place-content: center;
  gap: 20px;
`;
