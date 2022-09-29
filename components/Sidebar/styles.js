import styled from 'styled-components';

export const SidebarWrapper = styled.nav`
  grid-area: sidebar;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr;

  background: ${(props) => props.theme.colors.gradients.blackLeft};
  border-right: 2px solid ${(props) => props.theme.colors.blacks[400]};
`;
