import styled from 'styled-components';

export const GenresWrapper = styled.div`
  grid-area: main-content-genres;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 0 20px;
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 20px;
`;

export const GenreHeading = styled.div`
  display: flex;
  justify-content: center;

  position: sticky;
  top: 0;
  left: 0;
  width: 100%;

  margin-bottom: 25px;

  h2 {
    font-size: 1.5rem;

    background-image: ${(props) => props.theme.colors.gradients.gold};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  margin-bottom: 40px;

  white-space: nowrap;
  list-style: none;
`;

export const GradientBackground = styled.div`
  background: ${(props) => props.theme.colors.gradients.gold};
  padding: 6px;

  @media (pointer: fine) {
    &:hover {
      transition: transform 250ms;
      transform: translateY(-8px);
      opacity: 0.875;
    }
  }
`;

export const ArrowsWrapper = styled.div`
  @media (pointer: fine) {
    position: absolute;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 26px;

    position: sticky;
    top: 0;
    left: 0;

    width: 100%;

    svg {
      padding: 4px;
      height: 15px;
      width: 15px;

      background: ${(props) => props.theme.colors.gradients.goldTransparent};
      border-radius: 50%;

      border: 1px solid ${(props) => props.theme.colors.white};
      cursor: pointer;

      @media (pointer: fine) {
        opacity: 0.75;

        &:hover {
          background: ${(props) => props.theme.colors.gradients.gold};
          opacity: 1;
        }
      }
    }
  }

  @media (pointer: coarse) {
    display: none;
  }
`;

export const GenreCard = styled.li`
  height: 100px;
  width: 210px;

  scroll-snap-align: start;

  background: ${(props) => props.genreColor};
  cursor: pointer;

  overflow: hidden;

  h5 {
    padding-top: 5px;
    padding-left: 10px;
    font-weight: 400;
    font-size: 1.5rem;
  }

  @media (pointer: coarse) {
    scroll-snap-type: x proximity;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  bottom: 30px;
  left: 20px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  transform: rotate(35deg);
`;

export const CurrentGenreContainer = styled.div`
  grid-area: main-content-discover-genre;

  height: max-content;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 20px;

  margin-bottom: 20px;

  h1 {
    font-size: 2.25rem;

    background-image: ${(props) => props.theme.colors.gradients.gold};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  h2 {
    font-size: 1.5rem;
  }
`;
