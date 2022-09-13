import React, {useContext, useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import styled from 'react-native-styled-components';
import {Marker, Callout} from 'react-native-maps';

import {LocationContext} from '../../../services/location/location.context';
import {RestaurantContext} from '../../../services/restaurants/restaurants.context';
import {Search} from '../components/search.component';
import {MapCallout} from '../components/map-callout.component';

import {SvgXml} from 'react-native-svg';
import err_map from '../../../../assets/svg/err_map';
import {View} from 'react-native';
import {theme} from '../../../infrastructure/theme';
import {CustomText} from '../../../components';
import {FadeInView} from '../../../components/animations/fade.animation';

const Map = styled(MapView, {
  height: '100%',
  width: '100%',
});

const ErrorView = styled(View, {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: theme.spacing.lg,
  // backgroundColor: theme.colors.brand.secondary,
});

const StyledSVG = styled(SvgXml, {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: theme.spacing.lg,
});

const MapObject = ({navigation}) => {
  const {location} = useContext(LocationContext);
  const {restaurants = []} = useContext(RestaurantContext);
  const [latitudeDelta, setLatitudeDelta] = useState(0);

  const {lat, lng, viewport} = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatitudeDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latitudeDelta,
          longitudeDelta: 0.02,
        }}>
        {restaurants.map(restaurant => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}>
              <Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant: restaurant,
                  })
                }>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

export const MapScreen = () => {
  const {location, error} = useContext(LocationContext);
  if (!location) {
    return (
      <ErrorView>
        <FadeInView>
          <StyledSVG xml={err_map} width={90} height={90} />
          <CustomText variant={'error'}>
            Cannot load location data {error && `[${error}]`}
          </CustomText>
        </FadeInView>
      </ErrorView>
    );
  }
  return <MapObject />;
};
