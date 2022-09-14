import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, FONTS} from '../config';
import Text from './Text';

type Props = TextInputProps & {
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  icon?: string;
  placeholder?: string;
  width?: string | number;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
};
const TextInput: React.FC<Props> = ({
  containerStyle,
  icon,
  label,
  labelStyle,
  placeholder,
  style,
  width,
  ...props
}) => {
  return (
    <React.Fragment>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.container, containerStyle, {width}]}>
        {icon && (
          <Ionicons
            name={icon}
            size={16}
            color={COLORS.placeholder}
            style={styles.icon}
          />
        )}
        <RNTextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.placeholder}
          style={[styles.input, style]}
          {...props}
        />
      </View>
    </React.Fragment>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginVertical: 6,
    width: '100%',
    borderRadius: 4,
    elevation: 1,
  },
  icon: {
    marginRight: 4,
  },
  input: {
    backgroundColor: COLORS.white,
    color: COLORS.text,
    padding: 8,
    paddingBottom: 4,
    flex: 1,
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
  label: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
});
