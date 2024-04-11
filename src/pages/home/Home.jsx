import Blogs from '../../components/homePage/blogs/Blogs';
import BookTrip from '../../components/homePage/bookTrip/BookTrip';
import Hero from '../../components/homePage/hero/Hero';
import PopularTours from '../../components/homePage/popularTours/PopularTours';
import Services from '../../components/homePage/services/Services';
import Trips from '../../components/homePage/trips/Trips';
import { Main } from './style';

const Home = () => {
  return (
    <Main>
      <Hero />
      <Services />
      <Trips />
      <PopularTours />
      <Blogs />
      <BookTrip />
    </Main>
  );
};
export default Home;
