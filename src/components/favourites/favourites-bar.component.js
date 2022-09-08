import React from 'react';
import {ScrollView, View, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'react-native-styled-components';
import {theme} from '../../infrastructure/theme';
// import {CompactRestaurantInfo} from '../restaurant/compact-restaurant-info.component';
import Spacer from '../spacer/Spacer.component';
import CustomText from '../typography/typography';

const FavouritesWrapper = styled(View, {
  padding: theme.spacing.sm,
});

const CardImg = styled(Card.Cover, {
  width: 140,
  height: 100,
});

const Info = styled(View, {
  padding: theme.spacing.xs,
  alignItems: 'center',
});

const FavCard = styled(Card, {
  borderRadius: 10,
  width: 140,
  height: 150,
  marginLeft: theme.spacing.md,
});

const CompactRestaurantInfo = ({restaurant, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('RestaurantDetail', {
          restaurant: restaurant,
        });
      }}>
      <FavCard>
        <CardImg source={{uri: restaurant.photos[0]}} />
        <Info>
          <CustomText center variant="caption">
            {restaurant.name}
          </CustomText>
        </Info>
      </FavCard>
    </TouchableOpacity>
  );
};

export const FavouriteBar = ({favourites, navigation}) => {
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
            <CompactRestaurantInfo
              key={key}
              restaurant={restaurant}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
{
  /* <TouchableOpacity
              key={key}
              onPress={onNavigate('RestaurantDetail', {
                restaurant: restaurant,
              })}>
            </TouchableOpacity> */
}
