import camelize from 'camelize';
import axios from 'axios';
import {host, isMock} from '../../utils/env';

const API_KEY = 'AIzaSyCkf-jwvZ1V0EwSg_SZkJBku4-woyzeLO4';

export const restaurantsRequest = location => {
  return fetch(`${host}/placesNearBy?location=${location}&mock=${isMock}`).then(
    res => res.json(),
  );
};

export const restaurantRequestOnline = location => {
  const input = 'restaurant';
  const radius = 3000;

  return axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=${input}&location=${location}&radius=${radius}&key=${API_KEY}`,
    )
    .then(res => res.data);
};

export const restaurantsTransformBasic = ({results = []}) => {
  const mappedResults = results.map(restaurant => {
    if (restaurant.photos) {
      const ref = restaurant.photos[0].photo_reference;
      restaurant.photos = [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${ref}&key=${API_KEY}`,
      ];
    } else {
      restaurant.photos = [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ];
    }
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPRARILY',
    };
  });
  //   console.log(mappedResults);
  return camelize(mappedResults);
};

export const restaurantsTransform = ({results = []}) => {
  const mappedResults = results.map(restaurant => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPRARILY',
    };
  });
  //   console.log(mappedResults);
  return camelize(mappedResults);
};
