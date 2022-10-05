import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { HomeWrapper } from './styles';
import {
  Sidebar,
  Explore,
  TopChartsTopArtistsContainer,
} from '../components';
import { COLORS } from '../utils/constants';
import store from '../app/store';

const explore = () => {
  return (
    <>
      <Head>Lyriks</Head>

      <Provider store={store}>
        <ThemeProvider theme={{ colors: COLORS }}>
          <HomeWrapper>
            <Sidebar />
            <Explore />
            <TopChartsTopArtistsContainer />
          </HomeWrapper>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default explore;
