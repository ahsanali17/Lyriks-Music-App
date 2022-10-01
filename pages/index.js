import Head from 'next/head';
import { HomeWrapper } from './styles';
import {
  Sidebar,
  MainContent,
  TopChartsTopArtistsContainer,
} from '../components';
import { ThemeProvider } from 'styled-components';
import { COLORS, QUERIES } from '../utils/constants';
import { Provider } from 'react-redux';
import store from '../app/store';

const Home = () => {
  return (
    <>
      <Head>Lyriks</Head>

      <Provider store={store}>
        <ThemeProvider theme={{ colors: COLORS, queries: QUERIES }}>
          <HomeWrapper>
            <Sidebar />
            <MainContent />
            <TopChartsTopArtistsContainer />
          </HomeWrapper>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default Home;
