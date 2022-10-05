import GlobalStyles from '../../styles/GlobalStyles';
import { LayoutWrapper, HomeWrapper } from './styles';

import { Sidebar, TopChartsTopArtistsContainer } from '../index';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Head>Lyriks</Head>
      <HomeWrapper>
        <Sidebar />
        {children}
        <TopChartsTopArtistsContainer />
      </HomeWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
