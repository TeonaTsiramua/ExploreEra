import {
  FromRangeInput,
  RangeInput,
  SliderWrapper,
  Value,
  ValuesDiv,
} from './style';

const RangeSlider = ({
  fromValue,
  toValue,
  onFromChange,
  onToChange,
  index,
  min,
  max,
}) => {
  const handleFromChange = (e) => {
    onFromChange(e.target.value);
  };

  const handleToChange = (e) => {
    onToChange(e.target.value);
  };

  return (
    <>
      <ValuesDiv>
        <Value>{fromValue + index}</Value>
        <Value>{toValue + index}</Value>
      </ValuesDiv>
      <SliderWrapper>
        <RangeInput
          type='range'
          min={min}
          max={max}
          value={fromValue}
          onChange={handleFromChange}
        />
        <FromRangeInput
          type='range'
          min={min}
          max={max}
          value={toValue}
          onChange={handleToChange}
        />
      </SliderWrapper>
    </>
  );
};

export default RangeSlider;
