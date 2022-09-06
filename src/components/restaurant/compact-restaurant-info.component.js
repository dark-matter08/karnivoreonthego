import React from 'react';
import styled from 'react-native-styled-components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Image, Platform} from 'react-native';
import WebView from 'react-native-webview';

import {CustomText} from '../';

const CompactImage = styled(Image, {
  borderRadius: 5,
  width: 120,
  heigth: 100,
});

const CompactWebview = styled(WebView, {
  borderRadius: 5,
  width: 120,
  heigth: 100,
});

const Item = styled(View, {
  padding: 5,
  maxWidth: 120,
  alignItems: 'center',
});

export const CompactRestaurantInfo = ({restaurant}) => {
  const isAndroid = Platform.OS === 'android';
  const Image = isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{uri: restaurant.photos[0]}} />
      <CustomText center variant="caption">
        {restaurant.name}
      </CustomText>
    </Item>
  );
};
