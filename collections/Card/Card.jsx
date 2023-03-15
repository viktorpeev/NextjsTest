import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledSticker
} from "./elements";

export const Card = ({ ...props }) => {
  const {description,title,image,link} = props;
  return (
<StyledContainer>
      <StyledImageContainer>
        <img layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription dangerouslySetInnerHTML={{__html:description}}></StyledDescription>
      </StyledTextContainer>
      <StyledSticker dangerouslySetInnerHTML={{__html:link}}></StyledSticker>
    </StyledContainer> 
  );
};
