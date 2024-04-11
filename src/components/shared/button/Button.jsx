import { StyledButton } from './style';

const Button = ({ content, primary, secondary, disabled, onClick }) => {
  return (
    <StyledButton
      $secondary={secondary}
      $primary={primary}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
