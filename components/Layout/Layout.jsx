import GlobalStyles from '../../styles/GlobalStyles';
import { LayoutWrapper, HomeWrapper } from './styles';

import { LeftSidebar, RightSidebar } from '../index';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Head>Lyriks</Head>
      <HomeWrapper>
        <LeftSidebar />
        {children}
        <RightSidebar />
      </HomeWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
