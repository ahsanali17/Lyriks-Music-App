import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { CardOverlay, CardWrapper, PlayOrPauseWrapper, TextContainer } from './styles';
import { playPause, setActiveSong } from '../../redux/features/musicPlayer';
import { PlayOrPause } from '..';

const SongArtistCard = ({ coverArt, title, subtitle, isActive, isPlaying, i, song, data }) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <CardOverlay>
      <CardWrapper>
        <Image src={coverArt} width={220} height={225} objectFit="cover" />
        <PlayOrPauseWrapper>
          <PlayOrPause
            isPlaying={isPlaying}
            isActive={isActive}
            handlePlay={handlePlayClick}
            handlePause={handlePauseClick}
            song={song}
          />
        </PlayOrPauseWrapper>
        <TextContainer>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </TextContainer>
        <audio controls>
          <source src={song} type="audio/mp3" />
        </audio>
      </CardWrapper>
    </CardOverlay>
  );
};

export default SongArtistCard;
