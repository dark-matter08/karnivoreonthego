import React from 'react';
import {StatusBar} from 'react-native';

import {Navigation} from './src/infrastructure/navigation';
import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';

export default function App() {
  return (
    <>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
