import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DoneScreen, HomeScreen, PaymentDetailsScreen} from '../screens';

type StackParamList = {
  Home: undefined;
  PaymentDetails: undefined;
  Done: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
      <Stack.Screen name="Done" component={DoneScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
