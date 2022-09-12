import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useContext,
} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import styled from 'react-native-styled-components';
import {Linking, TouchableOpacity, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';

import Loader from '../../../components/utilities/loader';
import {theme} from '../../../infrastructure/theme';
import {Icon} from '../../../components';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  camera_button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.bg.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    left: '50%',
    marginLeft: -50,
  },
  camera: {
    width: '100%',
    height: '100%',
  },
});

export const CameraScreen = ({navigation}) => {
  const [cameraMode, setCameraMode] = useState('front');
  const [cameraPermission, setCameraPermission] = useState();
  const cameraRef = useRef();
  const {user} = useContext(AuthenticationContext);

  const devices = useCameraDevices();
  const device = devices[cameraMode];

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
    setCameraPermission(permission);
  }, []);

  const snapshot = async () => {
    const photo = await cameraRef.current.takeSnapshot({
      quality: 85,
      skipMetadata: true,
    });
    await AsyncStorage.setItem(`${user.uid}-photo`, photo.path);
    console.log(photo);
    navigation.goBack();
  };

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(status => {
      setCameraPermission(status);
    });
  }, []);

  if (cameraPermission !== 'authorized') {
    // request permisions
    requestCameraPermission();
  }

  if (device == null) return <Loader />;
  return (
    <View>
      <Camera
        style={styles.camera}
        ref={camera => (cameraRef.current = camera)}
        device={device}
        isActive={true}
        photo={true}
        video={true}
        preset="medium"
      />
      <TouchableOpacity onPress={snapshot} style={styles.camera_button}>
        <Icon icon={faCamera} size={30} />
      </TouchableOpacity>
    </View>
  );
};
