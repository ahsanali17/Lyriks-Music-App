import { ImArrowLeft, ImArrowRight } from 'react-icons/im';

import {
  GenresWrapper,
  GenreHeading,
  GenresList,
  GradientBackground,
  ArrowsWrapper,
  GenreCard,
} from './styles';
import { allGenresWithColors } from '../../utils/constants';
import { selectGenre } from '../../features/currentSongArtistList';
import { useDispatch } from 'react-redux';

const Genres = () => {
  const dispatch = useDispatch();
  const uiGenres = Object.values(allGenresWithColors);
  const apiGenresNames = Object.keys(allGenresWithColors);

  const handleGenreChange = (idx) => {
    const genre = apiGenresNames[idx];

    return function () {
      dispatch(selectGenre(genre));
    };
  };

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
          return (
            <GradientBackground key={idx}>
              <GenreCard
                genreColor={genreArr[1]}
                onClick={handleGenreChange(idx)}
              >
                {genreArr[0]}
              </GenreCard>
            </GradientBackground>
          );
        })}
      </GenresList>
    </GenresWrapper>
  );
};

export default Genres;
