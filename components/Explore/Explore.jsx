import { useState, useEffect } from 'react'
import axios from 'axios';

import { useGetChartsByCountryQuery } from '../../redux/services/shazamCoreApi';
import { setUsersCountry } from '../../redux/features/musicPlayer';

import { MainContentWrapper } from './styles';
import { Search, SongArtistList } from '..';

const Explore = ({apiKey}) => {
  const [userData, setUserData] = useState(null);
  const [err, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  
  
  const [userCountry, setUserCountry] = useState();
  const [userCountryCode, setUserCountryCode] = useState('US');
  
  const { data, isFetching, error } = useGetChartsByCountryQuery({country_code: userCountryCode});
  
  useEffect(() => {
    axios
      .get(`https://geolocation-db.com/json/${apiKey}`, {
        crossdomain: true
      })
      .then((res) => {setUserData(res), setUserCountry(res.data.country_name), setUserCountryCode(res.data.country_code)}) 
      .catch((error) => setError(error.message), console.log(err))
      .finally(() => setLoaded(true));
  }, [loaded]);
  
  if(userData?.length === 6 && userData?.data.city) {
    console.log("userCountry:", userCountry);
    console.log("userData:", userData);
    console.log("userCountryCode:", userCountryCode);
  }
  
  console.log("data", data)
  
  if (isFetching) return (
    <h1>'...Loading - Test Loader'</h1>,
    console.log("GetCountryQuery IsFetching", isFetching)
  );
  
  if (error) return (
    <h1>Error - Test Error</h1>,
    console.log("GetCountryQuery Error",error)
  );  

  
  return (
    <MainContentWrapper>
      <Search />
      <h1>Here's a list of songs trending in {userCountry}</h1>
      <SongArtistList data={data} />
    </MainContentWrapper>
  );
};

export default Explore;
