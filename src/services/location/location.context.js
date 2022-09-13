import React, {createContext, useEffect, useState} from 'react';
import {
  locationRequest,
  onlineLocationRequest,
  locationTransform,
} from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({children, mock = false}) => {
  const [keyword, setKeyword] = useState('Buea');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = searchKeyword => {
    setKeyword(searchKeyword);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    if (mock === true) {
      locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then(result => {
          setError(null);
          setIsLoading(false);
          setLocation(result);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    } else {
      onlineLocationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then(result => {
          setError(null);
          setIsLoading(false);
          setLocation(result);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
          console.log(err);
        });
    }
  }, [keyword, mock]);

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
