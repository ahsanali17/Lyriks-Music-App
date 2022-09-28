import Head from 'next/head';
import { HomeWrapper } from './styles';
import {
  Sidebar,
  MainContent,
  TopChartsTopArtistsContainer,
} from '../components';
import { ThemeProvider } from 'styled-components';
import { COLORS } from '../utils/constants';

const Home = () => {
  return (
    <>
      <Head>Lyriks</Head>
      <ThemeProvider theme={{ colors: COLORS }}>
        <HomeWrapper>
          <Sidebar />
          <MainContent />
          <TopChartsTopArtistsContainer />
        </HomeWrapper>
      </ThemeProvider>
    </>
  );
};

export default Home;
