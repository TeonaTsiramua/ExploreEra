import { useState } from 'react';

import { Input, Wrapper } from './style';
import Button from '../../../shared/button/Button';

const Search = ({ setSearch }) => {
  const [date, setDate] = useState(getTodayDate());

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSearch = () => {
    setSearch(true);
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
      <Input type='text' placeholder='Choose cyty' />
      <Input type='date' value={date} onChange={handleDateChange} />
      <Input type='text' placeholder='2 Adults' />
      <Button primary content='Search' onClick={handleSearch} />
    </Wrapper>
  );
};
export default Search;
