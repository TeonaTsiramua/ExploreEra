import { blogs } from '../../../data/data';
import { Blog, Container, H2, H3, Img, Ul } from './style';

const Blogs = () => {
  return (
    <Container>
      <H2>Blogs</H2>
      <Ul>
        {blogs.map((blog) => (
          <Blog key={blog.id}>
            <Img src={blog.img} alt={blog.title} />
            <H3>{blog.title}</H3>
          </Blog>
        ))}
      </Ul>
    </Container>
  );
};
export default Blogs;
