import GlobalStyles from '../../styles/GlobalStyles';
import { store } from '../../app/store';
import { Provider } from 'react-redux';

import { LayoutWrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
