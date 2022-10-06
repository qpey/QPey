import {StyleSheet} from 'react-native';
import React from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, ScreenWrapper, Text, TextInput} from '../components';
import {COLORS, FONTS} from '../config';
import {ErrorMessage} from '../components/form';
import {AuthStackParamList} from '../navigation/AuthNavigation';
import {PHONE_REGX} from '../config';

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required()
    .matches(PHONE_REGX, 'Invalid Phone Number')
    .label('Phone'),
  password: Yup.string().required().label('Password'),
});

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

type SigninDetails = {
  phone: string;
  password: string;
};

const Signin: React.FC<Props> = ({navigation}) => {
  const handleSubmitForm = async (values: SigninDetails) => {
    console.log(values);
  };

  return (
    <ScreenWrapper style={styles.screen}>
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
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  linkText: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    marginTop: 16,
    textTransform: 'capitalize',
  },
});
