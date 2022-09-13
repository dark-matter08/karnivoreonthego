import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from 'react';

import {LocationContext} from '../location/location.context';
import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const retrieveRestaurants = loc => {
    setIsLoading(true);
    setError(null);
    setRestaurants([]);
    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then(results => {
        setError(null);
        setIsLoading(false);
        setRestaurants(results);
        console.log('Firebase fxn Results: ', results);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
        console.log('Firebase fxn Errors: ', err);
      });
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    } else {
      setRestaurants([]);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{restaurants, isLoading, error}}>
      {children}
    </RestaurantContext.Provider>
  );
};
