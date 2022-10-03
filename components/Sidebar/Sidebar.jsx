import { Logo } from '../';
import { SidebarWrapper, SidebarItemContainer, SLink, ItemIcon, ItemLabel, ItemContainer } from './styles.js';
import {artists, albums, explore, home} from '../../assets/images/index';


const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo />
      {linksArray.map(({label, icon, to}) => (
        <SidebarItemContainer key={label}>
        
          <SLink href={to}>
            <ItemContainer>
              <ItemIcon>{icon}</ItemIcon>
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
    icon: <home />,
    to: "/",
  },
  {
    label: 'Explore',
    icon: <explore />,
    to: "/explore",
  },
  {
    label: 'Artists',
    icon: <artists />,
    to: "/artists",
  },
  {
    label: 'Albums',
    icon: <albums />,
    to: "/albums",
  },
]

export default Sidebar;
