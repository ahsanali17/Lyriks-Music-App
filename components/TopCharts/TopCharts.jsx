import Image from 'next/image';
import Link from 'next/link';

import { useGetWorldChartsQuery } from '../../redux/services/shazamCoreApi';
import { Loader, Error } from '../';
import { TopChartsWrapper, TopChartHeading, ChartsList, Chart, Number, ChartTextContainer } from './styles';

const TopCharts = () => {
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
        {top5Charts.map(({ images, title, subtitle, artists}, idx) => (
          <Chart key={idx}>
            <Number>{idx + 1}</Number>
            <Image
              src={images.coverart}
              width={100}
              height={100}
              objectFit="cover"
            />
            <ChartTextContainer>
              <h5>{title}</h5>
              <Link href={`/artists/${artists.length && artists[0]?.adamid}`}>
                <h6>{subtitle}</h6>
              </Link>
            </ChartTextContainer>
          </Chart>
        ))}
      </ChartsList>
    </TopChartsWrapper>
  );
};

export default TopCharts;
