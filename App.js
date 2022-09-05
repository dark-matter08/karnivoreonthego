import React from 'react';
import {StatusBar} from 'react-native';
import {RestaurantContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {Navigation} from './src/infrastructure/navigation';

export default function App() {
  return (
    <>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Navigation />
        </RestaurantContextProvider>
      </LocationContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
