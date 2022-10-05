import { Logo } from '../';
import { SidebarWrapper, SidebarItemContainer, SidebarItemList, ItemIcon, ItemLabel, ItemContainer, Divider } from './styles.js';
import Link from 'next/link';

import sidebarIcons from '../../assets/images/sidebarIcons/index';

const linksArray = [
  {label: 'Home', to: "/home"},
  {label: 'Explore', to: "/explore"},
  {label: 'Artists', to: "/artists"},
  {label: 'Albums', to: "/albums"},
];

const Sidebar = () => {
  
  return (
    <SidebarWrapper>
      <Logo />
      <Divider />
      {linksArray.map(({label, to}) => (
        <SidebarItemContainer>
          <SidebarItemList key={label}>
            <Link href={to}>
              <ItemContainer onClick={() => {console.log('button pressed')}}>
                <ItemIcon src={sidebarIcons[label]}/>
                <ItemLabel>{label}</ItemLabel>
              </ItemContainer>
            </Link>
          </SidebarItemList>
        </SidebarItemContainer>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
