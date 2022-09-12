import React, {useContext} from 'react';
import {RestaurantInfoCard} from '../../restaurants/components/restaurant-info-card.component';
import {theme} from '../../../infrastructure/theme';
import {FavouritesContext} from '../../../services/favourites/favourites.context';
import {SafeAreaView, FlatList, Text} from 'react-native';
import styled from 'react-native-styled-components';
import {CustomText} from '../../../components';

const FavouritesListContainer = styled(FlatList, {});

const SafeArea = styled(SafeAreaView, {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.ui.quaternary,
});

export const FavouritesScreen = ({navigation}) => {
  const {favourites} = useContext(FavouritesContext);
  return (
    <SafeArea>
      {favourites.length ? (
        <FavouritesListContainer
          data={favourites}
          renderItem={({item}) => {
            return (
              <RestaurantInfoCard navigation={navigation} restaurant={item} />
            );
          }}
          keyExtractor={item => item.name}
          contentContainerStyle={{
            padding: theme.spacing.md,
          }}
        />
      ) : (
        <CustomText variant="label">
          You have no saved Favourite restaurants
        </CustomText>
      )}
    </SafeArea>
  );
};
