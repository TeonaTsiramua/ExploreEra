import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

import Modal from '../modal/Modal';
import Button from '../button/Button';

import {
  Hr,
  Img,
  Line,
  P,
  Socials,
  Span,
  Terms,
  Wrapper,
  ModalContent,
  H3,
  Text,
  Section,
} from './style';

const SocialLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const auth = useAuth();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Wrapper>
      <P>
        <Line></Line> Or continue with <Line></Line>
      </P>
      <Socials>
        <Img src='/assets/social/fb.png' alt='facebook' />
        <Img src='/assets/social/icloud.png' alt='icloud' />
        <Img src='/assets/social/google.png' alt='google' />
        <Img src='/assets/social/gmail.png' alt='gmail' />
      </Socials>
      <Hr />
      <Terms>
        By signing in or creating an account, you agree with our
        <Span onClick={openModal}> Terms & conditions</Span> and{' '}
        <Span>Privacy policy</Span>
      </Terms>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent>
          <Section>
            <H3>Terms and conditions</H3>
            <Text>
              Before you use our website or services, please carefully read the
              following Terms and Conditions. By accessing or using our
              platform, you agree to comply with and be bound by these terms. If
              you do not agree with any part of these terms, please do not use
              our services. Your privacy is important to us. Please review our
              Privacy Policy to understand how we collect, use, and disclose
              information about you. By using our services, you consent to our
              privacy practices.
            </Text>
          </Section>
          <Section>
            <H3>Privacy policy</H3>
            <Text>
              We may collect personal information, such as your name, email
              address, and other details, when you register an account, make a
              purchase, or interact with our services. We also automatically
              collect certain information, such as IP addresses, browser type,
              and usage patterns, through cookies and similar technologies. Our
              website may contain links to third-party websites or services.
            </Text>
          </Section>
          <Button
            onClick={() => {
              auth.setIsAgreed(!auth.isAgreed);
              setIsModalOpen(false);
            }}
            primary
            content={!auth.isAgreed ? 'I agree' : 'I disagree'}
          />
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};
export default SocialLogin;
