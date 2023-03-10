import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { COLORS, QUERIES } from '../utils/constants';
import { Layout } from '../components';
import store from '../app/store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ colors: COLORS, queries: QUERIES }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
