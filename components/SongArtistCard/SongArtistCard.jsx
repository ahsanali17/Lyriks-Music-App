import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { ImageWrapper } from '../../styles/resusableStyles';
import { CardOverlay, CardWrapper, TextContainer } from './styles';
import { playPause, setActiveSong, setSongList, setCurrentSongData } from '../../redux/features/musicPlayer';
import { PlayOrPause } from '..';

const SongArtistCard = ({coverArt, title, subtitle, artist, songKey, activeSong, isPlaying, song, songList, data, i }) => {
  const dispatch = useDispatch();
  const currentSongImg = activeSong === song;
  
  const handlePlayClick = () => {
    dispatch(setActiveSong({song, i}));
    dispatch(setCurrentSongData({data}));
    dispatch(setSongList({songList}));
    dispatch(playPause(true));
  };
  
  const handlePauseClick = () => {
    dispatch(setActiveSong({song, i}));
    dispatch(playPause(false));
  };
  
  return (
    <CardOverlay>
      <CardWrapper>
        <ImageWrapper isSongPlaying={currentSongImg}>
          <Image src={coverArt} width={220} height={225} objectFit="cover"/>
          <PlayOrPause 
            isPlaying={isPlaying} 
            activeSong={activeSong} 
            handlePlay={handlePlayClick} 
            handlePause={handlePauseClick} 
            song={song}
          />
        </ImageWrapper>
        <TextContainer>
          <Link href={`/songs/${songKey}`}>
            <h3>{title}</h3>
          </Link>
          <Link href={`/artists/${artist}`}>
            <h5>{subtitle}</h5>
          </Link>
        </TextContainer>
      </CardWrapper>
    </CardOverlay>
  );
};

export default SongArtistCard;
