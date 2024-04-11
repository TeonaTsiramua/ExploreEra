import { useState } from 'react';
import { flights } from '../../../../data/flightsData';
import Button from '../../../shared/button/Button';
import {
  Airline,
  Card,
  Container,
  Details,
  Div,
  Dot,
  Dots,
  Duration,
  Hr,
  Img,
  Line,
  LineContainer,
  MediumP,
  NoMatch,
  P,
  Section,
  Span,
  Stops,
  Text,
  Wrapper,
} from './style';

const Flights = ({ filterCriteria }) => {
  const [displayedFlights, setDisplayedFlights] = useState(8);

  const handleShowMore = () => {
    setDisplayedFlights((prevCount) => prevCount + 8);
  };

  const filteredFlights = flights.filter((flight) => {
    // Filter by stops
    if (
      filterCriteria.stops.length > 0 &&
      !filterCriteria.stops.includes(flight.stops)
    ) {
      return false;
    }
    // Filter by duration
    if (
      flight.duration < filterCriteria.fromValue3 ||
      flight.duration > filterCriteria.toValue3
    ) {
      return false;
    }
    // Filter by price
    if (
      flight.price < filterCriteria.fromValue4 ||
      flight.price > filterCriteria.toValue4
    ) {
      return false;
    }

    // Filter by date
    if (
      filterCriteria.date &&
      new Date(flight.date) < filterCriteria.date // Compare flight date to selected date
    ) {
      return false; // If flight date is before selected date, exclude
    }
    return true;
  });

  return (
    <Container>
      <Wrapper>
        {filteredFlights.slice(0, displayedFlights).map((flight) => (
          <Card key={flight.id}>
            <Section>
              <Airline>
                <Img src='/assets/filter/airline.png' alt='airline' />
                <Text>Georgian Airlines</Text>
              </Airline>
              <Details>
                <Stops>
                  <P>Take off</P>
                  <P>Landing</P>
                </Stops>
                <Stops>
                  <MediumP>12:00</MediumP>
                  <LineContainer>
                    <Dots>
                      {[...Array(flight.stops)].map((_, index) => (
                        <Dot key={index}></Dot>
                      ))}
                    </Dots>

                    <Line />
                  </LineContainer>
                  <MediumP>19:00</MediumP>
                </Stops>
              </Details>
              <Duration>{flight.duration} Hours</Duration>
            </Section>

            <Div>
              <MediumP>
                <Span>Price</Span> {flight.price}$
              </MediumP>
              <Hr />
              <Button secondary content='View Deal' />
            </Div>
          </Card>
        ))}
      </Wrapper>
      {displayedFlights < filteredFlights.length && (
        <Button primary content='Show more results' onClick={handleShowMore} />
      )}

      {!filteredFlights.length && (
        <NoMatch>No flights available matching the selected criteria.</NoMatch>
      )}
    </Container>
  );
};
export default Flights;
