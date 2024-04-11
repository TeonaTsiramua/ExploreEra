import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0 clamp(2.5rem, 6vw, 10.625rem);
`;

export const H2 = styled.h2`
  font-size: var(--fs-h2);
  font-weight: 500;
`;

export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 500;

  @media (min-width: 800px) {
    font-size: var(--fs-h3);
  }
`;

export const Ul = styled.ul`
  display: grid;
  gap: 1.25rem;

  @media (min-width: 430px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Blog = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Img = styled.img`
  width: 100%;
`;
