import {
  TouchableOpacityProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Text from './Text';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  text: string;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<TouchableOpacityProps & ButtonProps> = ({
  style,
  onPress,
  text,
  textStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      {...props}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor: 'pink',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 2,
    padding: 12,
  },
  text: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
