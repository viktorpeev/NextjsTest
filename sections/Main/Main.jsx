import Image from "next/image";
import {Card} from "../../collections/Card/Card"

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
} from "./elements";



export const Main = ({ image, title, description, cardOne, cardTwo, cardThree, ...props }) => {
  return (
    <StyledContainer {...props}>
      <Card image={cardOne.image.src} alt={cardOne.image.alt} width={cardOne.image.width} height={cardOne.image.height} title={cardOne.title} description={cardOne.description} />
      <Card image={cardTwo.image.src} alt={cardTwo.image.alt} width={cardTwo.image.width} height={cardTwo.image.height} title={cardTwo.title} description={cardTwo.description} />
      <Card image={cardThree.image.src} alt={cardThree.image.alt} width={cardThree.image.width} height={cardThree.image.height} title={cardThree.title} description={cardThree.description} />
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledImageContainer>
    </StyledContainer>
  );
};
