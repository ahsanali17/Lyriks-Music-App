import Link from 'next/link';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const SidebarWrapper = styled.nav`
  grid-area: sidebar;

  display: grid;
  grid-template-columns: 1fr;

  background: ${(props) => props.theme.colors.gradients.blackLeft};
  border-right: 2px solid ${(props) => props.theme.colors.blacks[400]};
`;

export const SidebarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ItemContainer = styled.div`
  margin: 8px 0;
  :hover {
    box-shadow: inset 0 0 0 1px ${COLORS.gradients.goldTransparent}
  };
`;

export const ItemIcon = styled.div`
  display: flex;
  
  svg {
    font-size: 20px;
  }

`;

export const ItemLabel = styled.label`
  display: block;
  flex: 1;
  margin-left: 10px;
`;