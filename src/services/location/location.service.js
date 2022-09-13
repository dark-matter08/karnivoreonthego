import camelize from 'camelize';
import axios from 'axios';
import {host, isMock} from '../../utils/env';

const API_KEY = 'AIzaSyCkf-jwvZ1V0EwSg_SZkJBku4-woyzeLO4';

export const locationRequest = searchTerm => {
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`).then(res =>
    res.json(),
  );
};

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
