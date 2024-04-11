import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { stays } from '../../../../data/staysData';
import {
  Container,
  H2,
  P,
  Icon,
  Rating,
  Stars,
  Star,
  Wrapper,
  Img,
  Prices,
  Price,
  Description,
  More,
  Card,
  Li,
  Details,
  Div,
  Location,
  Info,
  Section,
} from './style';
import Button from '../../../../components/shared/button/Button';

const StayDetails = () => {
  const [stayDetails, setStayDetails] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const isTablet = useMediaQuery({ maxWidth: 800 });

  useEffect(() => {
    const stay = stays.find((stay) => stay.id === parseInt(id));
    // Check if stayDetails exists, if not, navigate to the homepage
    if (!stay) {
      navigate('/');
    } else {
      setStayDetails(stay);
    }
  }, [id, navigate]);

  useEffect(() => {
    if (!isTablet) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }, [setShowMore, isTablet]);

  const toggleShowMore = () => {
    if (isTablet) {
      setShowMore(!showMore);
    }
  };

  return (
    stayDetails && (
      <Container>
        <Wrapper>
          <H2>{stayDetails.name}</H2>

          <Section>
            <Location>
              <Icon src='/assets/stays/location.png' alt='location' />
              <P>{stayDetails.location}</P>
            </Location>

            <Rating>
              <P>Rating:</P>
              <Stars>
                {[...Array(stayDetails.rating)].map((_, index) => (
                  <Star key={index} src='/assets/stays/star.png' alt='star' />
                ))}
                <Star src='/assets/stays/like.png' alt='like' />
                <Star src='/assets/stays/share.png' alt='share' />
              </Stars>
            </Rating>
          </Section>

          <Div>
            {isTablet
              ? [2, 3, 8].map((n, index) => (
                  <Img
                    key={index}
                    src={`/assets/stays/${n}.png`}
                    alt={stayDetails.name}
                  />
                ))
              : [2, 3, 4, 5, 6, 7, 8].map((n, index) => (
                  <Img
                    key={index}
                    src={`/assets/stays/${n}.png`}
                    alt={stayDetails.name}
                  />
                ))}
          </Div>

          <Prices>
            <Price>
              <P>Price: {stayDetails.price}$</P>
            </Price>
            <Price>
              <P>Total Price: {stayDetails.totalPrice}$</P>
            </Price>
            <Button primary content='Book now' />
          </Prices>

          <Description>{stayDetails.fullDescription}</Description>
        </Wrapper>

        {showMore && (
          <Details>
            <Card>
              <H2>Searched by:</H2>
              <P>Destination</P>
              <Info>
                <P>{stayDetails.location}</P>
              </Info>
              <P>Check-in date</P>
              <Info>
                <P>{stayDetails.checkIn}</P>
              </Info>
              <P>Check-out date</P>
              <Info>
                <P>{stayDetails.checkOut}</P>
              </Info>
              <P>Persons</P>
              <Info>
                <P>{stayDetails.persons}</P>
              </Info>
              <P>Total 8 days</P>
            </Card>

            <Img src='/assets/stays/map.png' alt='map' />

            <Card>
              <H2>All the facilities:</H2>

              {stayDetails.facilities.map((i) => (
                <Li key={i}>{i}</Li>
              ))}
            </Card>
          </Details>
        )}
        {isTablet && (
          <More onClick={toggleShowMore}>
            {showMore ? 'Show less' : 'Show more'}
          </More>
        )}
      </Container>
    )
  );
};

export default StayDetails;
