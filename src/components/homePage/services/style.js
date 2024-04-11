import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0 clamp(2.5rem, 6vw, 10.625rem);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 430px) {
    flex-direction: column;
  }
`;

export const H2 = styled.h2`
  font-size: var(--fs-h2);
  font-weight: 500;
`;

export const H3 = styled.h3`
  font-size: var(--fs-h3);
  font-weight: 500;
`;

export const P = styled.p`
  font-size: var(--fs-p);
`;

export const SeeAll = styled.button`
  color: hsl(var(--primary-2));
  align-self: flex-start;
  text-decoration: underline;

  @media (min-width: 430px) {
    align-self: flex-end;
  }
`;

export const CardContainer = styled.ul`
  display: grid;
  gap: 1.25rem;

  @media (min-width: 430px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Img = styled.img`
  height: 221px;
  object-fit: cover;
  border-radius: 20px;
  height: minmax(60%, 15rem);
`;

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 0.5rem;
  overflow: hidden;
  text-align: center;

  @media (min-width: 430px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;

  & > p {
    position: absolute;
    top: 50%;
    font-size: clamp(12px, 2.5vw, 24px);
    color: hsl(var(--white));
    text-shadow: 2px 2px 27px rgba(0, 0, 0, 0.6);
  }
`;

export const ModalImg = styled.img`
  object-fit: cover;
  border-radius: 12px;
  filter: blur(0.5px) brightness(0.4);

  @media (min-width: 430px) {
  }
`;
