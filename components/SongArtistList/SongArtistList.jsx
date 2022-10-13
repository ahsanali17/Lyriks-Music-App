import { SongArtistCard } from '../';
import { CardWrapper } from './styles';
import { urlSuccess } from '../../utils/validationFunctions';
import { useSelector } from 'react-redux';

const SongArtistList = ({ data, isSearch }) => {
  let hasCoverArt;
  const { activeSong, isPlaying } = useSelector((state) => state.musicPlayer);

  if (isSearch) {
    data = data.tracks.hits.map(({ track }) => track);
  }
  
  return (
    <CardWrapper>
      {data.map(({images, title, subtitle, hub}, idx) => {
        hasCoverArt = images.coverart && urlSuccess(images.coverart);
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
