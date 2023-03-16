import Image from "next/image";
 
import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledSticker,
} from "./elements";
 
export const Card = (props) => {
  const { description, title, src, link } = props;
  return (
    <StyledContainer>
      <StyledImageContainer>
        <img layout="responsive" alt={src} src={src} />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription
          dangerouslySetInnerHTML={{ __html: description }}
        ></StyledDescription>
      </StyledTextContainer>
      <StyledSticker dangerouslySetInnerHTML={{ __html: link }}></StyledSticker>
    </StyledContainer>
  );
};
