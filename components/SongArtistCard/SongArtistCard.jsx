import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { CardOverlay, CardWrapper, PlayOrPauseWrapper, TextContainer } from './styles';
import { playPause, setActiveSong, setSongList } from '../../redux/features/musicPlayer';
import { PlayOrPause } from '..';

const SongArtistCard = ({coverArt, title, subtitle, activeSong, isPlaying, song, songList, data, i }) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(setSongList({songList}));
    dispatch(playPause(true));
  };
  
  const handlePauseClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(false));
  };

  return (
    <CardOverlay>
      <CardWrapper>
        <Image src={coverArt} width={220} height={225} objectFit="cover"/>
        <PlayOrPauseWrapper>
          <PlayOrPause 
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
