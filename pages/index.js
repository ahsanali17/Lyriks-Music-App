import Head from 'next/head';
import { HomeWrapper } from './styles';
import {
  Search,
  Sidebar,
  SongArtistList,
  TopChartsTopArtistsContainer,
} from '../components';

const Home = () => {
  return (
    <>
      <Head>Lyriks</Head>

      <HomeWrapper>
        <Search />
        <Sidebar />
        <SongArtistList />
        <TopChartsTopArtistsContainer />
      </HomeWrapper>
    </>
  );
};

export default Home;
