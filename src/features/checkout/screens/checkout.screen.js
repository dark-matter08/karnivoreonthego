import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'react-native-styled-components';
import {CreditCardInput} from '../components/credit-card.component';

const SafeArea = styled(SafeAreaView, {
  flex: 1,
});

export const CheckoutScreen = () => {
  return (
    <SafeArea>
      <CreditCardInput />
    </SafeArea>
  );
};
