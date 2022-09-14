import {StyleSheet} from 'react-native';
import React from 'react';

import {Text} from '../';
import {COLORS} from '../../config';

type Props = {
  error: string;
  visible?: boolean;
};

const ErrorMessage: React.FC<Props> = ({error, visible}) => {
  if (!visible || !error) {
    return null;
  }
  return <Text style={styles.error}>{error}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: COLORS.error,
    alignSelf: 'flex-start',
    marginBottom: 8,
    fontSize: 12.6,
  },
});
