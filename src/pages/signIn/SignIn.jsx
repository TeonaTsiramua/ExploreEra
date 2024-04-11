import SocialLogin from '../../components/shared/socialLogin/SocialLogin';
import SignInForm from '../../components/signInPage/signInForm/SignInForm';
import { Container, Wrapper } from './style';

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <SignInForm />
        <SocialLogin />
      </Wrapper>
    </Container>
  );
};
export default SignIn;
