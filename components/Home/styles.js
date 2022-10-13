import styled from 'styled-components';

export const MainContentWrapper = styled.main`
  grid-area: main-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 500px 300px 80px 1fr;
  grid-template-areas:
    'main-content-search'
    'main-content-top-artists'
    'main-content-genres'
    'main-content-discover-genre'
    'main-content-inner';

  overflow: auto;

  padding: 20px;

  background: ${(props) => props.theme.colors.gradients.blackRight};

  @media (${(props) => props.theme.queries.mediumAndDown}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr 1fr 300px 80px 1fr;
    grid-template-areas:
      'main-content-search'
      'main-content-top-artists'
      'main-content-top-charts'
      'main-content-genres'
      'main-content-discover-genre'
      'main-content-inner';
  }

  gap: 80px;
`;

export const SmallerDeviceWrapper = styled.div`
  display: none;

  @media (${(props) => props.theme.queries.mediumAndDown}) {
    display: revert;
    margin: 20px 0;
  }
`;
