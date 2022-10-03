import { Logo } from '../';
import { SidebarWrapper, SidebarItemContainer, SLink, SidebarItemIcon, SidebarItemLabel } from './styles.js';
import {artists, albums, explore, home} from '../../assets/images/index';


const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo />
      <>
        {/* <SidebarItemFrame>
          <Link exact href='/'><SidebarItem>Home</SidebarItem></Link>
            
          <Link exact href='/explore'><SidebarItem>Explore</SidebarItem></Link>
            
          <Link exact href='/artists'><SidebarItem>Artists</SidebarItem></Link>
            
          <Link exact href='/albums'><SidebarItem>Albums</SidebarItem></Link>
        </SidebarItemFrame> */}
        {linksArray.map(({label, icon, to}) => (
          <SLink href={to}>
            <SidebarItemContainer key={label}>
                <SidebarItemIcon>{icon}</SidebarItemIcon>
                <SidebarItemLabel>{label}</SidebarItemLabel>
            </SidebarItemContainer>
          </SLink>
        ))}
      </>
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
