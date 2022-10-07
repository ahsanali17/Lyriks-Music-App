import Image from 'next/image';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import { useDispatch } from 'react-redux';

import {
  GenresWrapper,
  GenreHeading,
  GenresList,
  GradientBackground,
  ArrowsWrapper,
  GenreCard,
  ImageWrapper,
} from './styles';
import { genreImages } from '../../utils/constants';
import { allGenresWithColors } from '../../utils/constants';
import { selectGenre } from '../../features/currentSongArtistList';

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
                <h5>{genreArr[0]}</h5>
                <ImageWrapper>
                  <Image src={genreImages[idx]} width={80} height={80} />
                </ImageWrapper>
              </GenreCard>
            </GradientBackground>
          );
        })}
      </GenresList>
    </GenresWrapper>
  );
};

export default Genres;
