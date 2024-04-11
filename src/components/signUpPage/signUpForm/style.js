import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: var(--fs-label);
  color: hsl(var(--clr-text-1), 0.7);
  padding-left: 20px;
`;

export const Input = styled.input`
  padding: 13.5px 20px;
  border: 1px solid hsl(var(--primary-1));
  border-radius: 10px;
  width: clamp(200px, 80vw, 280px);

  @media (min-width: 430px) {
    width: 400px;
  }

  &::placeholder {
    font-size: var(--fs-ph);
  }

  &:focus {
    outline: 1px solid hsl(var(--primary-2));
  }
`;

export const Error = styled.p`
  color: hsl(var(--clr-text-3));
  font-size: var(--fs-label);
  max-width: 280px;
  padding: 0 20px;

  @media (min-width: 430px) {
    max-width: 400px;
  }
`;

export const UploadDiv = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;

  @media (min-width: 430px) {
    width: 100px;
  }
`;

export const Upload = styled.input`
  background-color: #e6ebff;
  border-radius: 50%;
  width: 50px;

  @media (min-width: 430px) {
    width: 100px;
  }

  &::file-selector-button {
    background-color: #e6ebff;
    background: url('/assets/icons/image.png') center/50% no-repeat;

    color: transparent;

    cursor: pointer;
    border: 0px;
    aspect-ratio: 1;
    width: 50px;

    @media (min-width: 430px) {
      width: 100px;
    }
  }
`;

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  aspect-ratio: 1;
  object-fit: cover;
  position: absolute;

  @media (min-width: 430px) {
    width: 100px;
    height: 100px;
  }
`;
