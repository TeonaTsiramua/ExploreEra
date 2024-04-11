import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 5.5rem;
`;

export const Wrapper = styled.div`
  background-color: hsl(var(--white));
  border-radius: 10px;
  padding: 24px 30px;

  @media (min-width: 430px) {
    padding: 30px 60px;
  }

  @media (min-width: 800px) {
    padding: 30px 70px;
  }
`;
