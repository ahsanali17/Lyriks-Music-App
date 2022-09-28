import styled from 'styled-components';

export const ComopnentWrapper = styled.aside`
  grid-area: right-sidebar;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 600px 250px;

  overflow: auto;

  background-color: ${(props) => props.theme.colors.blacks[200]};
`;
