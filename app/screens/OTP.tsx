import {Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import {COLORS} from '../config/colors';
import {ScreenWrapper, Text} from '../components';
import {AuthStackParamList} from '../navigation/AuthNavigation';
import {FONTS} from '../config';

type Props = NativeStackScreenProps<AuthStackParamList, 'OTP'>;

const OTP: React.FC<Props> = ({route}) => {
  const [code, setCode] = useState<string>('');
  const handleResendCode = () => {
    console.log({email: route.params.email});
  };

  const handleCodeChange = (codeInput: string) => {
    setCode(codeInput);
  };

  const handleCodeFilled = (codeInput: string) => {
    console.log(codeInput);
  };

  return (
    <ScreenWrapper contentContainerStyle={styles.container} scrollable>
      {/* logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* info text */}
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoTextTitle}>Verification</Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
          }}>
          Please check your email for the OTP token we've sent you
        </Text>
      </View>

      {/* OTP */}
      <OTPInputView
        style={{width: '80%', height: 100}}
        pinCount={4}
        onCodeChanged={handleCodeChange}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={handleCodeFilled}
        placeholderTextColor={COLORS.text}
        placeholderCharacter="0"
      />

      {/* re-send */}
      <Text style={{marginVertical: 16}}>
        Didn't get the code?
        <Text onPress={handleResendCode} style={[styles.linkText]}>
          {' '}
          Resend
        </Text>
      </Text>
    </ScreenWrapper>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
  },

  logo: {width: 60, height: 60},
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '100%',
    marginVertical: 8,
  },

  infoTextContainer: {alignItems: 'center', marginBottom: 16, width: '100%'},

  infoTextTitle: {fontSize: 20, marginBottom: 8},

  cancelText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 16,
  },

  error: {color: COLORS.error, fontWeight: '400', marginTop: 4},

  linkText: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    marginTop: 16,
    textTransform: 'capitalize',
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 4,
    borderRadius: 0,
  },

  underlineStyleHighLighted: {
    borderColor: COLORS.primary,
  },
});
