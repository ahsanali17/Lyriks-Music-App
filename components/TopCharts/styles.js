import styled from 'styled-components';

export const TopChartsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  height: 100%;
  padding: 40px;

  @media (${(props) => props.theme.queries.smallMediumAndDown}) {
    padding: 0;
  }
`;

export const TopChartHeading = styled.div`
  h2 {
    font-size: 1.5rem;
    background-image: ${(props) => props.theme.colors.gradients.gold};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    margin: 20px 0;
    align-self: center;
  }
`;

export const ChartsList = styled.ol`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  gap: 50px;
  height: 100%;
  margin-top: 40px;

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

export const Chart = styled.li`
  display: flex;
  width: 100%;

  list-style: none;

  @media (pointer: fine) {
    &:hover {
      background: ${(props) =>
        props.theme.colors.gradients.goldVeryTransparent};
    }
  }

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    gap: 10px;

    img {
      flex: 1;
    }
  }

  @media (${(props) => props.theme.queries.smallMediumAndDown}) {
    gap: 5px;
  }
`;

export const Number = styled.h6`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  margin-right: 15px;

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    flex: 1;
    margin-right: 0;
  }

  @media (${(props) => props.theme.queries.smallMediumAndDown}) {
    flex: 0.25;
  }
`;

export const ChartTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  height: 100%;
  padding-left: 40px;

  line-height: 2;

  overflow: hidden;

  h5 {
    width: fit-content;
    height: fit-content;
    text-overflow: ellipsis;

    cursor: pointer;

    @media (pointer: fine) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  h6 {
    width: fit-content;
    height: fit-content;
    text-overflow: ellipsis;

    color: ${(props) => props.theme.colors.grays[200]};
    cursor: pointer;

    @media (pointer: fine) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    gap: 10px;
  }
`;
