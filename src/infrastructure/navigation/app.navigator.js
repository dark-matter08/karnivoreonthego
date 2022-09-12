import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as All from '@fortawesome/free-solid-svg-icons';

import {theme} from '../theme';
import {Icon} from '../../components';
import {RestaurantsNavigator} from './restaurants.navigator';
import {MapScreen} from '../../features/map/screens/map.screen';
import {AuthenticationContext} from '../../services/authentication/authentication.context';
import {RestaurantContextProvider} from '../../services/restaurants/restaurants.context';
import {LocationContextProvider} from '../../services/location/location.context';
import {FavouritesContextProvider} from '../../services/favourites/favourites.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: All.faUtensils,
  Map: All.faLocationCrosshairs,
  Settings: All.faGear,
};

const SettingsScreen = () => {
  const {onLogout} = useContext(AuthenticationContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: theme.colors.text_i.success}}>Settings!</Text>
      <Button title="Logout" onPress={() => onLogout()} />
    </View>
  );
};

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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator
            screenOptions={screenOptions}
            activeColor={theme.colors.brand.secondary}
            barStyle={{backgroundColor: theme.colors.brand.primary}}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
