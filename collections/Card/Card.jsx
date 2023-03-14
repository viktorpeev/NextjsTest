import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
} from "./elements";

export const Card = ({ ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledDescription>{props.description}</StyledDescription>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image layout="responsive" src={props.image} alt={props.alt} width={props.width} height={props.height} />
      </StyledImageContainer>
    </StyledContainer>
  );
};
