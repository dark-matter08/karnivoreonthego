import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from 'react';

import {LocationContext} from '../location/location.context';
import {
  restaurantsRequest,
  restaurantRequestOnline,
  restaurantsTransform,
} from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children, mock = false}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const retrieveRestaurants = loc => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then(results => {
          setError(null);
          setIsLoading(false);
          setRestaurants(results);
          console.log('Offline Results: ', results);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
          console.log('Offline Errors: ', err);
        });
    }, 2000);
  };

  const retrieveRestaurantsOnline = loc => {
    setIsLoading(true);
    setRestaurants([]);
    restaurantRequestOnline(loc)
      .then(restaurantsTransform)
      .then(results => {
        setError(null);
        setIsLoading(false);
        setRestaurants(results);
        console.log('Online Results: ', results);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
        console.log('Online Errors: ', err);
      });
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      if (mock) {
        retrieveRestaurants(locationString);
      } else {
        retrieveRestaurantsOnline(locationString);
      }
    } else {
      setRestaurants([]);
    }
  }, [location, mock]);

  return (
    <RestaurantContext.Provider value={{restaurants, isLoading, error}}>
      {children}
    </RestaurantContext.Provider>
  );
};
