import React from 'react';
import {View} from 'react-native';
import styled from 'react-native-styled-components';
import {theme} from '../infrastructure/theme';

const TopSmall = styled(View, {
  marginTop: theme.spacing.sm,
});

const TopMedium = styled(View, {
  marginTop: theme.spacing.dm,
});

const TopLarge = styled(View, {
  marginTop: theme.spacing.lg,
});

const LeftSmall = styled(View, {
  marginLeft: theme.spacing.sm,
});

const LeftMedium = styled(View, {
  marginLeft: theme.spacing.md,
});

const LeftLarge = styled(View, {
  marginLeft: theme.spacing.lg,
});

export const Spacer = ({position, size}) => {
  return <LeftLarge />;
};
