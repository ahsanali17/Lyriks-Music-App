import { useSelector } from 'react-redux';

import { SongArtistCard } from '../';
import { CardWrapper } from './styles';

const SongArtistList = ({ data, isSearch }) => {
  let hasCoverArt;
  const { activeSong, isPlaying } = useSelector((state) => state.musicPlayer);
  const dataFromSearch = data?.tracks?.hits?.map(({ track }) => track);

  const dataToRender = isSearch ? dataFromSearch : data
  
  console.log(data)
  return (
    <CardWrapper>
      {dataToRender?.map(({images, title, subtitle, key, artists, hub}, idx) => {
        hasCoverArt = images.coverart;
        if (hasCoverArt && title && subtitle) {
          return (
            <SongArtistCard
              key={idx}
              coverArt={images.coverart}
              title={title}
              subtitle={subtitle}
              artist={artists.length && artists[0]?.adamid}
              songKey={key}
              activeSong={activeSong}
              isPlaying={isPlaying}
              song={hub?.action?.length && hub?.actions[1]?.uri}
              data={data}
            />
          );
        }
      })}
    </CardWrapper>
  );
};

export default SongArtistList;
