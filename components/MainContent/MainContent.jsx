import { MainContentWrapper } from './styles';
import { Search, Genres, SongArtistList } from '../';
import { useGetWorldChartsByGenreQuery } from '../../services/shazamCoreApi';

const MainContent = () => {
  const { data, isFetching, error } = useGetWorldChartsByGenreQuery('POP');

  if (isFetching) {
    return '...Loading - Test Loader';
  }

  if (error) {
    return 'Error - Test Error';
  }
  return (
    <MainContentWrapper>
      <Search />
      <Genres />
      <SongArtistList data={data} />
    </MainContentWrapper>
  );
};

export default MainContent;
