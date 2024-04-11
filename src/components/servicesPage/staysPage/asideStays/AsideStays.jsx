import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Checkbox, Div, Hr, Label, P, Section, SeeAll, Wrapper } from './style';
import Button from '../../../shared/button/Button';
import {
  facilities,
  propertyTypes,
  roomFacilities,
} from '../../../../data/data';

const AsideStays = ({
  filterCriteria,
  setFilterCriteria,
  toggleShowFilter,
}) => {
  const isTablet = useMediaQuery({ maxWidth: 800 });

  const [showAllPropertyTypes, setShowAllPropertyTypes] = useState(false);
  const [showAllFacilities, setShowAllFacilities] = useState(false);
  const [showAllRoomFacilities, setShowAllRoomFacilities] = useState(false);

  const handleStarFilterChange = (star) => {
    let updatedStars = [...filterCriteria.stars];
    if (updatedStars.includes(star)) {
      updatedStars = updatedStars.filter((s) => s !== star);
    } else {
      updatedStars.push(star);
    }
    setFilterCriteria((prevCriteria) => ({
      ...prevCriteria,
      stars: updatedStars,
    }));
  };

  const togglePropertyTypes = () => {
    setShowAllPropertyTypes((prev) => !prev);
  };

  const toggleFacilities = () => {
    setShowAllFacilities((prev) => !prev);
  };

  const toggleRoomFacilities = () => {
    setShowAllRoomFacilities((prev) => !prev);
  };

  return (
    <Wrapper>
      {isTablet && <Button onClick={toggleShowFilter} content=' ⇦  Filter' />}
      <Section>
        <P>Filter by:</P>
        <Hr />
        <P>Property type</P>
        <Div>
          {propertyTypes
            .slice(0, showAllPropertyTypes ? undefined : 5)
            .map((i) => (
              <Label key={i} htmlFor={i}>
                <Checkbox type='checkbox' name={i} id={i} />
                {i}
              </Label>
            ))}
          <SeeAll onClick={togglePropertyTypes}>
            {showAllPropertyTypes
              ? 'See less'
              : `See all ${propertyTypes.length + 1}`}
          </SeeAll>
        </Div>

        <P>Property rating</P>
        <Div>
          {[5, 4, 3, 2, 1].map((stars) => (
            <Label key={stars} htmlFor={`${stars} Stars`}>
              <Checkbox
                type='checkbox'
                name={`${stars} Stars`}
                id={`${stars} Stars`}
                onChange={() => handleStarFilterChange(stars)}
                checked={filterCriteria.stars.includes(stars)}
              />
              {stars !== 1 ? `${stars} Stars` : 'Unrated'}
            </Label>
          ))}
        </Div>

        <P>Facilities</P>
        <Div>
          {facilities.slice(0, showAllFacilities ? undefined : 5).map((i) => (
            <Label key={i} htmlFor={i}>
              <Checkbox type='checkbox' name={i} id={i} />
              {i}
            </Label>
          ))}
          <SeeAll onClick={toggleFacilities}>
            {showAllFacilities
              ? 'See less'
              : `See all ${facilities.length + 1}`}
          </SeeAll>
        </Div>

        <P>Room facilities</P>
        <Div>
          {roomFacilities
            .slice(0, showAllRoomFacilities ? undefined : 5)
            .map((i) => (
              <Label key={i} htmlFor={i}>
                <Checkbox type='checkbox' name={i} id={i} />
                {i}
              </Label>
            ))}
          <SeeAll onClick={toggleRoomFacilities}>
            {showAllRoomFacilities
              ? 'See less'
              : `See all ${roomFacilities.length + 1}`}
          </SeeAll>
        </Div>
      </Section>
    </Wrapper>
  );
};
export default AsideStays;
