import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  background-image: url("img/background.png");
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  display:flex;
  justify-content:center;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  display:flex;
  justify-content:center;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;
export const FlexboxContainer = styled(({ ...props }) => <div {...props} />)`
  display:flex;
`;
