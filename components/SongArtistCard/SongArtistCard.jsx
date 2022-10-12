import Image from 'next/image';

import { CardWrapper, TextContainer } from './styles';

const SongArtistCard = ({ coverArt, title, subtitle }) => {
  return (
    <CardWrapper>
      <Image src={coverArt} width={220} height={225} objectFit="cover" />
      <TextContainer>
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
      </TextContainer>
    </CardWrapper>
  );
};

export default SongArtistCard;
