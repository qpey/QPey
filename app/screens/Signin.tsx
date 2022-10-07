import React from 'react';
import {Image, Keyboard, StyleSheet, View} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  ActivityIndicator,
  Button,
  ScreenWrapper,
  Text,
  TextInput,
} from '../components';
import {COLORS, FONTS} from '../config';
import {ErrorMessage} from '../components/form';
import {AuthStackParamList} from '../navigation/AuthNavigation';
import {PHONE_REGX} from '../config';

import authApis from '../apis/auth';
import useAuth from '../hooks/useAuth';
import useApi from '../hooks/useApi';

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required()
    .matches(PHONE_REGX, 'Invalid Phone Number')
    .label('Phone'),
  password: Yup.string().required().label('Password'),
});

type SigninDetails = {
  phone: string;
  password: string;
};

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const Signin: React.FC<Props> = ({navigation}) => {
  const [errorSigningIn, setErrorSigningIn] = React.useState('');
  const signInApi = useApi<string>(authApis.loginUser);
  const auth = useAuth();

  const handleSubmitForm = async ({password, phone}: SigninDetails) => {
    Keyboard.dismiss();
    setErrorSigningIn('');

    const response = await signInApi.request({password, phone});
    if (!response.ok) {
      setErrorSigningIn(response.data[0].message);
      return;
    }
    await auth.signIn(response.data.authToken);
  };

  if (signInApi.isLoading) {
    return <ActivityIndicator visible={signInApi.isLoading} />;
  }

  return (
    <ScreenWrapper style={styles.screen}>
      {/* logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {errorSigningIn && (
        <ErrorMessage
          error={errorSigningIn}
          visible={Boolean(errorSigningIn)}
          style={{alignSelf: 'center'}}
        />
      )}

      <Formik
        initialValues={{phone: '', password: ''}}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, touched}) => (
          <React.Fragment>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('phone')}
              keyboardType="phone-pad"
              label="Phone Number"
              placeholder="Phone"
            />
            <ErrorMessage
              error={errors.phone as string}
              visible={Boolean(touched.phone)}
            />
            <TextInput
              autoCapitalize="none"
              keyboardType="default"
              label="Password"
              onChangeText={handleChange('password')}
              placeholder="Password"
              secureTextEntry
            />
            <ErrorMessage
              error={errors.password as string}
              visible={Boolean(touched.password)}
            />
            <Button text="Continue" onPress={handleSubmit} />
          </React.Fragment>
        )}
      </Formik>

      <Text
        onPress={() => navigation.navigate('ForgotPassword')}
        style={[
          styles.linkText,
          {alignSelf: 'flex-end', paddingHorizontal: 8},
        ]}>
        forgot Password?
      </Text>

      <Text style={{marginVertical: 16}}>
        Don't have an account?
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={[styles.linkText]}>
          {' '}
          Register
        </Text>
      </Text>
    </ScreenWrapper>
  );
};

export default Signin;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 8,
    paddingTop: 24,
  },

  linkText: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    marginTop: 16,
    textTransform: 'capitalize',
  },

  logo: {width: 60, height: 60},
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '100%',
    marginVertical: 8,
  },
});
