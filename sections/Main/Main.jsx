import Image from "next/image";
import { Card } from "../../collections/Card/Card"

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  ContentContainer,
  Background
} from "./elements";

const Card1 = {
  image: { src: "/img/C1.png", alt: "", width: 75, height: 75 },
  title: "Brief",
  description:
    "Complete <b>brief writing and or simple guidance</b> on what to include, we've got you coverted.",
    link:'link to brief <br>generator??',
};
const Card2 = {
  image: { src: "/img/C2.png", alt: "", width: 75, height: 75 },
  title: "Search",
  description:
    "In-depth agency search covering; <b>criteria matching</b>, door knocking and due dilligence vetting.",
};
const Card3 = {
  image: { src: "/img/C3.png", alt: "", width: 75, height: 75 },
  title: "Pitch",
  description:
    "Comprehensive <b>pitch management</b>, including comms, diary management and pitch hosting.",
};

export const Main = ({ image, title, description, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <ContentContainer>
        <Background>
        <StyledImageContainer>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>
        </Background>
        <div>
          <Card {...Card1} />
          <Card {...Card2} />
          <Card {...Card3} />
        </div>
      </ContentContainer>
    </StyledContainer>
  );
};
