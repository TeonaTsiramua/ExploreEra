import { useState } from 'react';
import { servicesDropdowns } from '../../../../data/data';

import { Div, Input, Section, Wrapper } from './style';
import Dropdown from '../../../shared/dropdownMenu/DropdownMenu';
import Button from '../../../shared/button/Button';

const Filter = ({ setFilterCriteria, setSearch }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [date, setDate] = useState(getTodayDate());

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSearch = () => {
    const selectedDate = date ? new Date(date) : null;

    setFilterCriteria((prevCriteria) => ({
      ...prevCriteria,
      date: selectedDate,
    }));

    setSearch(true);
  };

  const handleDropdownClick = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <Wrapper>
      <Section>
        {servicesDropdowns.map((dropdown, index) => (
          <Dropdown
            secondary
            key={index}
            options={dropdown.options}
            title={dropdown.title}
            isOpen={openDropdownIndex === index}
            onClick={() => handleDropdownClick(index)}
            onClose={() => setOpenDropdownIndex(null)}
          />
        ))}
      </Section>
      <Div>
        <Input type='text' placeholder='From Tbilisi' />
        <Input type='text' placeholder='To Paris' />
        <Input type='date' value={date} onChange={handleDateChange} />
        <Button primary content='Search' onClick={handleSearch} />
      </Div>
    </Wrapper>
  );
};
export default Filter;
