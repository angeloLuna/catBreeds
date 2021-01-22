import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {getAllCats} from '../services/api';
import Header from '../components/Header';
import SelectBreed from '../components/SelectBreed';
import Map from '../components/Map';
import countries from '../constants/countries';
import CatDetails from '../components/CatDetails';
import ErrorLabel from '../components/ErrorLabel';
import errors from '../constants/errors';
import {getCoordinates} from '../helpers/main';

const Main = () => {
  const [catsList, setCatsList] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsj, setErrorMsj] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [cat, setCat] = useState({});
  const [coordinates, SetCoordinates] = useState({
    latitude: 19.07802,
    longitude: -98.29769,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    getAllCats()
      .then((res) => setCatsList(res))
      .catch((err) => setError(err));
  }, []);

  const handleSelectChange = (itemValue) => {
    setError(false);
    setOrError(getCoordinates(itemValue, catsList, countries));
    setSelectedItem(itemValue);
  };

  const setOrError = (obj) => {
    if (obj.error) {
      setError(true);
      setErrorMsj(obj.msj);
      return;
    }
    SetCoordinates(obj);
    setCat(obj.cat);
  };

  return (
    <ScrollView>
      <Header />
      <SelectBreed
        catsList={catsList}
        selectedItem={selectedItem}
        handleSelectChange={handleSelectChange}
      />
      {error && <ErrorLabel message={errorMsj} />}
      <Map region={coordinates} />
      <CatDetails catInfo={cat} />
    </ScrollView>
  );
};

export default Main;
