import React, {useState} from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import { LayoutWrapper, HomeWrapper } from './styles';

import { LeftSidebar, MusicPlayer, RightSidebar } from '../index';
import Head from 'next/head';

const Layout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Head>Lyriks</Head>
      <HomeWrapper>
        <LeftSidebar />
        {children}
        <RightSidebar />
        {isActive && (<MusicPlayer />)}
      </HomeWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
