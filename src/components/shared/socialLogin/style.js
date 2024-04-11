import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;

  @media (min-width: 430px) {
    max-width: 400px;
  }
`;

export const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  font-size: var(--fs-label);
  color: hsl(var(--clr-text-1), 0.7);
  white-space: nowrap;
`;

export const Line = styled.span`
  border-top: 1px solid hsl(var(--clr-text-1), 0.7);
  width: 30%;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 58px;
  height: 58px;
  cursor: pointer;

  @media (min-width: 430px) {
    width: 70px;
    height: 70px;
  }
`;

export const Terms = styled.p`
  text-align: center;
  font-size: var(--fs-label);
  color: hsl(var(--clr-text-1), 0.7);
`;

export const Span = styled.span`
  color: hsl(var(--primary-2));
  cursor: pointer;
`;

export const Hr = styled.hr`
  border-top: 1px solid hsl(var(--clr-text-1), 0.7);
  width: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 430px) {
    padding: clamp(1rem, 2.5vw, 2.5rem);
    padding-top: 0;
    gap: 2.5rem;
  }
  @media (min-width: 800px) {
    padding: 2.75rem;
    padding-top: 1rem;

    gap: 3.75rem;
  }

  & > button {
    width: 100%;

    @media (min-width: 800px) {
      width: 50%;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const H3 = styled.h3`
  font-size: var(--fs-h3);
  text-align: center;
`;

export const Text = styled.p`
  font-size: var(--fs-p);
  max-width: 812px;
`;
