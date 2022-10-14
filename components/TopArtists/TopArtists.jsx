import { useSelector } from 'react-redux';
import Image from 'next/image';

import { TopArtistsWrapper, Heading, ArtistCardsWrapper, ArtistGradientWrapper, ArtistWrapper, TouchScreenHeading, TouchScreenTextWrapper } from './styles';
import { useGetWorldChartsByGenreOrSearchQuery } from '../../redux/services/shazamCoreApi';
import { returnFirst5ValidArtists } from '../../utils/validationFunctions';

const TopArtists = () => {
  const genreCode = useSelector((state) => state.currentSongArtistList.genre) || 'POP';
  const { data, isFetching, error } = useGetWorldChartsByGenreOrSearchQuery({ genreCode });

  if (isFetching) return '...Loading - Test Loader';

  if (error) return 'Error - Test Error';

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
        <Heading>Top Artists</Heading>
        <ArtistCardsWrapper>
          <TouchScreenHeading>Top Artists</TouchScreenHeading>
          {orderedTop5Artists.map(({ images, subtitle }, idx) => (
              <ArtistWrapper key={idx}>
                <ArtistGradientWrapper>
                  <Image
                    src={images.background}
                    width={200}
                    height={200}
                    objectFit="cover"
                    priority={idx === 2 ? true : false}
                  />
                  <h6>{subtitle}</h6>
                </ArtistGradientWrapper>
                <TouchScreenTextWrapper>
                  <h6>{subtitle}</h6>
                </TouchScreenTextWrapper>
              </ArtistWrapper>
            ))}
        </ArtistCardsWrapper>
      </TopArtistsWrapper>
    </>
  );
};

export default TopArtists;
