import React, {useState} from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import { LayoutWrapper, HomeWrapper } from './styles';

import { LeftSidebar, MusicPlayer, RightSidebar } from '../index';
import Head from 'next/head';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const { isActive, activeSong } = useSelector((state) => state.musicPlayer);

  const issdef = !isActive;
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Head>Lyriks</Head>
      <HomeWrapper>
        <LeftSidebar />
        {children}
        <RightSidebar />
        {activeSong?.length && isActive &&
          (<MusicPlayer />)
        }
      </HomeWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
