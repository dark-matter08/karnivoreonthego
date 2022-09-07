import React from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import styled from 'react-native-styled-components';
import {theme} from '../../infrastructure/theme';
import {CompactRestaurantInfo} from '../restaurant/compact-restaurant-info.component';
import Spacer from '../spacer/Spacer.component';
import CustomText from '../typography/typography';

const FavouritesWrapper = styled(View, {
  padding: theme.spacing.md,
});

export const FavouriteBar = ({favourites, onNavigate}) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position={'left'} size="md">
        <CustomText variant={'caption'}>Favourites</CustomText>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map(restaurant => {
          const key = restaurant.name.split(' ').join('');
          return (
            <Spacer key={key} position={'left'} size={'md'}>
              <TouchableOpacity
                onPress={onNavigate('RestaurantDetail', {
                  restaurant: restaurant,
                })}>
                <CompactRestaurantInfo
                  key={key}
                  style={{marginLeft: 10}}
                  restaurant={restaurant}
                />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
