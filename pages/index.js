import Head from 'next/head';
import { HomeWrapper } from './styles';
import {
  Search,
  Sidebar,
  SongArtistList,
  Logo,
  TopChartsTopArtistsContainer,
} from '../components';

const Home = () => {
  return (
    <>
      <Head>Lyriks</Head>

      <HomeWrapper>
        <Sidebar />
        <Logo />
        <Search />
        <SongArtistList />
        <TopChartsTopArtistsContainer />
      </HomeWrapper>
    </>
  );
};

export default Home;
