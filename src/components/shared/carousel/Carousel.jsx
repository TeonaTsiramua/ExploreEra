import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSwipeable } from 'react-swipeable';

import {
  Container,
  H2,
  H3,
  Card,
  Ul,
  Wrapper,
  BtnContainer,
  Btn,
  Arrow,
  Img,
  P,
} from './style';

const Carousel = ({ title, photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 430 });
  const isTablet = useMediaQuery({ maxWidth: 800 });

  let visibleCards = isMobile ? 1 : isTablet ? 2 : 4;

  const cardWidth = isMobile
    ? 'calc(100% - 2rem)'
    : isTablet
    ? 'calc(50% - 2rem)'
    : `calc(100% / ${visibleCards} - 0.86rem)`;

  const goToNext = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - visibleCards ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsButtonDisabled(false), 300); // Re-enable button after 0.3 second
    }
  };

  const goToPrev = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? photos.length - visibleCards : prevIndex - 1
      );
      setTimeout(() => setIsButtonDisabled(false), 300); // Re-enable button after 0.3 second
    }
  };

  const calcTranslateX = () => {
    if (isTablet || isMobile) {
      return `calc(-${currentIndex * (100 / visibleCards)}% + ${
        currentIndex * 16
      }px)`;
    } else {
      return `calc(-${currentIndex * (100 / visibleCards)}%)`;
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex !== photos.length - visibleCards) {
        goToNext();
      }
    },
    onSwipedRight: () => {
      if (currentIndex !== 0) {
        goToPrev();
      }
    },
  });

  return (
    <Container {...handlers}>
      <H2>{title}</H2>
      <Wrapper>
        <BtnContainer>
          <Btn onClick={goToPrev}>
            <Arrow src='/assets/arrow/prev.png' alt='prev' />
          </Btn>
          <Btn onClick={goToNext}>
            <Arrow src='/assets/arrow/next.png' alt='next' />
          </Btn>
        </BtnContainer>
        <Ul style={{ transform: `translateX(${calcTranslateX()})` }}>
          {photos.map((card) => (
            <Card key={card.id} style={{ width: cardWidth }}>
              <Img src={card.img} alt={card.title} />
              <H3>{card.title}</H3>
              <P>{card.description}</P>
              <P>{card.price}</P>
            </Card>
          ))}
        </Ul>
      </Wrapper>
    </Container>
  );
};
export default Carousel;
