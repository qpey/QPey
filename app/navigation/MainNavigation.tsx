import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {
  DoneScreen,
  GenerateQRCodeScreen,
  HomeScreen,
  PaymentDetailsScreen,
  PrintScreen,
} from '../screens';
import {COLORS} from '../config';

export type GenerateQRCodeParamList = {
  GenerateQRCode: undefined;
  Print: {
    qrcode: string;
  };
};

export type ScanQRCodeParamList = {
  Home: undefined;
  PaymentDetails: undefined;
  Done: undefined;
};

const GenerateQRCodeStack =
  createNativeStackNavigator<GenerateQRCodeParamList>();

const GenerateQRCodeNavigation = () => {
  return (
    <GenerateQRCodeStack.Navigator screenOptions={{headerShown: false}}>
      <GenerateQRCodeStack.Screen
        name="GenerateQRCode"
        component={GenerateQRCodeScreen}
      />
      <GenerateQRCodeStack.Screen name="Print" component={PrintScreen} />
    </GenerateQRCodeStack.Navigator>
  );
};

const ScanStack = createNativeStackNavigator<ScanQRCodeParamList>();

const ScanNavigation = () => {
  return (
    <ScanStack.Navigator screenOptions={{headerShown: false}}>
      <ScanStack.Screen name="Home" component={HomeScreen} />
      <ScanStack.Screen
        name="PaymentDetails"
        component={PaymentDetailsScreen}
      />
      <ScanStack.Screen name="Done" component={DoneScreen} />
    </ScanStack.Navigator>
  );
};

const MainNavigationTab = createMaterialTopTabNavigator<{
  Scan: undefined;
  Generate: undefined;
}>();

const MainNavigation = () => {
  return (
    <MainNavigationTab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: COLORS.primary},
      }}>
      <MainNavigationTab.Screen name={'Scan'} component={ScanNavigation} />
      <MainNavigationTab.Screen
        name={'Generate'}
        component={GenerateQRCodeNavigation}
      />
    </MainNavigationTab.Navigator>
  );
};

export default MainNavigation;
