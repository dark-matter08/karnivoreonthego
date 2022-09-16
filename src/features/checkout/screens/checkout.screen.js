import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import styled from 'react-native-styled-components';

import {MCreditCardInput} from '../components/credit-card.component';
import {CartContext} from '../../../services/cart/cart.context';
import {CustomText, Spacer} from '../../../components';

import {SvgXml} from 'react-native-svg';
import {FadeInView} from '../../../components/animations/fade.animation';
import {theme} from '../../../infrastructure/theme';
import zero_cart from '../../../../assets/svg/zero_cart';
import {RestaurantInfoCard} from '../../restaurants/components/restaurant-info-card.component';
import {ScrollView} from 'react-native-gesture-handler';
import {List} from 'react-native-paper';

const SafeArea = styled(SafeAreaView, {
  flex: 1,
});

const ErrorView = styled(View, {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: theme.spacing.lg,
  // backgroundColor: theme.colors.brand.secondary,
});

const StyledSVG = styled(View, {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 120,
  height: 120,
  marginBottom: theme.spacing.md,
  borderRadius: 60,
  backgroundColor: theme.colors.brand.primary,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledCustomText = styled(CustomText, {
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const CheckoutScreen = () => {
  const {cart, restaurant, sum} = useContext(CartContext);

  if (!cart.length || !restaurant) {
    return (
      <ErrorView>
        <FadeInView>
          <StyledSVG>
            <SvgXml xml={zero_cart} width={90} height={90} />
          </StyledSVG>
          <StyledCustomText variant={'error'}>
            Your cart is empty!
          </StyledCustomText>
        </FadeInView>
      </ErrorView>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position={'left'} size="md">
          <Spacer position={'top'} size="sm">
            <CustomText variant={'label'}>Your Order</CustomText>
          </Spacer>
          <List.Section>
            {cart.map(({item, price}) => {
              return <List.Item title={`=> ${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <CustomText variant="label">Total: {sum / 100}</CustomText>
        </Spacer>
        <MCreditCardInput />
      </ScrollView>
    </SafeArea>
  );
};
