import React, {useContext, useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import styled from 'react-native-styled-components';
import {Marker, Callout} from 'react-native-maps';
import {View, Text} from 'react-native';

import {LocationContext} from '../../../services/location/location.context';
import {RestaurantContext} from '../../../services/restaurants/restaurants.context';
import {Search} from '../components/search.component';
import {MapCallout} from '../components/map-callout.component';

const Map = styled(MapView, {
  height: '100%',
  width: '100%',
});

export const MapScreen = () => {
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
              <Callout>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
