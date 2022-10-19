import { SongInformation, Loader, Error } from '../../../components';
import { useGetSongDetailsQuery, useGetArtistDetailsQuery } from '../../../redux/services/shazamCoreApi';

const SongPage = ({ songCode }) => {
  const { data: songData, isFetching: isSongFetching, error: songError } = useGetSongDetailsQuery({ songCode });
  const artistCode = songData?.artists[0]?.adamid;
  const { data, isFetching, error } = useGetArtistDetailsQuery({ artistCode });

  if (isSongFetching) return <Loader />;
  if (songError) return <Error />;

  if (isFetching) return <Loader />;
  if (error) return <Error />;


  return <SongInformation artistData={data?.artists[artistCode]} songs={Object.values(data?.songs)} songData={songData?.sections.length && songData?.sections[1]} />;
}

export default SongPage;

export const getServerSideProps = async (context) => {
  const songCode = context?.params?.id;

  return {
    props: { songCode },
  };
};