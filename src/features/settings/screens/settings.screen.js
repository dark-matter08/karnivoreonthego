import React, {useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {List, Avatar} from 'react-native-paper';
import styled from 'react-native-styled-components';
import {CustomText, Spacer} from '../../../components';

import {theme} from '../../../infrastructure/theme';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';

const SafeArea = styled(SafeAreaView, {
  flex: 1,
});

const SettingsItem = styled(List.Item, {
  padding: theme.spacing.md,
});

const AvatarContainer = styled(View, {
  alignItems: 'center',
  marginTop: theme.spacing.md,
});

export const SettingsScreen = ({navigation}) => {
  const {onLogout, user} = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon
          size={180}
          icon={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4623/4623628.png',
          }}
          backgroundColor="#2182bd"
        />
        <Spacer position={'top'} size="lg">
          <CustomText variant="label">{user.email}</CustomText>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          onPress={() => navigation.navigate('Favourites')}
          left={props => (
            <List.Icon
              {...props}
              color="black"
              icon={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2724/2724657.png',
              }}
            />
          )}
        />

        <SettingsItem
          title="Logout"
          onPress={onLogout}
          left={props => (
            <List.Icon
              {...props}
              color="black"
              icon={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828395.png',
              }}
            />
          )}
        />
      </List.Section>
    </SafeArea>
  );
};
