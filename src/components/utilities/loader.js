import * as React from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {theme} from '../../infrastructure/theme';
import {View} from 'react-native';
import styled from 'react-native-styled-components';

const LoadingContainer = styled(View, {
  position: 'absolute',
  top: '50%',
  left: '50%',
});

const ActivityLoader = styled(ActivityIndicator, {
  marginLeft: -25,
});

const Loader = () => (
  <LoadingContainer>
    <ActivityLoader
      size={50}
      animating={true}
      color={theme.colors.brand.primary}
    />
  </LoadingContainer>
);

export default Loader;
