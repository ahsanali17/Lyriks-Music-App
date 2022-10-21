import Image from 'next/image';

import LoaderSVG from '../../assets/loader.svg'; 
import { LoaderWrapper } from './styles';

const Loader = ({ title }) => {
  return (
    <LoaderWrapper>
      <h1>{title || 'Loading...'}</h1>
      <Image src={LoaderSVG}  />
    </LoaderWrapper>
  )
};

export default Loader;
