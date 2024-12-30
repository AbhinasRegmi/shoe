import { useState, useEffect } from 'react';

export function useShouldStick() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const offsetY = window.scrollY;
      setIsSticky(offsetY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    isSticky,
    setIsSticky,
  };
}
