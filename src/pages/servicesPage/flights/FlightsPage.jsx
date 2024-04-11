import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Wrapper } from './style';

import { rangeValues } from '../../../data/data';

import Button from '../../../components/shared/button/Button';
import Filter from '../../../components/servicesPage/flightsPage/filter/Filter';
import Aside from '../../../components/servicesPage/flightsPage/aside/Aside';
import Flights from '../../../components/servicesPage/flightsPage/flights/Flights';

const FlightsPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({
    stops: [],
    ...rangeValues,
    date: '',
  });

  const isTablet = useMediaQuery({ maxWidth: 800 });

  const toggleShowFilter = () => {
    if (isTablet) {
      setShowFilter(!showFilter);
    }
  };

  useEffect(() => {
    if (!isTablet) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  }, [setShowFilter, isTablet]);

  return (
    <>
      {isTablet ? (
        !search && (
          <Filter setFilterCriteria={setFilterCriteria} setSearch={setSearch} />
        )
      ) : (
        <Filter setFilterCriteria={setFilterCriteria} setSearch={setSearch} />
      )}

      {search && (
        <Wrapper>
          {isTablet && (
            <Button primary onClick={toggleShowFilter} content='Filter' />
          )}
          {showFilter && (
            <Aside
              filterCriteria={filterCriteria}
              setFilterCriteria={setFilterCriteria}
              toggleShowFilter={toggleShowFilter}
            />
          )}
          <Flights filterCriteria={filterCriteria} />
        </Wrapper>
      )}
    </>
  );
};
export default FlightsPage;
