import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    flex-direction: row-reverse;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > p {
    opacity: 80%;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  > * {
    &:first-child {
      grid-column: 1 / 3;
    }
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    > * {
      &:first-child {
        grid-column: 1 / 4;
        grid-row: 1/3;
      }
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6em;

  @media (min-width: 800px) {
    flex-direction: column;

    & > p {
      align-self: flex-end;
    }
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 0.5em;

  @media (min-width: 800px) {
    flex-direction: row-reverse;
  }
`;

export const Star = styled.img`
  width: 20px;
`;

export const Prices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  align-content: stretch;

  > * {
    &:last-child {
      grid-column: 1 / 3;
    }
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;

    > * {
      &:last-child {
        grid-column: 3;
      }
    }
  }
`;

export const Price = styled.div`
  border: 2px solid hsl(var(--primary-1));
  border-radius: 10px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  & > p {
    color: black;
  }
`;

export const H2 = styled.h2`
  font-size: 20px;
  font-weight: 500;

  @media (min-width: 430px) {
    font-size: 28px;
  }
`;

export const P = styled.p`
  font-size: 16px;

  @media (min-width: 430px) {
    font-size: 20px;
  }

  @media (min-width: 800px) {
    font-size: clamp(16px, 1.5vw, 20px);
  }
`;

export const Description = styled.p`
  font-size: 14px;
  padding-top: 1rem;

  @media (min-width: 430px) {
    font-size: 18px;
  }
`;

export const More = styled.p`
  color: hsl(var(--primary-1));
  font-size: 18px;
  cursor: pointer;
  text-decoration: underline;

  @media (min-width: 430px) {
    font-size: 20px;
  }
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const Icon = styled.img`
  width: 14px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    min-width: 35%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: hsl(var(--white));
  border-radius: 12px;
  padding: 20px 24px;

  @media (min-width: 430px) {
    padding: 20px 60px;
  }

  @media (min-width: 800px) {
    padding: 20px;
  }

  & > h2 {
    font-weight: 400;
    @media (min-width: 430px) {
      font-size: 24px;
    }
  }
`;

export const Info = styled.div`
  border: 2px solid hsl(var(--primary-1));
  border-radius: 5px;
  padding: 10px;
`;

export const Li = styled.li`
  list-style: disc;
  font-size: 16px;

  @media (min-width: 430px) {
    font-size: 20px;
  }
`;
