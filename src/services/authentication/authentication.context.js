import React, {useState, createContext} from 'react';
import {loginRequest, registrationRequest} from './authentication.service';
import auth from '@react-native-firebase/auth';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isAuthenticated, setisAunthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  auth().onAuthStateChanged(usr => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
      setisAunthenticated(true);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
        setisAunthenticated(true);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match');
      return;
    }

    registrationRequest(email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
        setisAunthenticated(true);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    setisAunthenticated(false);
    auth().signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
