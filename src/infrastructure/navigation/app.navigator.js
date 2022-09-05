import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as All from '@fortawesome/free-solid-svg-icons';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import RestaurantsScreen from '../../features/restaurants/screens/restaurant.screens';
import {theme} from '../theme';
import {Icon} from '../../components';
import {RestaurantsNavigator} from './restaurants.navigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: All.faUtensils,
  Map: All.faLocationCrosshairs,
  Settings: All.faGear,
};

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: theme.colors.text_i.success}}>Settings!</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: theme.colors.text_i.success}}>Map Screen!</Text>
    </View>
  );
}

const screenOptions = ({route}) => {
  let iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({color, size}) => {
      return <Icon icon={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: theme.colors.brand.primary,
    tabBarInactiveTintColor: theme.colors.text_i.disabled,
    tabBarHideOnKeyboard: true,
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        activeColor={theme.colors.brand.secondary}
        barStyle={{backgroundColor: theme.colors.brand.primary}}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
