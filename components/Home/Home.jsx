import { useSelector } from 'react-redux';

import { MainContentWrapper } from './styles';
import { Search, TopArtists, Genres, SongArtistList } from '..';
import { useGetWorldChartsByGenreOrSearchQuery } from '../../redux/services/shazamCoreApi';

const Home = () => {
  const genreCode =
    useSelector((state) => state.currentSongArtistList.genre) || 'POP';

  const searchQuery = useSelector(
    (state) => state.currentSongArtistList.searchQuery
  );

  const isSearch = searchQuery ? true : false;

  const { data, isFetching, error } = useGetWorldChartsByGenreOrSearchQuery({
    genreCode,
    searchQuery,
  });

  console.log("data:", data);
  
  if (isFetching) {
    return '...Loading - Test Loader';
  }

  if (error) {
    return 'Error - Test Error';
  }

  return (
    <MainContentWrapper>
      <Search />
      <TopArtists />
      <Genres />
      <SongArtistList data={data} isSearch={isSearch} />
    </MainContentWrapper>
  );
};

export default Home;
