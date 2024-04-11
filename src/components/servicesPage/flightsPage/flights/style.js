import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    width: 70%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Card = styled.div`
  background-color: hsl(var(--white));
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  padding: 12px 16.5px;
  gap: 1rem;

  @media (min-width: 430px) {
    padding: 30px clamp(30px, 4vw, 60px);
  }

  @media (min-width: 800px) {
    padding: 40px clamp(25px, 3vw, 131.5px);
    flex-direction: row;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
`;

export const Stops = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  gap: 0.5rem;
  @media (min-width: 800px) {
    width: 25%;
  }
`;

export const Airline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

export const Hr = styled.hr`
  margin: 0;
  display: none;
  @media (min-width: 800px) {
    display: block;
  }
`;

export const LineContainer = styled.div`
  width: 60%;
  position: relative;
`;

export const Line = styled.hr`
  margin: 0;
  width: 100%;
  border-top: 2px solid hsl(var(--primary-2));
`;

export const Dots = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  top: -3px;
`;

export const Dot = styled.div`
  height: 8px;
  aspect-ratio: 1;
  background-color: hsl(var(--secondary-1));
  border: 1px solid hsl(var(--clr-text-1));
  z-index: 1;
`;

export const Img = styled.img`
  height: 24px;
  width: 24px;

  @media (min-width: 430px) {
    height: 60px;
    width: 60px;
  }
`;

export const P = styled.p`
  font-size: clamp(12px, 3.5vw, 16px);

  @media (min-width: 430px) {
    font-size: clamp(16px, 3vw, 20px);
  }

  @media (min-width: 800px) {
    font-size: clamp(16px, 1.5vw, 24px);
  }
`;

export const MediumP = styled(P)`
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-self: center;
`;

export const Duration = styled(P)`
  opacity: 60%;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 12px;
`;

export const Span = styled.span`
  display: none;
  @media (min-width: 800px) {
    display: block;
  }
`;

export const NoMatch = styled(P)`
  align-self: center;
  color: hsl(var(--primary-2));
`;
