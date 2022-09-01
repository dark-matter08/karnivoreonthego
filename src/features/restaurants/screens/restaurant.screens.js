import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import styled from 'react-native-styled-components';
import {theme} from '../../../infrastructure/theme';
import {Spacer} from '../../../components';
import * as All from '@fortawesome/free-solid-svg-icons';

const SafeArea = styled(SafeAreaView, {
  flex: 1,
});

const SearchContainer = styled(View, {
  padding: theme.spacing.sm,
  backgroundColor: theme.colors.bg.primary,
});

const RestaurantListContainer = styled(FlatList, {
  backgroundColor: theme.colors.bg.primary,
});

export const RestaurantsScreen = () => (
  <>
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" icon={All.faMagnifyingGlass} />
      </SearchContainer>
      <RestaurantListContainer
        data={[
          {name: 1},
          {name: 2},
          {name: 3},
          {name: 4},
          {name: 5},
          {name: 6},
          {name: 7},
          {name: 8},
        ]}
        renderItem={() => (
          <Spacer position={'bottom'} size={'md'}>
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={item => item.name}
        contentContainerStyle={{
          padding: theme.spacing.md,
        }}
      />
    </SafeArea>
  </>
);
