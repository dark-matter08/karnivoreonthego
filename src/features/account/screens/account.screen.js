import React from 'react';
import LottieView from 'lottie-react-native';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AccountTitle,
  AnimationWrapper,
} from '../components/account.styles';
import {theme} from '../../../infrastructure/theme';
import {Spacer} from '../../../components';

const login_image = require('../../../../assets/images/home-bg.jpg');

export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground image={login_image}>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          source={require('../../../../assets/animations/watermelon.json')}
          autoPlay
          loop
          renderMode="cover"
        />
      </AnimationWrapper>
      <Spacer position={'top'} size={'lg'}>
        <AccountTitle variant="label">Meals To Go</AccountTitle>
      </Spacer>
      <AccountContainer>
        <AuthButton
          icon={{uri: 'https://cdn-icons-png.flaticon.com/512/535/535194.png'}}
          mode="contained"
          color={theme.colors.brand.primary}
          onPress={() => navigation.navigate('Login')}>
          Login
        </AuthButton>
        <Spacer position={'top'} size="lg">
          <AuthButton
            icon={{
              uri: 'https://cdn-icons-png.flaticon.com/512/748/748137.png',
            }}
            mode="contained"
            color={theme.colors.brand.secondary}
            onPress={() => navigation.navigate('Register')}>
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
