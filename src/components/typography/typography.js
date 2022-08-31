import React from 'react';
import {StyleSheet, Text as RText} from 'react-native';
import styled from 'react-native-styled-components';
import {theme} from '../../infrastructure/theme';

const getText = variant => {
  if (variant === 'body') {
    return styled(RText, {
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.body,
      fontWeight: theme.fonts.regular,
      color: theme.colors.text_i.primary,
    });
  }
  if (variant === 'hint') {
    return styled(RText, {
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.body,
      fontWeight: theme.fonts.regular,
      color: theme.colors.text_i.primary,
    });
  }
  if (variant === 'error') {
    return styled(RText, {
      color: theme.colors.text_i.error,
      fontFamily: theme.fonts.body,
      fontSize: theme.fontSizes.body,
      fontWeight: theme.fonts.regular,
    });
  }
  if (variant === 'caption') {
    return styled(RText, {
      fontSize: theme.fontSizes.caption,
      fontFamily: theme.fonts.body,
      color: theme.colors.text_i.primary,
    });
  }
  if (variant === 'label') {
    return styled(RText, {
      fontFamily: theme.fonts.heading,
      fontSize: theme.fontSizes.body,
      color: theme.colors.text_i.primary,
      //   fontWeight: theme.fontWeights.medium,
    });
  }
};

const styles = StyleSheet.create({
  text_style: {
    flexWrap: 'wrap',
    marginTop: 0,
    marginBottom: 0,
  },
});

const CustomText = ({variant, children}) => {
  const TextItem = getText(variant);
  return (
    <TextItem style={styles.text_style} variant={variant}>
      {children}
    </TextItem>
  );
};

export default CustomText;
