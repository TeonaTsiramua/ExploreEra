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

export const Video = styled.video`
  border-radius: 20px;
`;
