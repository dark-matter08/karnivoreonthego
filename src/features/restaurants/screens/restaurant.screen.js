import React, {useContext, useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import styled from 'react-native-styled-components';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {theme} from '../../../infrastructure/theme';
import {CustomText, FavouriteBar} from '../../../components';
import {RestaurantContext} from '../../../services/restaurants/restaurants.context';
import Loader from '../../../components/utilities/loader';
import {Search} from '../components/search.component';
import {FavouritesContext} from '../../../services/favourites/favourites.context';
import {FadeInView} from '../../../components/animations/fade.animation';
import {LocationContext} from '../../../services/location/location.context';
import {SvgXml} from 'react-native-svg';
import error_loadinig from '../../../../assets/svg/error_loading';
import empty_loc from '../../../../assets/svg/empty_loc';

const SafeArea = styled(SafeAreaView, {
  flex: 1,
});

const RestaurantListContainer = styled(FlatList, {
  // backgroundColor: theme.colors.bg.primary,
});

const ErrorView = styled(View, {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '80%',
  padding: theme.spacing.lg,
  // backgroundColor: theme.colors.brand.secondary,
});

const StyledSVG = styled(SvgXml, {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: theme.spacing.lg,
});

export const RestaurantsScreen = ({navigation}) => {
  const {isLoading: locationLoading, error: locationError} =
    useContext(LocationContext);
  const {isLoading, error, restaurants} = useContext(RestaurantContext);
  const {favourites} = useContext(FavouritesContext);
  const [barToggled, setBarToggled] = useState(false);

  const isRestauListEmpty =
    isLoading === false &&
    locationLoading === false &&
    restaurants.length === 0;

  const changeFavBarState = () => {
    setBarToggled(!barToggled);
  };

  return (
    <>
      <SafeArea>
        {(isLoading || locationLoading) && <Loader />}
        <Search
          isFavouritesToggled={barToggled}
          onFavouritesToggle={() => changeFavBarState()}
        />
        {barToggled && (
          <FavouriteBar favourites={favourites} navigation={navigation} />
        )}
        {(!!locationError || !!error) && (
          <ErrorView>
            <FadeInView>
              <StyledSVG xml={error_loadinig} width={90} height={90} />
              <CustomText variant={'error'}>
                Error while retrieving data{' '}
                {locationError && `[${locationError}]`}
                {error && `[${error}]`}
              </CustomText>
            </FadeInView>
          </ErrorView>
        )}
        {isRestauListEmpty && (
          <ErrorView>
            <FadeInView>
              <StyledSVG xml={empty_loc} width={90} height={90} />
              <CustomText variant={'error'}>
                There are no recorded restaurants in this location
              </CustomText>
            </FadeInView>
          </ErrorView>
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
