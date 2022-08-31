import React from 'react';
// import {theme} from './src/infrastructure/theme';
import {StatusBar} from 'react-native';
import {RestaurantsScreen} from './src/features/restaurants/screens/restaurant.screens';

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}
