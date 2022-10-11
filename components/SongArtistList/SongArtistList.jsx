import { SongArtistCard } from '../';
import { CardWrapper } from './styles';
import { urlSuccess } from '../../utils/validationFunctions';
import { useSelector } from 'react-redux';

const SongArtistList = ({ data }) => {
  let hasCoverArt;
  const { isActive, isPlaying } = useSelector((state) => state.musicPlayer);

  return (
    <CardWrapper>
      {data.map(({ key, images, title, subtitle, i, hub}) => {
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
              i={i}
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
