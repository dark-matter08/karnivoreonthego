import React from 'react';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/svg/star';
import open from '../../../../assets/svg/open';
import {Spacer, CustomText, Favourite} from '../../../components';
import {TouchableOpacity} from 'react-native';

import {
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  Rating,
  SectionEnd,
  Icon,
  Address,
  RatingCount,
} from './restaurant-info-styles';

export const RestaurantInfoCard = ({restaurant, navigation}) => {
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
    <Spacer position={'bottom'} size={'md'}>
      <RestaurantCard elevation={10}>
        <Favourite restaurant={restaurant} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('RestaurantDetail', {
              restaurant: restaurant,
            })
          }>
          <RestaurantCardCover key={name} source={{uri: photos[0]}} />
          <Info>
            <CustomText variant="label">{name}</CustomText>
            <Section>
              <Rating>
                {ratingArray.map((rate, index) => {
                  return (
                    <SvgXml xml={star} key={index} width={20} height={20} />
                  );
                })}
              </Rating>
              <RatingCount
                style={{justifyContent: 'center', alignItems: 'center'}}
                variant={
                  'caption'
                }>{`- (${restaurant.userRatingsTotal})`}</RatingCount>
              <SectionEnd>
                {isClosedTemporarily && (
                  <CustomText variant="error">CLOSED TEMPORARILY</CustomText>
                )}
                <Spacer position={'left'} size={'sm'}>
                  {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                </Spacer>
                <Icon source={{uri: icon}} />
              </SectionEnd>
            </Section>
            <Address>{address}</Address>
          </Info>
        </TouchableOpacity>
      </RestaurantCard>
    </Spacer>
  );
};
