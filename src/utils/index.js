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

export const stateList = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta ", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"]
export const amenities = ['Kitchen', 'Pool', 'Doorman', 'TV', 'Wifi', 'Free Packing', 'Heating', 'Washing machine', 'Air conditioning', 'Hair dryer', 'Plate washer', 'Desk for work', 'Toileteries' ]
export const propertyTypeList = ['Entire place', 'Private room','Shared room']
// export const propertyKind = ['Apartment', 'House', 'Secondary unit', 'Bed and Breakfast', 'Unique space']
export const propertyTypeGroup = [ { value: 'Apartment', label: 'Apartment' },
  { value: 'House', label: 'House' },
  { value: 'Secondary unit', label: 'Secondary unit' },
  { value: 'Bed and Breakfast', label: 'Bed and Breakfast' },
  { value: 'Unique space', label: 'Unique space' },]
export const propertyType = [ { value: 'Rental unit', label: 'Rental unit' },
  { value: 'Condominium (Condo)', label: 'Condominium (Condo)' },
  { value: 'Loft', label: 'Loft' },
  { value: 'Serviced apartment', label: 'Serviced apartment' },
  { value: 'Casa particular', label: 'Casa particular' },]
export const privacyType = [ { value: 'An entire place', label: 'An entire place' },
  { value: 'A private room', label: 'A private room' },
  { value: 'A shared room', label: 'A shared room' },]