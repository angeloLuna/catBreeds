import {BASE_URL, GET, API_KEY} from '../constants/api';

var myHeaders = new Headers();
myHeaders.append('x-api-key', `api_key=${API_KEY}`);

const getAllCats = async () => {
  const response = await fetch(`${BASE_URL}/breeds`, {
    method: GET,
    headers: myHeaders,
  }).catch((err) => err);
  const data = await response.json();
  return data;
};

export {getAllCats};
