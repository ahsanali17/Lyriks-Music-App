import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';

import { Loader, Error } from '../';
import { TopArtistsWrapper, Heading, ArtistCardsWrapper, ArtistGradientWrapper, ArtistWrapper, TouchScreenHeading, TouchScreenTextWrapper } from './styles';
import { useGetWorldChartsByGenreOrSearchQuery } from '../../redux/services/shazamCoreApi';

const TopArtists = () => {
  const genreCode = useSelector((state) => state.currentSongArtistList.genreCode) || 'POP';
  const { data, isFetching, error } = useGetWorldChartsByGenreOrSearchQuery({ genreCode });

  if (isFetching) return <Loader />;

  if (error) return <Error />;

  const uniqueArtistsData = (arrOfArtists) => {
    let artistNames = [];

    return arrOfArtists.map(artist => {
      if(!artistNames.includes(artist?.subtitle)) {
        artistNames.push(artist?.subtitle);
        return artist
      } else {
        return {};
      }
    })
  }

  const top5Artists = uniqueArtistsData(data).filter(artist => {
    return artist?.images?.background && artist?.subtitle
  })

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
          {orderedTop5Artists.map(({ images, subtitle, artists, key }, idx) => (
            <Link href={`/artists/${artists[0].adamid}`} key={key}>
              <ArtistWrapper>
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
            </Link>
            ))}
        </ArtistCardsWrapper>
      </TopArtistsWrapper>
    </>
  );
};

export default TopArtists;
