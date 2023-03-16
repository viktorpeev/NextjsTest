import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "../../collections/Card/Card";
 
import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  ContentContainer,
  Background,
} from "./elements";
 
const cardsDb = [
  {
    title: "Brief",
    description:
      "Complete <b>brief writing and or simple guidance</b> on what to include, we've got you coverted.",
    link: "link to brief <br>generator??",
    width: "50px",
  },
  {
    title: "Search",
    description:
      "In-depth agency search covering; <b>criteria matching</b>, door knocking and due dilligence vetting.",
  },
  {
    title: "Pitch",
    description:
      "Comprehensive <b>pitch management</b>, including comms, diary management and pitch hosting.",
  },
];
 
export const Main = ({ image, title, description, ...props }) => {
  const [cards, setCards] = useState([]);
 
  useEffect(() => {
    /**
     * TODO - api call za posle ili moje da setna bekend
     */
    setCards(cardsDb);
  }, []);
 
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <ContentContainer>
          <StyledImageContainer>
            <img
              layout="responsive"
              src={image.src}
              alt={image.alt}
            />
          </StyledImageContainer>
        <div>
          {cards.map((card, index) => (
            <Card key={index} {...card} src={`/img/C${index + 1}.png`} />
          ))}
        </div>
      </ContentContainer>
    </StyledContainer>
  );
};
