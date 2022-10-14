import Image from 'next/image';

import { useGetWorldChartsQuery } from '../../redux/services/shazamCoreApi';
import { TopChartsWrapper, TopChartHeading, ChartsList, Chart, Number, ChartTextContainer } from './styles';

const TopCharts = () => {
  const { data, isFetching, error } = useGetWorldChartsQuery();

  if (isFetching) return 'Loading...';

  if (error)  return 'Error';

  const top5Charts = data.filter((artist) => artist?.images?.coverart).slice(0, 5);

  return (
    <TopChartsWrapper>
      <TopChartHeading>
        <h2>Top Charts</h2>
      </TopChartHeading>
      <ChartsList>
        {top5Charts.map(({ images, title, subtitle }, idx) => (
          <Chart>
            <Number>{idx + 1}</Number>
            <Image
              src={images.coverart}
              width={100}
              height={100}
              objectFit="cover"
            />
            <ChartTextContainer>
              <h5>{title}</h5>
              <h6>{subtitle}</h6>
            </ChartTextContainer>
          </Chart>
        ))}
      </ChartsList>
    </TopChartsWrapper>
  );
};

export default TopCharts;
