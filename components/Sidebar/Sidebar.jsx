import { Logo } from '../';
import { SidebarWrapper, SidebarItemContainer, SLink, ItemIcon, ItemLabel, ItemContainer, Divider } from './styles.js';

import sidebarIcons from '../../assets/images/sidebarIcons/index';

const Sidebar = () => {
  const linksArray = [
    {label: 'Home', to: "/"},
    {label: 'Explorer', to: "/explorer"},
    {label: 'Artists', to: "/artists"},
    {label: 'Albums', to: "/albums"},
  ]
  
  return (
    <SidebarWrapper>
      <Logo />
      <Divider />
      {linksArray.map(({label, to}) => (
        <SidebarItemContainer key={label}>
          <SLink href={to}>
            <ItemContainer onClick={() => {console.log('button pressed')}}>
              <ItemIcon src={sidebarIcons[label]} height={30} />
              <ItemLabel>{label}</ItemLabel>
            </ItemContainer>
          </SLink>
        </SidebarItemContainer>
      ))}
    </SidebarWrapper>
  );
};



export default Sidebar;
