import { useState } from 'react';
import Dropdown from '../../shared/dropdownMenu/DropdownMenu';
import Button from '../../shared/button/Button';
import { Container, H2, Section, Wrapper } from './style';
import { dropdowns } from '../../../data/data';

const BookTrip = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container>
      <H2>Ready To Book A Trip?</H2>
      <Wrapper>
        <Section>
          {dropdowns.map((dropdown, index) => (
            <Dropdown
              key={index}
              options={dropdown.options}
              title={dropdown.title}
              isOpen={openDropdownIndex === index}
              onClick={() => handleDropdownClick(index)}
              onClose={() => setOpenDropdownIndex(null)}
            />
          ))}
        </Section>
        <Button primary content='Book Now' />
      </Wrapper>
    </Container>
  );
};
export default BookTrip;
