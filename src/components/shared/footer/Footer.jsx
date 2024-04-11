import {
  FooterContainer,
  Container,
  Wrapper,
  Section,
  H2,
  H3,
  P,
  Div,
  SocialsDiv,
  StyledLink,
  Img,
  Input,
  Icon,
} from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Wrapper>
          <Div>
            <StyledLink to={'/'}>
              <H2>ExploreEra</H2>
            </StyledLink>
            <P>Travel agency which helps you to plan your perfect holidays</P>
            <H3>Follow us</H3>
            <SocialsDiv>
              <Img src='/assets/social/instagram.png' alt='instagram' />
              <Img src='/assets/social/facebook.png' alt='facebook' />
              <Img src='/assets/social/linkedin.png' alt='linkedin' />
            </SocialsDiv>
          </Div>
          <Div>
            <H3>Links</H3>
            <StyledLink to={'/'}>Home</StyledLink>
            <StyledLink to={'/'}>About us</StyledLink>
            <StyledLink to={'/'}>Blogs</StyledLink>
            <StyledLink to={'/services'}>Our services</StyledLink>
            <StyledLink to={'/'}>Our offers</StyledLink>
          </Div>
        </Wrapper>
        <Section>
          <Div>
            <H3>Contact us</H3>
            <P>exploreera@gmail.com</P>
            <P>555111222</P>
          </Div>
          <Div>
            <H3>Subscribe news</H3>
            <Input type='text' placeholder='Email' />
            <Icon src='/assets/social/arrow.png' alt='icon' />
          </Div>
        </Section>
      </Container>
      <P>
        {' '}
        {'Copyright © '}
        {new Date().getFullYear()}
      </P>
    </FooterContainer>
  );
};
export default Footer;
