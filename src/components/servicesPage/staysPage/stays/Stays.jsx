import { useState } from 'react';
import { stays } from '../../../../data/staysData';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/button/Button';
import {
  Card,
  Container,
  Details,
  Div,
  H3,
  H4,
  Img,
  MediumP,
  NoMatch,
  P,
  Price,
  Rating,
  RatingDiv,
  Section,
  Star,
  Stars,
  Text,
  Wrapper,
} from './style';

const Stays = ({ filterCriteria }) => {
  const [displayedStays, setDisplayedStays] = useState(8);

  const navigate = useNavigate();

  const handleShowMore = () => {
    setDisplayedStays((prevCount) => prevCount + 8);
  };

  const filteredStays = stays.filter((stay) => {
    // Filter by stars
    if (
      filterCriteria.stars.length > 0 &&
      !filterCriteria.stars.includes(stay.rating)
    ) {
      return false;
    }

    return true;
  });

  return (
    <Container>
      <Wrapper>
        {filteredStays.slice(0, displayedStays).map((stay) => (
          <Card key={stay.id}>
            <Img src={stay.image} alt={stay.name} />
            <Section>
              <RatingDiv>
                <Details>
                  <H3>{stay.name}</H3>
                  <P>{stay.location}</P>
                  <P>{stay.distance}</P>
                  <Text>{stay.description}</Text>
                </Details>
                <Div>
                  <Rating>
                    <H4>Rating:</H4>
                    <Stars>
                      {[...Array(stay.rating)].map((_, index) => (
                        <Star
                          key={index}
                          src='/assets/stays/star.png'
                          alt='star'
                        />
                      ))}
                    </Stars>
                  </Rating>
                  <Price>
                    <H4>Price:</H4>
                    <MediumP>{stay.price}$</MediumP>
                  </Price>
                </Div>
              </RatingDiv>
              <Button
                primary
                content='Show details'
                onClick={() => navigate(`/services/stays/${stay.id}`)}
              />
            </Section>
          </Card>
        ))}
      </Wrapper>
      {displayedStays < filteredStays.length && (
        <Button primary content='Show more results' onClick={handleShowMore} />
      )}

      {!filteredStays.length && (
        <NoMatch>No stays available matching the selected criteria.</NoMatch>
      )}
    </Container>
  );
};
export default Stays;
