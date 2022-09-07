import React from 'react';
import {StatusBar} from 'react-native';
import {RestaurantContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {Navigation} from './src/infrastructure/navigation';
import {FavouritesContextProvider} from './src/services/favourites/favourites.context';

export default function App() {
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
