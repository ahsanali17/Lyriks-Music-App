import { CardWrapper, TextContainer } from './styles';

const SongArtistCard = ({ title, subtitle }) => {
  return (
    <CardWrapper>
      <TextContainer>
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
      </TextContainer>
    </CardWrapper>
  );
};

export default SongArtistCard;
