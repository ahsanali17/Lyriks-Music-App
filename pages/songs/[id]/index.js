import { SongInformation, Loader, Error } from '../../../components';
import { useGetSongDetailsQuery, useGetArtistDetailsQuery } from '../../../redux/services/shazamCoreApi';

const SongPage = ({ songCode }) => {
  const { data: songData, isFetching: isSongFetching, error: songError } = useGetSongDetailsQuery({ songCode });

  if (isSongFetching) return <Loader />;

  if (songError) return <Error />;

  return <SongInformation songData={songData?.sections.length && songData} />;
}

export default SongPage;

export const getServerSideProps = async (context) => {
  const songCode = context?.params?.id;

  return {
    props: { songCode },
  };
};