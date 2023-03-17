import Image from "next/image";
 
import {
  StyledTextContainer,
  CardContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledSticker,
} from "./elements";
 
export const Card = (props) => {
  const { description, title, src, link, width, maxWidth } = props;
  return (
    <CardContainer style={{width:`${width}`,maxWidth:`${maxWidth}`}}>
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
    </CardContainer>
  );
};
