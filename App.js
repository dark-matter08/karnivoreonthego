import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as All from '@fortawesome/free-solid-svg-icons';
import {restaurantsRequest} from './src/services/restaurants/restaurants.service';

import {RestaurantsScreen} from './src/features/restaurants/screens/restaurant.screens';
import {theme} from './src/infrastructure/theme';
import {Icon} from './src/components';

restaurantsRequest()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: All.faUtensils,
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
    tabBarActiveTintColor: theme.colors.brand.secondary,
    tabBarInactiveTintColor: theme.colors.text_i.disabled,
  };
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
