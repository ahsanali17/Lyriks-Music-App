import styled from 'styled-components';

export const MainContentWrapper = styled.main`
  grid-area: main-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 200px 1fr;
  grid-template-areas:
    'main-content-search'
    'main-content-genres'
    'main-content-inner';

  overflow: auto;
`;
