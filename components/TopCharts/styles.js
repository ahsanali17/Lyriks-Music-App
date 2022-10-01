import styled from 'styled-components';

export const ComopnentWrapper = styled.aside`
  grid-area: right-sidebar;

  background: ${(props) => props.theme.colors.gradients.blackLeft};
  border-left: 2px solid ${(props) => props.theme.colors.blacks[400]};

  @media (${(props) => props.theme.queries.mediumLargeAndDown}) {
    grid-area: main-content-top-charts;
  }
`;
