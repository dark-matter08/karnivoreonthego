import React, {useContext, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styled from 'react-native-styled-components';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {theme} from '../../../infrastructure/theme';
import {FavouriteBar} from '../../../components';
import {RestaurantContext} from '../../../services/restaurants/restaurants.context';
import Loader from '../../../components/utilities/loader';
import {Search} from '../components/search.component';
import {FavouritesContext} from '../../../services/favourites/favourites.context';
import {FadeInView} from '../../../components/animations/fade.animation';

const SafeArea = styled(SafeAreaView, {
  flex: 1,
});

const RestaurantListContainer = styled(FlatList, {
  // backgroundColor: theme.colors.bg.primary,
});

export const RestaurantsScreen = ({navigation}) => {
  const {isLoading, error, restaurants} = useContext(RestaurantContext);
  const {favourites} = useContext(FavouritesContext);
  const [barToggled, setBarToggled] = useState(false);

  const changeFavBarState = () => {
    setBarToggled(!barToggled);
  };

  return (
    <>
      <SafeArea>
        {isLoading && <Loader />}
        <Search
          isFavouritesToggled={barToggled}
          onFavouritesToggle={() => changeFavBarState()}
        />
        {barToggled && (
          <FavouriteBar favourites={favourites} navigation={navigation} />
        )}
        {!isLoading && (
          <RestaurantListContainer
            data={restaurants}
            renderItem={({item}) => {
              return (
                <FadeInView>
                  <RestaurantInfoCard
                    navigation={navigation}
                    restaurant={item}
                  />
                </FadeInView>
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
