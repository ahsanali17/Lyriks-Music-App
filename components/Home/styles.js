import styled from 'styled-components';

export const MainContentWrapper = styled.main`
  grid-area: main-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 500px 300px 1fr;
  grid-template-areas:
    'main-content-search'
    'main-content-top-artists'
    'main-content-genres'
    'main-content-inner';

  overflow: auto;

  padding: 20px;

  background: ${(props) => props.theme.colors.gradients.blackRight};
`;
