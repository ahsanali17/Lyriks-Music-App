import { SongArtistCard } from '../';
import { CardWrapper } from './styles';
import { urlSuccess } from '../../utils/validationFunctions';

const SongArtistList = ({ data, isSearch }) => {
  let hasCoverArt;

  if (isSearch) {
    data = data.tracks.hits.map(({ track }) => track);
  }

  return (
    <CardWrapper>
      {data.map(({ key, images, title, subtitle }) => {
        hasCoverArt = images?.coverart && urlSuccess(images.coverart);

        if (hasCoverArt && title && subtitle) {
          return (
            <SongArtistCard
              key={key}
              coverArt={images.coverart}
              title={title}
              subtitle={subtitle}
            />
          );
        }
      })}
    </CardWrapper>
  );
};

export default SongArtistList;
