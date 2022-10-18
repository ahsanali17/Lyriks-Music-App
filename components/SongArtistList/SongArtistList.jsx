import { useSelector } from 'react-redux';

import { SongArtistCard } from '../';
import { CardWrapper } from './styles';

const SongArtistList = ({ data, isSearch }) => {
  const { activeSong, isPlaying } = useSelector((state) => state.musicPlayer);
  const dataFromSearch = data?.tracks?.hits?.map(({ track }) => track);

  const dataToRender = isSearch ? dataFromSearch : data
  
  return (
    <CardWrapper>
      {dataToRender?.map(({images, title, subtitle, artists, hub}, idx) => {
        if (images.coverart && title && subtitle) {
          return (
            <SongArtistCard
              key={idx}
              coverArt={images.coverart}
              title={title}
              subtitle={subtitle}
              artist={artists.length && artists[0]?.adamid}
              activeSong={activeSong}
              isPlaying={isPlaying}
              song={hub?.actions[1]?.uri}
              songList={data}
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
