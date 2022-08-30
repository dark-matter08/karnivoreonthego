import React from 'react';
import {Text, View, Image} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'react-native-styled-components';
import {theme} from '../../../infrastructure/theme';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/svg/star';
import open from '../../../../assets/svg/open';
import {Spacer} from '../../../components/Spacer.component';

const Title = styled(Text, {
  fontSize: theme.fontSizes.body,
  fontFamily: theme.fonts.body,
  color: theme.colors.ui.primary,
});

const Info = styled(View, {
  padding: theme.spacing.md,
});

const Rating = styled(View, {
  flexDirection: 'row',
  paddingBottom: theme.spacing.xs,
  paddingTop: theme.spacing.xs,
});

const SectionEnd = styled(View, {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
});

const Address = styled(Text, {
  fontSize: theme.fontSizes.caption,
  fontFamily: theme.fonts.body,
  color: theme.colors.ui.secondary,
});

const RestaurantCardCover = styled(Card.Cover, {
  padding: theme.spacing.sm,
  backgroundColor: theme.colors.bg.primary,
});

const RestaurantCard = styled(Card, {
  backgroundColor: theme.colors.bg.primary,
});

const Section = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
});

const TempClosedText = styled(Text, {
  color: '#ff0000',
});

const RestaurantTypeIcon = styled(Image, {
  marginLeft: theme.spacing.sm,
  width: 20,
  height: 20,
});

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://cdn1.iconfinder.com/data/icons/fillio-food-kitchen-and-cooking/48/food_-_dish-512.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2022/03/strawberry-1024x761.jpg.webp',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={10}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <TempClosedText variant="label">
                CLOSED TEMPORARILY
              </TempClosedText>
            )}
            <Spacer variant={'left.md'} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <RestaurantTypeIcon source={{uri: icon}} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
