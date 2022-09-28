import { useRouter } from 'next/router';
import { useGetWorldChartsQuery } from '../../services/shazamCoreApi';
import { SongArtistCard } from '../';

const SongArtistList = () => {
  const currentPath = useRouter().route;
  const { data: worldChartsData, isFetching, error } = useGetWorldChartsQuery();

  const renderCorrectItems = () => {
    if (currentPath === '/') {
      return worldChartsData.map(({ key, title, subtitle }) => (
        <SongArtistCard key={key} title={title} subtitle={subtitle} />
      ));
    }
  };

  if (isFetching) {
    return '...Loading - Test Loader';
  }

  if (error) {
    return 'Error - Test Error';
  }

  return <>{renderCorrectItems()}</>;
};

export default SongArtistList;
