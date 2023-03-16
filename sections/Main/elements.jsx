import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  text-align:center;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  text-align:center;
  margin-bottom: 5rem;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 24.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-image: url("img/background.png");
  @media (min-width: 1024px) {
    max-width: auto;
    width:auto;

    img{
      width:100%;
      max-width:24.03rem;
    }
  }
  
`;
export const ContentContainer = styled(({ ...props }) => <div {...props} />)`
@media (min-width: 1024px) {
  display:flex;
  justify-content:space-around;
}
`;
export const Background = styled(({ ...props }) => <div {...props} />)`
  
`;
