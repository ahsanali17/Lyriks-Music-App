import styled from 'styled-components';

export const CardWrapper = styled.div`
  grid-area: main-content-inner;

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(0, min(100%/3, max(250px, 100%/5)))
  );
  place-content: center;
  gap: 40px;

  @media (${(props) => props.theme.queries.mediumAndDown}) {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(0, min(100%/2, max(250px, 100%/4)))
    );
  }

  @media (${(props) => props.theme.queries.smallAndDown}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
