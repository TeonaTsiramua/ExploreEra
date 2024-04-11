import { Suspense, lazy, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Stays = lazy(() =>
  import('../../../components/servicesPage/staysPage/stays/Stays')
);
import Search from '../../../components/servicesPage/staysPage/search/Search';
import Button from '../../../components/shared/button/Button';
import AsideStays from '../../../components/servicesPage/staysPage/asideStays/AsideStays';
import Carousel from '../../../components/shared/carousel/Carousel';
import Loader from '../../../components/shared/loader/Loader';

import { Wrapper } from './style';

import { tours } from '../../../data/data';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
import { useShowFilter } from '../../../hooks/useShowFilter';

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

  useShowFilter(setShowFilter, isTablet);

  useBodyScrollLock(showFilter, isTablet);

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
          <Suspense fallback={<Loader />}>
            <Stays filterCriteria={filterCriteria} />
          </Suspense>
        </Wrapper>
      ) : (
        <Carousel title='Browse by property type' photos={tours} />
      )}
    </>
  );
};
export default StaysPage;
