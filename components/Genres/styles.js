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
  scroll-snap-type: x mandatory;
  scroll-padding-left: 20px;
`;

export const GenreHeading = styled.div`
  display: flex;
  justify-content: center;

  position: sticky;
  width: 100%;
  top: 0;
  left: 0;

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

  white-space: nowrap;
  list-style: none;
`;

export const GradientBackground = styled.div`
  background: ${(props) => props.theme.colors.gradients.gold};
  padding: 6px;
`;

export const ArrowsWrapper = styled.div`
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

    opacity: 0.75;
    background: ${(props) => props.theme.colors.gradients.goldTransparent};
    border-radius: 50%;

    border: 1px solid ${(props) => props.theme.colors.white};
  }
`;

export const GenreCard = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
  width: 210px;

  scroll-snap-align: start;

  background: ${(props) => props.genreColor};
  cursor: pointer;
`;
