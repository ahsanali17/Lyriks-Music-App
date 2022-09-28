import { CardWrapper, TextContainer } from './styles';
import Image from 'next/image';

const SongArtistCard = ({ coverArt, title, subtitle }) => {
  return (
    <CardWrapper>
      <Image src={coverArt} width={220} height={225} objectFit="cover" />
      <TextContainer>
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
      </TextContainer>
    </CardWrapper>
  );
};

export default SongArtistCard;
