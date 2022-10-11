import { SongArtistCard } from '../';
import { CardWrapper } from './styles';
import { urlSuccess } from '../../utils/validationFunctions';
import { useSelector } from 'react-redux';

const SongArtistList = ({ data, isSearch }) => {
  let hasCoverArt;
  const { isActive, isPlaying } = useSelector((state) => state.musicPlayer);

  if (isSearch) {
    data = data.tracks.hits.map(({ track }) => track);
  }

  return (
    <CardWrapper>
      {data.map(({ key, images, title, subtitle, hub}) => {
        hasCoverArt = images.coverart && urlSuccess(images.coverart);

        if (hasCoverArt && title && subtitle) {
          return (
            <SongArtistCard
              key={key}
              coverArt={images.coverart}
              title={title}
              subtitle={subtitle}
              isActive={isActive}
              isPlaying={isPlaying}
              i={data?.lastIndexOf(title)}
              song={hub?.actions[1]?.uri}
              data={hub}
            />
          );
        }
      })}
    </CardWrapper>
  );
};

export default SongArtistList;
