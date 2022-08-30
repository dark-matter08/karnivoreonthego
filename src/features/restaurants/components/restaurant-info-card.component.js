import React from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'react-native-styled-components';
import {theme} from '../../../infrastructure/theme';

const Title = styled(Text, {
  fontSize: theme.sizes.md,
  fontFamily: theme.fonts.body,
  padding: theme.spacing.sm,
  color: theme.colors.ui.primary,
});

const RestaurantCardCover = styled(Card.Cover, {
  padding: theme.spacing.sm,
  backgroundColor: theme.colors.bg.primary,
});

const RestaurantCard = styled(Card, {
  backgroundColor: theme.colors.bg.primary,
});

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2022/03/strawberry-1024x761.jpg.webp',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={10}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
