import camelize from 'camelize';
import {locations} from './location.mock';
import axios from 'axios';

const API_KEY = 'AIzaSyCkf-jwvZ1V0EwSg_SZkJBku4-woyzeLO4';

export const locationRequest = searchTerm => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject('not found');
    } else {
      resolve(locationMock);
    }
  });
};

//

export const onlineLocationRequest = searchTerm =>
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${API_KEY}`,
    )
    .then(res => res.data);

export const locationTransform = result => {
  const formattedResponse = camelize(result);
  const {geometry = {}} = formattedResponse.results[0];
  const {lat, lng} = geometry.location;

  return {lat, lng, viewport: geometry.viewport};
};
