import { StyledButton } from './style';

const Button = ({
  content,
  primary,
  secondary,
  secondary1,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      $primary={primary}
      $secondary={secondary}
      $secondary1={secondary1}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
