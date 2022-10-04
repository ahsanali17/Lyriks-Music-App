import { Logo } from '../';
import { SidebarWrapper, SidebarItemContainer, SLink, ItemIcon, ItemLabel, ItemContainer, Divider } from './styles.js';

import { Home, Explorer, Artists, Albums} from '../../assets/images/sidebarIcons/index';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo />
      <Divider />
      {linksArray.map(({label, icon, to}) => (
        <SidebarItemContainer key={label}>
          <SLink href={to}>
            <ItemContainer onClick={() => {console.log('button pressed')}}>
              <ItemIcon src={icon} height={10} />
              <ItemLabel>{label}</ItemLabel>
            </ItemContainer>
          </SLink>
        </SidebarItemContainer>
      ))}
    </SidebarWrapper>
  );
};

const linksArray = [
  {
    label: 'Home',
    icon: Home,
    to: "/",
  },
  {
    label: 'Explore',
    icon: Explorer,
    to: "/explore",
  },
  {
    label: 'Artists',
    icon: Artists,
    to: "/artists",
  },
  {
    label: 'Albums',
    icon: Albums,
    to: "/albums",
  },
]

export default Sidebar;
