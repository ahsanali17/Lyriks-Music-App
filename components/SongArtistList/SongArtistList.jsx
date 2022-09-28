import styles from './styles';
import { useGetWorldChartsQuery } from '../../services/shazamCoreApi';

const SongArtistList = () => {
  const { data, isFetching, error } = useGetWorldChartsQuery();

  return <div>SongArtistList</div>;
};

export default SongArtistList;
