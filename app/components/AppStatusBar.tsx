import React from 'react';
import {StatusBar} from 'react-native';

import {COLORS} from '../config';

type Props = {
  mode: 'light' | 'dark';
};

const AppStatusBar = ({mode = 'light'}: Props) => {
  return (
    <StatusBar
      backgroundColor={mode === 'dark' ? COLORS.grayLight : COLORS.white}
      barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
    />
  );
};

export default AppStatusBar;
