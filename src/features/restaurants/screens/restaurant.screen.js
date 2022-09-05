import React, {useContext} from 'react';
import {SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import styled from 'react-native-styled-components';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {theme} from '../../../infrastructure/theme';
import {Spacer} from '../../../components';
import {RestaurantContext} from '../../../services/restaurants/restaurants.context';
import Loader from '../../../components/utilities/loader';
import {Search} from '../components/search.component';

const SafeArea = styled(SafeAreaView, {
  flex: 1,
});

const RestaurantListContainer = styled(FlatList, {
  // backgroundColor: theme.colors.bg.primary,
});

export const RestaurantsScreen = ({navigation}) => {
  const {isLoading, error, restaurants} = useContext(RestaurantContext);
  return (
    <>
      <SafeArea>
        {isLoading && <Loader />}
        <Search />
        {!isLoading && (
          <RestaurantListContainer
            data={restaurants}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('RestaurantDetail', {
                      restaurant: item,
                    })
                  }>
                  <Spacer position={'bottom'} size={'md'}>
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.name}
            contentContainerStyle={{
              padding: theme.spacing.md,
            }}
          />
        )}
      </SafeArea>
    </>
  );
};
