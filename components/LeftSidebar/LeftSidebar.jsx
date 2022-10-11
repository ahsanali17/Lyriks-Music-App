import Link from 'next/link';

import { Logo } from '..';
import {
  SidebarWrapper,
  SidebarItemContainer,
  SidebarItemList,
  ItemIcon,
  ItemLabel,
  ItemContainer,
  Divider,
} from './styles.js';
import sidebarIcons from '../../assets/images/sidebarIcons/index';

const linksArray = [
  { label: 'Home', to: '/home' },
  { label: 'Explore', to: '/explore' },
  { label: 'Artists', to: '/artists' },
  { label: 'Albums', to: '/albums' },
];

const LeftSidebar = () => {
  return (
    <SidebarWrapper>
      <Logo />
      <Divider />
      <SidebarItemList>
        {linksArray.map(({ label, to }) => (
          <Link key={label} href={to}>
            <ItemContainer
              onClick={() => {
                console.log('button pressed');
              }}
            >
              <ItemIcon src={sidebarIcons[label]} />
              <ItemLabel>{label}</ItemLabel>
            </ItemContainer>
          </Link>
        ))}
      </SidebarItemList>
    </SidebarWrapper>
  );
};

export default LeftSidebar;
