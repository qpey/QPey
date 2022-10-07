import React from 'react';
import {Image, Keyboard, StyleSheet, View} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, ScreenWrapper, Text, TextInput} from '../components';
import {COLORS, FONTS, PHONE_REGX} from '../config';
import {ErrorMessage} from '../components/form';
import {AuthStackParamList} from '../navigation/AuthNavigation';

import authApis from '../apis/auth';
import useAuth from '../hooks/useAuth';
import useApi from '../hooks/useApi';

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required()
    .matches(PHONE_REGX, 'Phone must be valid')
    .label('Phone number'),
  password: Yup.string().required().label('Password'),
  username: Yup.string().required().label('Username'),
});

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

type SignupDetails = {
  phone: string;
  password: string;
  username: string;
};

const Signin: React.FC<Props> = ({navigation}) => {
  const [signUpError, setSignUpError] = React.useState('');
  const signUpApi = useApi(authApis.registerUser);
  const signInApi = useApi(authApis.loginUser);
  const auth = useAuth();

  const handleSubmitForm = async ({
    username,
    password,
    phone,
  }: SignupDetails) => {
    Keyboard.dismiss();
    setSignUpError('');

    let response = await signUpApi.request({name: username, password, phone});
    if (!response.ok) {
      setSignUpError(response.data.message);
      return;
    }

    // log user in
    response = await signInApi.request({password, phone});
    if (!response.ok) {
      setSignUpError(response.data.message);
      return;
    }
    await auth.signIn(response.data.authToken);
  };

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

      {signUpError && (
        <ErrorMessage
          error={signUpError}
          visible={Boolean(signUpError)}
          style={{alignSelf: 'center'}}
        />
      )}

      <Formik
        initialValues={{phone: '', password: '', username: ''}}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, touched}) => (
          <React.Fragment>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('phone')}
              keyboardType="phone-pad"
              label="Phone"
              placeholder="Phone"
            />
            <ErrorMessage
              error={errors.phone as string}
              visible={Boolean(touched.phone)}
            />

            <TextInput
              autoCapitalize="none"
              keyboardType="default"
              label="Username"
              onChangeText={handleChange('username')}
              placeholder="Username"
            />
            <ErrorMessage
              error={errors.username as string}
              visible={touched.username}
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

      <Text style={{marginVertical: 16}}>
        Already have an account?
        <Text
          onPress={() => navigation.navigate('SignIn')}
          style={[styles.linkText]}>
          {' '}
          Sign in
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
    paddingTop: 24,
    paddingHorizontal: 8,
  },

  linkText: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    marginTop: 16,
    textTransform: 'capitalize',
    paddingHorizontal: 6,
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
