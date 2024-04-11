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
  justify-content: space-between;
  width: 100%;
  border-radius: 20px;
  padding: 12px;
  gap: 1rem;

  @media (min-width: 430px) {
    padding: 12px 20px;
  }

  @media (min-width: 800px) {
    padding: 40px 30px;
    flex-direction: row;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const RatingDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    flex-direction: row;
  }
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

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6em;

  @media (min-width: 800px) {
    flex-direction: column;
  }
`;

export const Stars = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 0.3em;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;

  @media (min-width: 800px) {
    flex-direction: column;
  }
`;

export const Star = styled.img`
  width: clamp(14px, 2vw, 40px);
`;

export const Img = styled.img`
  width: 35%;
  object-fit: cover;
  border-radius: 12px;
`;

export const H3 = styled.p`
  font-size: 20px;
  font-weight: 500;

  @media (min-width: 430px) {
    font-size: 24px;
  }

  @media (min-width: 800px) {
    font-size: clamp(20px, 1.8vw, 32px);
  }
`;

export const P = styled.p`
  font-size: 14px;
  opacity: 80%;

  @media (min-width: 430px) {
    font-size: clamp(16px, 3vw, 18px);
  }

  @media (min-width: 800px) {
    font-size: clamp(16px, 1.3vw, 24px);
  }
`;

export const Text = styled.p`
  font-size: 12px;
  opacity: 80%;

  @media (min-width: 430px) {
    font-size: 16px;
  }
`;

export const MediumP = styled(P)`
  font-weight: 500;
  font-size: 20px;
  opacity: 100%;

  @media (min-width: 430px) {
    font-size: 20px;
  }
`;

export const H4 = styled(P)`
  opacity: 100%;
`;

export const NoMatch = styled(P)`
  align-self: center;
  color: hsl(var(--primary-2));
`;
