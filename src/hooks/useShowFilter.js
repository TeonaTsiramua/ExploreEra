import { useEffect } from 'react';

export const useShowFilter = (setShowFilter, isTablet) => {
  useEffect(() => {
    if (!isTablet) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  }, [setShowFilter, isTablet]);
};
