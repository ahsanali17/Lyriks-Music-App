import styled from 'styled-components';

export const TopChartsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  padding: 40px;

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
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
  gap: 50px;
  height: 100%;
  width: 100%;
  margin-top: 40px;
`;

export const Chart = styled.li`
  display: flex;
  height: 100%;

  list-style: none;

  @media (pointer: fine) {
    &:hover {
      background: ${(props) =>
        props.theme.colors.gradients.goldVeryTransparent};
    }
  }

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    width: 100%;
    gap: 10px;
  }
`;

export const Number = styled.h6`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;

  font-size: 0.75rem;
`;

export const ChartTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding-top: 10px;
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
`;
