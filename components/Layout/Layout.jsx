import React, {useState} from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import { LayoutWrapper, HomeWrapper } from './styles';

import { LeftSidebar, MusicPlayer, RightSidebar } from '../index';
import Head from 'next/head';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const { isPlaying, isActive } = useSelector((state) => state.musicPlayer);

  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Head>Lyriks</Head>
      <HomeWrapper>
        <LeftSidebar />
        {children}
        <RightSidebar />
        {isPlaying && isActive && 
          (<MusicPlayer />)
        }
      </HomeWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
