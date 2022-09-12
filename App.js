import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import LottieSplashScreen from 'react-native-lottie-splash-screen';

import {Navigation} from './src/infrastructure/navigation';
import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      LottieSplashScreen.hide(); // here
    }, 5_000);
  }, []);
  return (
    <>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
