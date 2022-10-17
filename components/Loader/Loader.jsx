import Image from 'next/image';

import LoaderSVG from '../../assets/loader.svg'; 
import { LoaderWrapper } from './styles';

const Loader = ({ title }) => {
  return (
    <LoaderWrapper>
      <Image src={LoaderSVG}  />
      <h1>{title || 'Loading...'}</h1>
    </LoaderWrapper>
  )
};

export default Loader;
