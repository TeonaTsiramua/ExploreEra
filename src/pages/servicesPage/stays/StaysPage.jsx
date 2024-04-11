import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Search from '../../../components/servicesPage/staysPage/search/Search';
import Button from '../../../components/shared/button/Button';
import AsideStays from '../../../components/servicesPage/staysPage/asideStays/AsideStays';
import { Wrapper } from './style';
import Stays from '../../../components/servicesPage/staysPage/stays/Stays';
import Carousel from '../../../components/shared/carousel/Carousel';
import { tours } from '../../../data/data';

const StaysPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({
    stars: [],
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
        !search && <Search setSearch={setSearch} />
      ) : (
        <Search setSearch={setSearch} />
      )}

      {search ? (
        <Wrapper>
          {isTablet && (
            <Button primary onClick={toggleShowFilter} content='Filter' />
          )}
          {showFilter && (
            <AsideStays
              filterCriteria={filterCriteria}
              setFilterCriteria={setFilterCriteria}
              toggleShowFilter={toggleShowFilter}
            />
          )}
          <Stays filterCriteria={filterCriteria} />
        </Wrapper>
      ) : (
        <Carousel title='Browse by property type' photos={tours} />
      )}
    </>
  );
};
export default StaysPage;
