import { useNavigate } from 'react-router-dom';
import Button from '../../shared/button/Button';
import { HeroContainer, H1, P } from './style';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <P>Visit Mountains In</P>
      <H1>Italy</H1>

      <Button content='See offer' onClick={() => navigate(`/services`)} />
    </HeroContainer>
  );
};
export default Hero;
