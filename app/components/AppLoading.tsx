import React from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

import {COLORS} from '../config/';
import {ScreenWrapper, Text} from '.';
import {FONTS} from '../config';
import AppStatusBar from './AppStatusBar';

type Props = {
  startAsync: () => Promise<void>;
  onFinish: () => void;
};

const AppLoading: React.FC<Props> = ({onFinish, startAsync}) => {
  const handleStartAsync = async () => {
    try {
      setTimeout(async () => {
        await startAsync();
        onFinish();
      }, 1500);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    handleStartAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenWrapper style={styles.screen}>
      <AppStatusBar mode="light" />
      <LottieView
        source={require('../assets/animations/loading.json')}
        autoPlay
        loop
      />

      <Text style={styles.catchPhrase}>Secure Scan, Safe Payment</Text>
    </ScreenWrapper>
  );
};

export default AppLoading;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catchPhrase: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    top: 80,
    textAlign: 'center',
  },
});
