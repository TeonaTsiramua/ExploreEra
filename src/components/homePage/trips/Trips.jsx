import { Container, H2, Video } from './style';

const Trips = () => {
  return (
    <Container>
      <H2>Watch Our Memorable Trips</H2>
      <Video controls>
        <source type='video/mp4' src='/assets/video.mp4' />
        Your browser does not support the video tag.
      </Video>
    </Container>
  );
};
export default Trips;
