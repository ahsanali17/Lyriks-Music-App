import { MainContentWrapper } from './styles';
import { Search, SongArtistList } from '..';
import { useGetWorldChartsByGenreQuery } from '../../services/shazamCoreApi';

const Explore = () => {
  
  const { data, isFetching, error } = useGetWorldChartsByGenreQuery('ROCK');
  
  if (isFetching) {
    return '...Loading - Test Loader';
  }

  if (error) {
    return 'Error - Test Error';
  }
  
  return (
    <MainContentWrapper>
      <Search />
      <SongArtistList data={data} />
    </MainContentWrapper>
  );
};

export default Explore;
