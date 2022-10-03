import Link from 'next/link';
import styled from 'styled-components';

export const SidebarWrapper = styled.nav`
  grid-area: sidebar;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr;

  background: ${(props) => props.theme.colors.gradients.blackLeft};
  border-right: 2px solid ${(props) => props.theme.colors.blacks[400]};
`;

export const SidebarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;
  height: fit-content;
`;

export const SLink = styled(Link)`
  display: flex;
  align-items; center;
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  padding: 0px;
`;

export const SidebarItem = styled.li`
  font-size: 1.5rem;
`;

export const SidebarItemIcon = styled.svg`

`;

export const SidebarItemLabel = styled.label`

`;