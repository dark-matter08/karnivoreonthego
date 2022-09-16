import React, {createContext, useEffect, useState} from 'react';
import {locationRequest, locationTransform} from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
  const [keyword, setKeyword] = useState('Buea');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = searchKeyword => {
    setKeyword(searchKeyword);
    setIsLoading(true);
    setError(null);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setError(null);
        setIsLoading(false);
        setLocation(result);
        // console.log('location from online fxn: ', result);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
        // console.log('error from online fxn: ', err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
