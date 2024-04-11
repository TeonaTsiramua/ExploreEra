import { Fragment, useState } from 'react';
import { services } from '../../../data/data';
import Modal from '../../shared/modal/Modal';
import {
  Container,
  H2,
  H3,
  CardContainer,
  Card,
  Img,
  P,
  SeeAll,
  ModalImg,
  ModalCard,
  ModalContent,
  Wrapper,
} from './style';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <H2>Discover Our Services</H2>
      <P>
        ExploreEra provides a one-stop solution for individuals seeking
        well-planned journeys. These services include expert advice on
        destination selection, flight and accommodation bookings, and customized
        itineraries to individual preferences.
      </P>

      <Wrapper>
        <SeeAll onClick={openModal}>See all</SeeAll>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <Fragment key={index}>
                {services.map((service) => (
                  <ModalCard key={service.id}>
                    <ModalImg src={service.img} alt={service.title} />
                    <P>{service.title}</P>
                  </ModalCard>
                ))}
              </Fragment>
            ))}
          </ModalContent>
        </Modal>
        <CardContainer>
          {services.map((service) => (
            <Card key={service.id}>
              <Img src={service.img} alt={service.title} />
              <H3>{service.title}</H3>
              <P>{service.description}</P>
            </Card>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};
export default Services;
