import styles from './styles';
import GlobalStyles from '../../styles/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <GlobalStyles />
      {children}
    </div>
  );
};

export default Layout;
