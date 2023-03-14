import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display:flex;
  justify-content:space-between;
  margin-top:10px;
  border:1px solid gray;
  background-color:lightgray;
  width:50%;
`;

export const StyledGetStartedBtn = styled((props) =><Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
  background-color:red;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  font-family: sans-serif;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 7.5rem;
`;
