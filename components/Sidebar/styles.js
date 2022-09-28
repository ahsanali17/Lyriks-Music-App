import styled from 'styled-components';

export const SidebarWrapper = styled.nav`
  grid-area: sidebar;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr;

  background-color: ${(props) => props.theme.colors.blacks[200]};
`;
