export function convertNumToCurrency(num) {
    // Create our number formatter.
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NGN',
    }).format(num);
    let currencyFormat = formatter.split('.')[0];
    return currencyFormat;
  }
  
