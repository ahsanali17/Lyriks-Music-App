import { MainContentWrapper } from './styles';
import { Search, Genres, SongArtistList } from '../';

const MainContent = () => {
  return (
    <MainContentWrapper>
      <Search />
      <Genres />
      <SongArtistList />
    </MainContentWrapper>
  );
};

export default MainContent;
