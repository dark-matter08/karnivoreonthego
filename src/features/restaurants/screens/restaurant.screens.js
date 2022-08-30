import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import styled from 'react-native-styled-components';
import {theme} from '../../../infrastructure/theme';

const SafeArea = styled(SafeAreaView, {
  flex: 1,
});

const SearchContainer = styled(View, {
  padding: theme.spacing.sm,
  backgroundColor: theme.colors.bg.primary,
});

const RestaurantListContainer = styled(View, {
  padding: theme.spacing.md,
  flex: 1,
  backgroundColor: theme.colors.brand.primary,
});

export const RestaurantsScreen = () => (
  <>
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" icon="camera" />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  </>
);
