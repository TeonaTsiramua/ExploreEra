import { useState } from 'react';
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  Img,
} from './style';

const Dropdown = ({ options, title, isOpen, onClick, onClose, secondary }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleItemClick = (option) => {
    setSelectedOption(option);
    onClose();
  };

  return (
    <DropdownContainer>
      <DropdownButton $secondary={secondary} onClick={onClick}>
        {selectedOption || title}
        <Img src='/assets/arrow/down.png' alt='open' open={isOpen} />
      </DropdownButton>
      <DropdownMenu $secondary={secondary} open={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleItemClick(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
