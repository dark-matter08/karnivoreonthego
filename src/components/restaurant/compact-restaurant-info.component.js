import React from 'react';
import styled from 'react-native-styled-components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Image, Platform} from 'react-native';
import WebView from 'react-native-webview';
import {theme} from '../../infrastructure/theme';
import {StyleSheet} from 'react-native';

import {CustomText} from '../';
import {Card} from 'react-native-paper';

const CompactImage = styled(Image, {
  borderRadius: 10,
  width: 140,
  heigth: 100,
});

const Item = styled(View, {
  borderRadius: 10,
  padding: 5,
  height: 140,
  maxWidth: 140,
  alignItems: 'center',
});

export const CompactRestaurantInfo = ({restaurant}) => {
  const isAndroid = Platform.OS === 'android';

  return (
    <Item>
      {isAndroid ? (
        <View style={styles.webviewWraper}>
          <WebView
            source={{
              uri: restaurant.photos[0],
            }}
            startInLoadingState={true}
            scalesPageToFit={true}
            style={styles.webview}
          />
        </View>
      ) : (
        <CompactImage
          source={{
            uri: restaurant.photos[0],
          }}
        />
      )}
      <CustomText center variant="caption">
        {restaurant.name}
      </CustomText>
    </Item>
  );
};

const styles = StyleSheet.create({
  webview: {
    width: 140,
    height: 100,
    borderRadius: 10,
  },
  webviewWraper: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
