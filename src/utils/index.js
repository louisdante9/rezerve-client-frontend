export const convertNumToCurrency = (x) => {
  if (isNaN(x)) return '-';
  return `N${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};
