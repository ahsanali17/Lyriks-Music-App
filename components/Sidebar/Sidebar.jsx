import { SidebarWrapper } from './styles.js';
import { Logo } from '../';
import Link from 'next/link.js';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo />
      <>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/explore'>Explore</Link></li>
          <li><Link href='/artists'>Artists</Link></li>
          <li><Link href='/top-charts'>Top Charts</Link></li>
        </ul>
      </>
    </SidebarWrapper>
  );
};

export default Sidebar;
