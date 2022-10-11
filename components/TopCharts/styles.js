import styled from 'styled-components';

export const TopChartsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  padding: 40px;
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
  width: 100%;
  height: 100%;

  list-style: none;

  @media (pointer: fine) {
    &:hover {
      background: ${(props) =>
        props.theme.colors.gradients.goldVeryTransparent};
    }
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

  h5 {
    width: max-content;
    height: max-content;

    cursor: pointer;

    @media (pointer: fine) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  h6 {
    width: max-content;
    height: max-content;

    color: ${(props) => props.theme.colors.grays[200]};
    cursor: pointer;

    @media (pointer: fine) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
