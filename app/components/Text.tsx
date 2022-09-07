import {StyleSheet, Text as NativeText, TextProps} from 'react-native';
import React from 'react';
import {FONTS} from '../config';

const Text: React.FC<TextProps> = ({children, onPress, style, ...props}) => {
  return (
    <NativeText onPress={onPress} style={[styles.text, style]} {...props}>
      {children}
    </NativeText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
});
