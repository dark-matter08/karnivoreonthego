import styled from 'react-native-styled-components';
import {theme} from '../../../infrastructure/theme';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-paper';
import {CustomText} from '../../../components';

export const Info = styled(View, {
  padding: theme.spacing.md,
});

export const Rating = styled(View, {
  flexDirection: 'row',
  paddingBottom: theme.spacing.xs,
  paddingTop: theme.spacing.xs,
});

export const SectionEnd = styled(View, {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
});

export const RatingCount = styled(CustomText, {
  flexDirection: 'row',
  paddingBottom: theme.spacing.lg,
  paddingTop: theme.spacing.xs,
});

export const Address = styled(Text, {
  fontSize: theme.fontSizes.caption,
  fontFamily: theme.fonts.body,
  color: theme.colors.ui.secondary,
});

export const RestaurantCardCover = styled(Card.Cover, {
  padding: theme.spacing.sm,
  backgroundColor: theme.colors.bg.primary,
});

export const RestaurantCard = styled(Card, {
  backgroundColor: theme.colors.bg.primary,
  // position: 'relative',
});

export const Section = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
});

export const Icon = styled(Image, {
  marginLeft: theme.spacing.sm,
  width: 20,
  height: 20,
});
