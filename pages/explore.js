import { Explore } from '../components';

const explore = ({apiKey}) => {
  return (
    <>
      <Explore apiKey={apiKey}/>
    </>
  );
};

export default explore;

export const getServerSideProps = () =>  {
  
  const apiKey = process.env.NEXT_PUBLIC_GEO_LOCATION_API_KEY;
  
  return {
    props: {
      apiKey,
    }  
  }
}