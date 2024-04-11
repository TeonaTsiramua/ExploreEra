import { useState } from 'react';
import SocialLogin from '../../components/shared/socialLogin/SocialLogin';
import SignUpForm from '../../components/signUpPage/signUpForm/SignUpForm';
import { Container, Wrapper } from './style';

const SignUp = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  return (
    <Container>
      <Wrapper>
        <SignUpForm isButtonDisabled={isButtonDisabled} />
        <SocialLogin
          setIsButtonDisabled={setIsButtonDisabled}
          isButtonDisabled={isButtonDisabled}
        />
      </Wrapper>
    </Container>
  );
};
export default SignUp;
