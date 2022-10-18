import { ArtistInformation, Loader, Error } from '../../../components';
import { useGetArtistDetailsQuery } from '../../../redux/services/shazamCoreApi';

const ArtistPage = ({ artistCode }) => {
  const { data, isFetching, error } = useGetArtistDetailsQuery({ artistCode });
  if (isFetching) return <Loader />;

  if (error) return <Error />;
  
  return <ArtistInformation artistData={data?.artists[artistCode]} songs={Object.values(data?.songs)} />;
}

export default ArtistPage;

export const getServerSideProps = async (context) => {
  const artistCode = context?.params?.id;

  return {
    props: { artistCode },
  };
};