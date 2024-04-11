import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { airlines, airports, rangeValues } from '../../../../data/data';

import {
  Checkbox,
  Div,
  FirstSection,
  Hr,
  Icon,
  Input,
  Label,
  P,
  Section,
  Wrapper,
} from './style';
import RangeSlider from '../rangeSlider/RangeSlider';
import Button from '../../../shared/button/Button';

const Aside = ({ filterCriteria, setFilterCriteria, toggleShowFilter }) => {
  const [sliderValues, setSliderValues] = useState(rangeValues);
  const [showSections, setShowSections] = useState({
    stops: false,
    times: false,
    airlines: false,
    airports: false,
    duration: false,
    price: false,
    priceCalculator: false,
  });

  const isTablet = useMediaQuery({ maxWidth: 800 });

  const toggleSection = (section) => {
    setShowSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleFromChange = (value, sliderName) => {
    setSliderValues({
      ...sliderValues,
      [`fromValue${sliderName}`]: parseInt(value),
    });

    setFilterCriteria((prevCriteria) => ({
      ...prevCriteria,
      [`fromValue${sliderName}`]: parseInt(value),
    }));
  };

  const handleToChange = (value, sliderName) => {
    setSliderValues({
      ...sliderValues,
      [`toValue${sliderName}`]: parseInt(value),
    });

    setFilterCriteria((prevCriteria) => ({
      ...prevCriteria,
      [`toValue${sliderName}`]: parseInt(value),
    }));
  };

  const handleStopFilterChange = (stop) => {
    let updatedStops = [...filterCriteria.stops];
    if (updatedStops.includes(stop)) {
      updatedStops = updatedStops.filter((s) => s !== stop);
    } else {
      updatedStops.push(stop);
    }
    setFilterCriteria((prevCriteria) => ({
      ...prevCriteria,
      stops: updatedStops,
    }));
  };

  return (
    <Wrapper>
      {isTablet && <Button onClick={toggleShowFilter} content=' ⇦  Filter' />}
      <FirstSection>
        <P>Cheapest</P>
        <Hr />
        <P>Quickest</P>
        <Hr />
        <P>Best</P>
      </FirstSection>

      <Section>
        <P onClick={() => toggleSection('stops')}>
          Stops{' '}
          <Icon
            src='/assets/arrow/down.png'
            alt='open'
            open={showSections.stops}
          />
        </P>
        {showSections.stops && (
          <Div>
            <Label htmlFor='direct'>
              <Checkbox
                type='checkbox'
                name='direct'
                id='direct'
                onChange={() => handleStopFilterChange(0)}
                checked={filterCriteria.stops.includes(0)}
              />
              Direct
            </Label>
            <Label htmlFor='oneStop'>
              <Checkbox
                type='checkbox'
                name='oneStop'
                id='oneStop'
                onChange={() => handleStopFilterChange(1)}
                checked={filterCriteria.stops.includes(1)}
              />
              One stop
            </Label>
            <Label htmlFor='twoStop'>
              <Checkbox
                type='checkbox'
                name='twoStop'
                id='twoStop'
                onChange={() => handleStopFilterChange(2)}
                checked={filterCriteria.stops.includes(2)}
              />
              Two stops
            </Label>
          </Div>
        )}

        <P onClick={() => toggleSection('times')}>
          Times{' '}
          <Icon
            src='/assets/arrow/down.png'
            alt='open'
            open={showSections.times}
          />
        </P>
        {showSections.times && (
          <>
            <Label>Take off - Tbilisi</Label>
            <RangeSlider
              min='12'
              max='24'
              index=':00'
              fromValue={sliderValues.fromValue1}
              toValue={sliderValues.toValue1}
              onFromChange={(value) => handleFromChange(value, 1)}
              onToChange={(value) => handleToChange(value, 1)}
            />

            <Label>Take off - Paris</Label>
            <RangeSlider
              min='12'
              max='24'
              index=':00'
              fromValue={sliderValues.fromValue2}
              toValue={sliderValues.toValue2}
              onFromChange={(value) => handleFromChange(value, 2)}
              onToChange={(value) => handleToChange(value, 2)}
            />
          </>
        )}

        <P onClick={() => toggleSection('airlines')}>
          Airlines{' '}
          <Icon
            src='/assets/arrow/down.png'
            alt='open'
            open={showSections.airlines}
          />
        </P>
        {showSections.airlines && (
          <Div>
            {airlines.map((a) => (
              <Label key={a} htmlFor={a}>
                <Checkbox type='checkbox' name={a} id={a} />
                {a}
              </Label>
            ))}
          </Div>
        )}

        <P onClick={() => toggleSection('airports')}>
          Airports{' '}
          <Icon
            src='/assets/arrow/down.png'
            alt='open'
            open={showSections.airports}
          />
        </P>
        {showSections.airports && (
          <Div>
            {airports.map((a) => (
              <Label key={a} htmlFor={a}>
                <Checkbox type='checkbox' name={a} id={a} />
                {a}
              </Label>
            ))}
          </Div>
        )}

        <P onClick={() => toggleSection('duration')}>
          Duration{' '}
          <Icon
            src='/assets/arrow/down.png'
            alt='open'
            open={showSections.duration}
          />
        </P>
        {showSections.duration && (
          <RangeSlider
            min='7'
            max='30'
            index=' Hours'
            fromValue={sliderValues.fromValue3}
            toValue={sliderValues.toValue3}
            onFromChange={(value) => handleFromChange(value, 3)}
            onToChange={(value) => handleToChange(value, 3)}
          />
        )}

        <P onClick={() => toggleSection('price')}>
          Price{' '}
          <Icon
            src='/assets/arrow/down.png'
            alt='open'
            open={showSections.price}
          />
        </P>
        {showSections.price && (
          <RangeSlider
            min='700'
            max='3000'
            index='$'
            fromValue={sliderValues.fromValue4}
            toValue={sliderValues.toValue4}
            onFromChange={(value) => handleFromChange(value, 4)}
            onToChange={(value) => handleToChange(value, 4)}
          />
        )}

        <P onClick={() => toggleSection('priceCalculator')}>
          Price Calculator{' '}
          <Icon
            src='/assets/arrow/down.png'
            alt='open'
            open={showSections.priceCalculator}
          />
        </P>
        {showSections.priceCalculator && (
          <>
            <Label htmlFor='payment'>
              <Icon src='/assets/filter/card.png' alt='payment' /> Payment
              method
            </Label>
            <Input
              type='text'
              name='payment'
              id='payment'
              placeholder='Choose payment method'
            />
            <Label htmlFor='carry-on'>
              <Icon src='/assets/filter/bag.png' alt='Carry-on bag' /> Carry-on
              bag
            </Label>
            <Input
              type='text'
              name='carry-on'
              id='carry-on'
              placeholder='Select bags (0)'
            />
            <Label htmlFor='checked'>
              <Icon src='/assets/filter/bag1.png' alt='Checked bag' /> Checked
              bag
            </Label>
            <Input
              type='text'
              name='checked'
              id='checked'
              placeholder='Select bags (0)'
            />
          </>
        )}
      </Section>
    </Wrapper>
  );
};
export default Aside;
