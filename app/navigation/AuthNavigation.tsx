import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPasswordScreen,
  OTPScreen,
  SigninScreen,
  SignupScreen,
} from '../screens';

export type AuthStackParamList = {
  ForgotPassword: undefined;
  SignUp: undefined;
  SignIn: undefined;
  OTP: {
    email: string;
  };
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <AuthStack.Screen name="SignIn" component={SigninScreen} />
      <AuthStack.Screen name="SignUp" component={SignupScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
      <AuthStack.Screen name="OTP" component={OTPScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
