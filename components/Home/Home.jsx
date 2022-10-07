import { MainContentWrapper } from './styles';
import { Search, TopArtists, Genres, SongArtistList } from '..';
import { useGetWorldChartsByGenreQuery } from '../../redux/services/shazamCoreApi';

const Home = () => {
  const { data, isFetching, error } = useGetWorldChartsByGenreQuery('POP');

  console.log("data:", data);
  
  if (isFetching) {
    return '...Loading - Test Loader';
  }

  if (error) {
    return 'Error - Test Error';
  }
  return (
    <MainContentWrapper>
      <TopArtists />
      <Search />
      <Genres />
      <SongArtistList data={data} />
    </MainContentWrapper>
  );
};

export default Home;
