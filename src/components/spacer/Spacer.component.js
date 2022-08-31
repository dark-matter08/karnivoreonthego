import React from 'react';
import {View} from 'react-native';
import styled from 'react-native-styled-components';
import {theme} from '../../infrastructure/theme';

const getSpacer = (position, size) => {
  if (position === 'top') {
    return styled(View, {
      marginTop: getSize(size),
    });
  }
  if (position === 'left') {
    return styled(View, {
      marginLeft: getSize(size),
    });
  }
  if (position === 'bottom') {
    return styled(View, {
      marginBottom: getSize(size),
    });
  }
  if (position === 'right') {
    return styled(View, {
      marginRight: getSize(size),
    });
  }
};

const getSize = size => {
  const value = theme.spacing[size];
  return value;
};

const Spacer = ({position, size, children}) => {
  const SpacerView = getSpacer(position, size);
  return <SpacerView size={size}>{children}</SpacerView>;
};

export default Spacer;
