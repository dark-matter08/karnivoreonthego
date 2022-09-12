import React, {useContext, useState} from 'react';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AccountTextInput,
  BareAccountTextInput,
  AuthButton,
  AccountTitle,
} from '../components/account.styles';
import {ActivityIndicator} from 'react-native-paper';

import {theme} from '../../../infrastructure/theme';
import {CustomText, Spacer} from '../../../components';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';

const login_image = require('../../../../assets/images/register-bg.jpg');

export const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const {onRegister, isLoading, error} = useContext(AuthenticationContext);
  return (
    <AccountBackground image={login_image}>
      <AccountCover />
      <Spacer position={'top'} size={'lg'}>
        <AccountTitle variant="label">Meals To Go</AccountTitle>
      </Spacer>
      <AccountContainer>
        <AccountTextInput
          label="Email"
          mode="flat"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={u => setEmail(u)}
        />
        <Spacer position={'top'} size={'lg'} />
        <BareAccountTextInput
          label="Password"
          mode="flat"
          value={password}
          textContentType="password"
          secureTextEntry
          onChangeText={p => setPassword(p)}
        />

        <Spacer position={'top'} size={'lg'} />
        <BareAccountTextInput
          label="Repeat Password"
          mode="flat"
          value={repassword}
          textContentType="password"
          secureTextEntry
          onChangeText={r => setRepassword(r)}
        />
        <Spacer position={'top'} size={'md'} />

        {error && <CustomText variant="error">{error}</CustomText>}

        <Spacer position={'top'} size={'md'}>
          {!isLoading ? (
            <AuthButton
              icon={{
                uri: 'https://cdn-icons-png.flaticon.com/512/748/748137.png',
              }}
              mode="contained"
              color={theme.colors.brand.secondary}
              onPress={() => onRegister(email, password, repassword)}>
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator
              animating={true}
              color={theme.colors.brand.primary}
            />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer position={'top'} size={'md'}>
        <AuthButton
          icon={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1621/1621628.png',
          }}
          mode="contained"
          color={theme.colors.brand.primary}
          onPress={() => navigation.navigate('Main')}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
