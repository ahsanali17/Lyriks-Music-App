import styled from 'styled-components';

export const ComopnentWrapper = styled.aside`
  grid-area: right-sidebar;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 600px;

  overflow: auto;

  background: ${(props) => props.theme.colors.gradients.blackLeft};
  border-left: 2px solid ${(props) => props.theme.colors.blacks[400]};

  @media (${(props) => props.theme.queries.mediumAndDown}) {
    display: none;
  }
`;
