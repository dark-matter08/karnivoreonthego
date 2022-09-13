import React, {useContext, useState} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import {List, Avatar} from 'react-native-paper';
import styled from 'react-native-styled-components';
import {CustomText, Spacer} from '../../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';
import {useFocusEffect} from '@react-navigation/native';

import {theme} from '../../../infrastructure/theme';

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
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async usr => {
    const photoUri = await AsyncStorage.getItem(`${usr.uid}-photo`);
    setPhoto(photoUri);
    console.log(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user);
    }, [user]),
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {!photo ? (
            <Avatar.Icon
              size={180}
              icon={{
                uri: 'https://cdn-icons-png.flaticon.com/512/4623/4623628.png',
              }}
              backgroundColor="#2182bd"
            />
          ) : (
            <Avatar.Image
              size={180}
              source={{
                uri: `file://${photo}`,
              }}
              backgroundColor="#2182bd"
            />
          )}
        </TouchableOpacity>
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
