import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {RestaurantContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {Navigation} from './src/infrastructure/navigation';
import {FavouritesContextProvider} from './src/services/favourites/favourites.context';
import auth from '@react-native-firebase/auth';

export default function App() {
  const [isAuthenticated, setisAunthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      auth()
        .signInWithEmailAndPassword('chelucien08@gmail.com', 'test123')
        .then(user => {
          console.log(user);
          setisAunthenticated(true);
        })
        .catch(e => {
          console.log(e);
        });
    }, 2000);
  }, []);

  if (!isAuthenticated) return null;

  return (
    <>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigation />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
