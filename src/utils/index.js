import { useState, useEffect } from 'react';
export const convertNumToCurrency = (x) => {
  if (isNaN(x)) return '-';
  return `N${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}