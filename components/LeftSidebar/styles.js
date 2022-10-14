import Image from 'next/image';
import styled from 'styled-components';

export const SidebarWrapper = styled.nav`
  grid-area: sidebar;

  display: grid;
  grid-template-columns: 1fr;

  background: ${(props) => props.theme.colors.gradients.blackLeft};
  border-right: 2px solid ${(props) => props.theme.colors.blacks[400]};
  align-items: center;
  justify-items: center;
  align-content: start;

  @media (${(props) => props.theme.queries.mediumAndDown}) {
    display: none;
  }
`;

export const SidebarItemList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const ItemContainer = styled.a`
  display: flex;
  align-items: center;

  padding-left: 50px;
  height: 60px;
  width: calc(100% - 50px);

  list-style: none;
  cursor: pointer;

  &:active {
    background: ${(props) => props.theme.colors.gradients.goldVeryTransparent};
  }

  @media (pointer: fine) {
    &:hover {
      background: ${(props) =>
        props.theme.colors.gradients.goldVeryTransparent};
    }
  }
`;

// SLinkIcon
export const ItemIcon = styled(Image)`
  height: 13px;
  width: 13px;
`;

// SLinkLabel
export const ItemLabel = styled.label`
  margin-left: 10px;
  background-image: ${(props) => props.theme.colors.gradients.goldLight};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  cursor: pointer;
`;

export const Divider = styled.div`
  margin-top: 80px;
`;
