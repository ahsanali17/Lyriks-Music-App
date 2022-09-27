import Head from 'next/head';
import { HomeWrapper } from './styles';
import {
  Search,
  Sidebar,
  SongArtistList,
  Logo,
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
          <Logo />
          <Search />
          <SongArtistList />
          <TopChartsTopArtistsContainer />
        </HomeWrapper>
      </ThemeProvider>
    </>
  );
};

export default Home;
