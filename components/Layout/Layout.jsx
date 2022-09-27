import GlobalStyles from '../../styles/GlobalStyles';

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
