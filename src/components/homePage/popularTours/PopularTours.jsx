import { tours } from '../../../data/data';
import Carousel from '../../shared/carousel/Carousel';
import { Container } from './style';

const PopularTours = () => {
  return (
    <Container>
      <Carousel title='Popular Tour Offers' photos={tours} />
    </Container>
  );
};
export default PopularTours;
