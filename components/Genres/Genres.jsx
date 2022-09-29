import {
  GenresWrapper,
  GenreHeading,
  GenresList,
  GradientBackground,
  GenreCard,
} from './styles';
import { allGenresWithColors } from '../../utils/constants';

const Genres = () => {
  const apiGenresNames = Object.keys(allGenresWithColors);
  const uiGenres = Object.values(allGenresWithColors);

  let genreName;
  let genreColor;

  return (
    <GenresWrapper>
      <GenreHeading>
        <h2>Genres</h2>
      </GenreHeading>
      <GenresList>
        {uiGenres.map((genreArr, idx) => {
          genreName = genreArr[0];
          genreColor = genreArr[1];

          return (
            <GradientBackground key={idx}>
              <GenreCard genreColor={genreColor}>{genreName}</GenreCard>
            </GradientBackground>
          );
        })}
      </GenresList>
    </GenresWrapper>
  );
};

export default Genres;
