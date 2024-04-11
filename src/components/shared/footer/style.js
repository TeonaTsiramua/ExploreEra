import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: hsl(var(--secondary-2));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem clamp(2rem, 8vw, 10.625rem);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  flex-direction: column;

  @media (min-width: 430px) {
    flex-direction: row;
  }

  @media (min-width: 800px) {
    width: 58%;
  }
`;

export const Section = styled.div`
  display: flex;
  gap: 1.25rem;

  flex-direction: column;

  @media (min-width: 430px) {
    flex-direction: row;
  }

  @media (min-width: 800px) {
    flex-direction: column;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: auto;
  position: relative;

  @media (min-width: 430px) {
    width: 50%;
  }

  @media (min-width: 800px) {
    gap: 1.25rem;
    width: auto;
  }
`;

export const SocialsDiv = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  font-size: var(--fs-20);
  color: inherit;
  text-decoration: none;
`;

export const H2 = styled.h2`
  font-family: 'Kalnia', serif;
  font-weight: 500;
  font-size: var(--fs-900);
`;

export const H3 = styled.p`
  font-size: var(--fs-28);
`;

export const P = styled.p`
  font-size: var(--fs-20);
  max-width: 18rem;
`;

export const Img = styled.img`
  width: clamp(32px, 2.5vw, 50px);
  height: clamp(32px, 2.5vw, 50px);
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border-radius: 10px;
  border: 1px solid hsl(var(--clr-text-1));
  width: min-content;
`;

export const Icon = styled.img`
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 50px;
  left: 180px;

  @media (min-width: 800px) {
    top: 65%;
  }
`;
