import styled from "styled-components";

export const StyledSectionContainer = styled(({ width,topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;
