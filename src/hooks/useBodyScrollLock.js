import { useEffect } from 'react';

export const useBodyScrollLock = (isOpen, isTablet) => {
  useEffect(() => {
    // Add or remove body-scroll-lock class based on the isOpen prop
    if (isOpen && isTablet) {
      document.body.classList.add('body-scroll-lock');
    } else {
      document.body.classList.remove('body-scroll-lock');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('body-scroll-lock');
    };
  }, [isOpen, isTablet]);
};
