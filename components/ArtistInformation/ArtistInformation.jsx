import Image from "next/image";

import { ArtistInformationWrapper } from "./styles";

const ArtistInformation = ({ artistData, songs }) => {
  return <ArtistInformationWrapper>
    <Image src={artistData?.attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500')} width={500} height={500} />
      <ul>
        {songs.map(({id, attributes}) => (
          <li key={id}>
            <Image src={attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')} width={125} height={125} />
          </li>
        ))}
      </ul>
  </ArtistInformationWrapper>;
};

export default ArtistInformation;
