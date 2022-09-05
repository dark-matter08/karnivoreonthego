import React from 'react';
import {RestaurantsScreen} from '../../features/restaurants/screens/restaurant.screens';
import {createStackNavigator} from '@react-navigation/stack';

const RestaurantStack = createStackNavigator();

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
