import styled from 'styled-components';

export const Wrapper = styled.aside`
  background-color: hsl(var(--background));
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  z-index: 2;
  top: 75px;
  bottom: 10px;
  width: 85%;
  min-height: 90vh;
  padding-bottom: 2rem;

  @media (min-width: 800px) {
    width: 30%;
    position: relative;
    top: 0;
    gap: 2rem;
  }
`;

export const Section = styled.div`
  background-color: hsl(var(--white));
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
    min-height: 70px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: hsl(var(--secondary-1), 0.5);
    border-radius: 8px;
    margin: 12px 0;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: hsl(var(--secondary-1));
    border-radius: 12px;
    outline: 1px solid white;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--secondary-3));
    cursor: pointer;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const P = styled.p`
  font-size: var(--fs-link);

  font-weight: 500;
`;

export const Label = styled.label`
  font-size: clamp(16px, 1.5vw, 18px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SeeAll = styled.p`
  cursor: pointer;
  color: hsl(var(--primary-1));
  text-decoration: underline;
`;

export const Hr = styled.hr`
  border-top: 1px solid hsl(var(--primary-1));
  width: 50%;
  margin: 0;
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1em;
  height: 1em;
  border: 1px solid hsl(var(--clr-text-1));
  margin: 0;
  border-radius: 5px;
  cursor: pointer;

  &:checked {
    border-color: transparent;
    background: hsl(var(--primary-1));
  }
  &:not(:checked):hover {
    border-color: hsl(var(--primary-1));
  }
`;
