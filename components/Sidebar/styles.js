import Link from 'next/link';
import Image from 'next/image';
 
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export const SidebarWrapper = styled.nav`
  grid-area: sidebar;

  display: grid;
  grid-template-columns: 1fr;

  background: ${(props) => props.theme.colors.gradients.blackLeft};
  border-right: 2px solid ${(props) => props.theme.colors.blacks[400]};
  align-items: center;
  justify-items: center;
  align-content: start;
`;

// SLinkContainer
export const SidebarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;
  height: fit-content;
  width:100%;
  :hover {
    color: blue;
  }
`;

// SLink
export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: 0px;
`;


export const ItemContainer = styled.a`
  display: flex;  
  align-items: center;
  margin: 8px 0;
`;

// SLinkIcon
export const ItemIcon = styled(Image)`
  border-color: red;
  height: 13px;
  width: 13px;
`;

// SLinkLabel
export const ItemLabel = styled.label`
  display: flex;
  flex: 1;
  margin-left: 10px;
`;

export const Divider = styled.div`
  height: 4rem;
  width: 100%;
  background: ${((theme) => theme.bg3)}
  margin: 1em 0;
`;