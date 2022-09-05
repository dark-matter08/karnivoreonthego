import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RestaurantsScreen} from '../../features/restaurants/screens/restaurant.screens';

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
