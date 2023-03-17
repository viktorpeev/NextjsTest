import { useState, useEffect } from "react";
import { Card } from "../../collections/Card/Card";
import { db } from '../../utils/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  ContentContainer,
  MainCardContainer,
  Background
} from "./elements";

const usersCollectionRef = collection(db, 'Cards');

export const Main = ({ image, title, description, ...props }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const data = await getDocs(usersCollectionRef);
      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  getCards();
  }, []);

  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <ContentContainer>
        <Background>
        <StyledImageContainer>
          <img
            layout="responsive"
            width='100%'
            src={image.src}
            alt={image.alt}
          />
        </StyledImageContainer>
        </Background>
        <MainCardContainer>
          <div>
            {cards.map((card, index) => (
              <Card key={index} {...card} src={`/img/C${index + 1}.png`} />
            ))}
          </div>
        </MainCardContainer>
      </ContentContainer>
    </StyledContainer>
  );
};
