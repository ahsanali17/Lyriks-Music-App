import { useSelector } from 'react-redux';

import { MainContentWrapper, SmallerDeviceWrapper } from './styles';
import { Search, TopArtists, TopCharts, Genres, SongArtistList } from '..';
import { useGetWorldChartsByGenreOrSearchQuery } from '../../redux/services/shazamCoreApi';

const Home = () => {
  const { genreCode, searchQuery } = useSelector((state) => state.currentSongArtistList);
  const { data, isFetching, error } = useGetWorldChartsByGenreOrSearchQuery({ genreCode: genreCode || 'POP', searchQuery, });

  if (isFetching) return '...Loading - Test Loader';

  if (error) return 'Error - Test Error';

  return (
    <MainContentWrapper>
      <Search />
      <TopArtists />
      <SmallerDeviceWrapper>
        <TopCharts />
      </SmallerDeviceWrapper>
      <Genres />
      <SongArtistList data={data} isSearch={!!searchQuery} />
    </MainContentWrapper>
  );
};

export default Home;
