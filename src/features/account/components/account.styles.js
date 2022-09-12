import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import styled from 'react-native-styled-components';
import {theme} from '../../../infrastructure/theme';
import {Button} from 'react-native-paper';

export const AccountBackground = ({image, children}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
};

export const AccountCover = styled(View, {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
});

export const AccountContainer = styled(View, {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  padding: theme.spacing.lg,
  marginTop: theme.spacing.md,
});

export const BareAccountTextInput = styled(TextInput, {
  width: 300,
  height: 55,
});

export const AnimationWrapper = styled(View, {
  width: '100%',
  height: '40%',
  position: 'absolute',
  top: 30,
  padding: theme.spacing.md,
});

export const AccountTitle = styled(Text, {
  fontSize: theme.fontSizes.h3,
  fontFamily: theme.fonts.body,
  fontWeight: theme.fonts.heading,
  color: theme.colors.text_i.primary,
});

export const AuthButton = ({color, icon, mode, onPress, children}) => {
  return (
    <Button
      color={color}
      icon={icon}
      mode={mode}
      style={styles.button}
      onPress={onPress}>
      {children}
    </Button>
  );
};

export const AccountTextInput = ({
  label,
  mode,
  textContentType,
  keyboardType,
  onChangeText,
  secureTextEntry = false,
  secure = false,
}) => {
  return (
    <TextInput
      style={styles.textInput}
      label={label}
      mode={mode}
      secureTextEntry={secureTextEntry}
      secure={secure}
      autoCapitalize="none"
      textContentType={textContentType}
      keyboardType={keyboardType}
      selectionColor={theme.colors.brand.primary}
      underlineColor={theme.colors.bg.secondary}
      activeUnderlineColor={theme.colors.brand.primary}
      outlineColor={theme.colors.bg.secondary}
      activeOutlineColor={theme.colors.brand.primary}
      multiline={false}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: theme.spacing.sm,
  },
  textInput: {
    width: 300,
    height: 55,
  },
});
