import {
  GenresWrapper,
  GenreHeading,
  GenresList,
  GradientBackground,
  ArrowsWrapper,
  GenreCard,
} from './styles';
import { allGenresWithColors } from '../../utils/constants';

import { ImArrowLeft, ImArrowRight } from 'react-icons/im';

const Genres = () => {
  const apiGenresNames = Object.keys(allGenresWithColors);
  const uiGenres = Object.values(allGenresWithColors);

  return (
    <GenresWrapper>
      <GenreHeading>
        <h2>Genres</h2>
        <ArrowsWrapper>
          <ImArrowLeft />
          <ImArrowRight />
        </ArrowsWrapper>
      </GenreHeading>

      <GenresList>
        {uiGenres.map((genreArr, idx) => {
          genreName = genreArr[0];
          genreColor = genreArr[1];
          return (
            <GradientBackground key={idx}>
              <GenreCard genreColor={genreArr[1]}>{genreArr[0]}</GenreCard>
            </GradientBackground>
          );
        })}
      </GenresList>
    </GenresWrapper>
  );
};

export default Genres;
