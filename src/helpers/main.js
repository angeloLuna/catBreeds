import errors from '../constants/errors';
const getCoordinates = (code, catsList, countryArray) => {
  if (code && catsList && countryArray && errors) {
    if (code && typeof code === 'string') {
      const selectedCat = catsList.filter((item) => item.id === code);
      if (selectedCat.length === 0) {
        return {error: true, msj: errors.wrongCode};
      }
      const selectedCountry = countryArray.filter(
        (country) => country.code === selectedCat[0].country_code,
      );
      if (selectedCountry.length === 0) {
        return {error: true, msj: errors.notFound};
      }
      return {
        latitude: Number(selectedCountry[0].lat.toFixed(1)),
        longitude: Number(selectedCountry[0].lng.toFixed(1)),
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
        cat: selectedCat[0],
      };
    }
    return {error: true, msj: errors.notString};
  }
  return {error: true, msj: errors.missingParam};
};

export {getCoordinates};
