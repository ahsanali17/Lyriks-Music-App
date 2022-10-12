import Image from 'next/image';

import { CardOverlay, CardWrapper, PlayOrPauseWrapper, TextContainer } from './styles';
import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../../redux/features/musicPlayer';
import { PlayOrPause } from '..';

const SongArtistCard = ({coverArt, title, subtitle, activeSong, isPlaying, song, data, id,}) => {
  const dispatch = useDispatch();
  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, id}));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false)); 
  };
  return (
    <CardOverlay>
      <CardWrapper>
        <Image src={coverArt} width={220} height={225} objectFit="cover"/>
        <PlayOrPauseWrapper >
          <PlayOrPause 
            key={id}
            isPlaying={isPlaying} 
            activeSong={activeSong} 
            handlePlay={handlePlayClick} 
            handlePause={handlePauseClick} 
            song={song}
          />
        </PlayOrPauseWrapper>
        <TextContainer>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </TextContainer>
      </CardWrapper>
    </CardOverlay>
  );
};

export default SongArtistCard;
