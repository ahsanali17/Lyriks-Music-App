import Image from 'next/image';
import { BsFillPlayFill } from 'react-icons/bs';

import { ImageWrapper } from '../../styles/resusableStyles';
import { CardOverlay, CardWrapper, TextContainer } from './styles';

const SongArtistCard = ({ coverArt, title, subtitle }) => {
  return (
    <CardOverlay>
      <CardWrapper>
        <ImageWrapper>
          <Image src={coverArt} width={220} height={225} objectFit="cover" />
          <BsFillPlayFill />
        </ImageWrapper>
        <TextContainer>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </TextContainer>
      </CardWrapper>
    </CardOverlay>
  );
};

export default SongArtistCard;
