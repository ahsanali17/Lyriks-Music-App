import { SongArtistCard } from '../';
import { CardWrapper } from './styles';
import { useSelector } from 'react-redux';

const SongArtistList = ({ data, isSearch }) => {
  let hasCoverArt;
  const { activeSong, isPlaying } = useSelector((state) => state.musicPlayer);
  const dataFromSearch = data?.tracks?.hits?.map(({ track }) => track);

  const dataToRender = isSearch ? dataFromSearch : data
  
  return (
    <CardWrapper>
      {dataToRender?.map(({images, title, subtitle, hub}, idx) => {
        hasCoverArt = images.coverart;
        if (hasCoverArt && title && subtitle) {
          return (
            <SongArtistCard
              key={idx}
              coverArt={images.coverart}
              title={title}
              subtitle={subtitle}
              activeSong={activeSong}
              isPlaying={isPlaying}
              song={hub?.actions[1]?.uri}
              data={data[idx]}
              i={idx}
            />
          );
        }
      })}
    </CardWrapper>
  );
};

export default SongArtistList;
