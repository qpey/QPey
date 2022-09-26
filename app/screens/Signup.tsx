import {StyleSheet} from 'react-native';
import React from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, ScreenWrapper, Text, TextInput} from '../components';
import {COLORS, FONTS, PHONE_REGX} from '../config';
import {ErrorMessage} from '../components/form';
import {AuthStackParamList} from '../navigation/AuthNavigation';

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required()
    .matches(PHONE_REGX, 'Phone must be valid')
    .label('phone address'),
  password: Yup.string().required().label('Password'),
});

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

type SignupDetails = {
  phone: string;
  password: string;
  username: string;
};

const Signin: React.FC<Props> = ({navigation}) => {
  const handleSubmitForm = async (values: SignupDetails) => {
    console.log(values);
  };

  return (
    <ScreenWrapper style={styles.screen}>
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
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  linkText: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    marginTop: 16,
    textTransform: 'capitalize',
    paddingHorizontal: 6,
  },
});
