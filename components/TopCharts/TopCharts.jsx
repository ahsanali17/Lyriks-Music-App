import Image from 'next/image';
import Link from 'next/link';

import { useGetWorldChartsQuery } from '../../redux/services/shazamCoreApi';
import { Loader, Error, ArtistSongPlayer } from '../';
import { TopChartsWrapper, TopChartHeading, ChartsList, Chart, Number, ChartTextContainer } from './styles';
import { useSelector } from 'react-redux';

const TopCharts = () => {
  const { isPlaying, activeSong } = useSelector((state) => state.musicPlayer);
  
  const { data, isFetching, error } = useGetWorldChartsQuery();
  
  if (isFetching) return <Loader />;

  if (error)  return <Error />;

  const top5Charts = data.filter((artist) => artist?.images?.coverart).slice(0, 5);

  return (
    <TopChartsWrapper>
      <TopChartHeading>
        <h2>Top Charts</h2>
      </TopChartHeading>
      <ChartsList>
        {top5Charts.map(({ images, title, subtitle, key, artists}, idx) => (
          <Chart key={idx}>
            <Number>{idx + 1}</Number>
            <Image
              src={images.coverart}
              width={100}
              height={100}
              objectFit="cover"
            />
            <ChartTextContainer>
              <Link href={`/songs/${key}`}>
                <h5>{title}</h5>
              </Link>
              <Link href={`/artists/${artists.length && artists[0]?.adamid}`}>
                <h6>{subtitle}</h6>
              </Link>
              <ArtistSongPlayer song={top5Charts[idx]?.hub.actions[1]?.uri} data={top5Charts[idx]} i={idx} isPlaying={isPlaying} activeSong={activeSong} songList={top5Charts} />
            </ChartTextContainer>
          </Chart>
        ))}
      </ChartsList>
    </TopChartsWrapper>
  );
};

export default TopCharts;
