import {mockImages, mocks} from './mock';
import camelize from 'camelize';
import axios from 'axios';

const API_KEY = 'AIzaSyCkf-jwvZ1V0EwSg_SZkJBku4-woyzeLO4';

export const restaurantsRequest = location => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const restaurantRequestOnline = location => {
  const input = 'restaurant';
  const radius = 3000;

  return axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${input}&location=${location}&radius=${radius}&key=${API_KEY}`,
    )
    .then(res => res.data);
};

const photoRequest = ref => {
  const fetchReq = axios
    .get(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${ref}&key=${API_KEY}`,
    )
    .then(res => res.data);

  fetchReq
    .then(result => {
      console.log('Photo fetch req result: ', result);
      return result;
    })
    .catch(err => {
      console.log('Photo fetch req error: ', err);
    });
};

const getPlacePhoto = restaurant => {
  var ref = null;
  if (restaurant.photos !== undefined) {
    ref = restaurant.photos[0].photo_reference;
  }

  if (!ref) {
    restaurant.photos = [
      mockImages[Math.ceil(Math.random() * mockImages.length - 1)],
    ];
    return restaurant;
  }

  const photo_url = photoRequest(ref);
  console.log(photo_url);

  restaurant.photos = [
    mockImages[Math.ceil(Math.random() * mockImages.length - 1)],
  ];
  return restaurant;
};

export const restaurantsTransform = ({results = []}) => {
  const mappedResults = results.map(restaurant => {
    restaurant = getPlacePhoto(restaurant);
    return {
      ...restaurant,
      address: restaurant.formatted_address,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPRARILY',
    };
  });
  //   console.log(mappedResults);
  return camelize(mappedResults);
};
