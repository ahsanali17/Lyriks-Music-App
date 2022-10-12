import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  height: 100%;
`;

export const LayoutInnerWrapper = styled.div`
  height: 100%;
`;

export const HomeWrapper = styled.div`
  --column-1-length: 250px;
  --column-2-length: minmax(700px, 3fr);
  --column-3-length: 500px;

  height: 100%;

  display: grid;
  grid-template-columns:
    var(--column-1-length)
    var(--column-2-length)
    var(--column-3-length);
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar main-content right-sidebar';

  background-color: ${(props) => props.theme.colors.blacks[100]};
  color: ${(props) => props.theme.colors.white};
`;