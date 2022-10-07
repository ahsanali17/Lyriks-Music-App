import {
  TopArtistsWrapper,
  ArtistCardsWrapper,
  ArtistGradientWrapper,
  ArtistWrapper,
} from './styles';
import { useGetWorldChartsQuery } from '../../redux/services/shazamCoreApi';
import Image from 'next/image';
import { returnFirst5ValidArtists } from '../../utils/validationFunctions';

const TopArtists = () => {
  const { data, isFetching, error } = useGetWorldChartsQuery();

  if (isFetching) {
    return '...Loading - Test Loader';
  }

  if (error) {
    return 'Error - Test Error';
  }

  const top5Artists = returnFirst5ValidArtists(data);

  const orderedTop5Artists = [
    top5Artists[3],
    top5Artists[1],
    top5Artists[0],
    top5Artists[2],
    top5Artists[4],
  ];

  return (
    <>
      <TopArtistsWrapper>
        <h1>Top Artists</h1>
        <ArtistCardsWrapper>
          {orderedTop5Artists.map(({ images }, idx) => {
            if (idx === 2) {
              return (
                <ArtistWrapper key={idx}>
                  <ArtistGradientWrapper>
                    <Image
                      src={images.background}
                      width={200}
                      height={200}
                      objectFit="cover"
                      priority
                    />
                  </ArtistGradientWrapper>
                </ArtistWrapper>
              );
            } else {
              return (
                <ArtistWrapper key={idx}>
                  <ArtistGradientWrapper>
                    <Image
                      src={images.background}
                      width={200}
                      height={200}
                      objectFit="cover"
                    />
                  </ArtistGradientWrapper>
                </ArtistWrapper>
              );
            }
          })}
        </ArtistCardsWrapper>
      </TopArtistsWrapper>
    </>
  );
};

export default TopArtists;
