import {BASE_URL, GET, API_KEY} from '../constants/api';

const getAllCats = async () => {
  const response = await fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).catch(
    (err) => err,
  );
  const data = await response.json();
  return data;
};

export {getAllCats};
