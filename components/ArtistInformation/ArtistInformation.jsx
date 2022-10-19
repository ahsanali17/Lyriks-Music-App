import Image from "next/image";

import { Search } from '../../components';
import { ArtistInformationWrapper, ArtistGradientWrapper, ArtistWrapper, ArtistTextInformation,
 RelatedSongsHeading, RelatedSongsList,RelatedSong, RelatedSongsTextContainer, Number } from "./styles";

const ArtistInformation = ({ artistData, songs }) => {
  return (
    <>
      <ArtistInformationWrapper>
          <Search searchGridArea={'artist-content-search'}/>
        <ArtistWrapper>
          <ArtistGradientWrapper>
              <Image src={artistData?.attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500')} width={450} height={450} />
          </ArtistGradientWrapper>
          <ArtistTextInformation>
              <h2>{artistData.attributes.name}</h2>
              <h3>{artistData.attributes.genreNames[0]}</h3>
          </ArtistTextInformation>
        </ArtistWrapper>
          <RelatedSongsHeading>
            <h2>Related Songs:</h2>
          </RelatedSongsHeading>
          <RelatedSongsList>
            {songs.map(({id, attributes}, idx)=> (
              <RelatedSong key={id}>
                <Number>{idx + 1}</Number>
                <Image src={attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')} width={125} height={125} objectFit="cover" />
                <RelatedSongsTextContainer>
                <h3>{attributes?.name}</h3>
                <h4>{attributes?.albumName}</h4>
                </RelatedSongsTextContainer>
              </RelatedSong>
            ))}
          </RelatedSongsList>
      </ArtistInformationWrapper>
    </>
  );
};

export default ArtistInformation;
