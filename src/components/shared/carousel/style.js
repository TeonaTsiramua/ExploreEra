import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
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

export const P = styled.p`
  font-size: 18px;
  font-weight: 500;

  @media (min-width: 800px) {
    font-size: var(--fs-20);
  }
`;

export const BtnContainer = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    padding: 0 0.6rem 1rem 0.6rem;
  }
`;

export const Btn = styled.button`
  color: hsl(var(--clr-text-1), 0.6);

  &:hover {
    color: hsl(var(--clr-text-1));
  }
`;

export const Arrow = styled.img`
  height: 20px;
  opacity: 60%;

  &:hover {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  transition: transform 0.3s linear;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 0 0 auto;
  white-space: nowrap;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;
