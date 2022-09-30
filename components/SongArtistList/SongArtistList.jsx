import { SongArtistCard } from '../';
import { CardWrapper } from './styles';

const SongArtistList = ({ data }) => {
  return (
    <CardWrapper>
      {data.map(({ key, images, title, subtitle }) => {
        if (images.coverart && title && subtitle) {
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
