import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  DoneScreen,
  GenerateQRCodeScreen,
  HomeScreen,
  PaymentDetailsScreen,
  PrintScreen,
} from '../screens';

export type MainNavigationParamList = {
  Home: undefined;
  PaymentDetails: undefined;
  Done: undefined;
  GenerateQRCode: undefined;
  Print: {
    qrcode: string;
  };
};

const Stack = createNativeStackNavigator<MainNavigationParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
      <Stack.Screen name="Done" component={DoneScreen} /> */}
      <Stack.Screen name="GenerateQRCode" component={GenerateQRCodeScreen} />
      <Stack.Screen name="Print" component={PrintScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
