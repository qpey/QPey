import React from 'react';
import {Pressable, View} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  DoneScreen,
  GenerateQRCodeScreen,
  HomeScreen,
  PaymentDetailsScreen,
  PrintScreen,
  SettingsScreen,
} from '../screens';

import {COLORS, FONTS} from '../config';
import {ScreenWrapper, Text} from '../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export type GenerateQRCodeParamList = {
  GenerateQRCode: undefined;
  Print: {
    qrcode: string;
  };
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

export type ScanQRCodeParamList = {
  Home: undefined;
  PaymentDetails: undefined;
  Done: undefined;
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

type ScanGenerateTabNavigatorParamList = {
  Scan: undefined;
  Generate: undefined;
};
const ScanGenerateTabNavigator =
  createMaterialTopTabNavigator<ScanGenerateTabNavigatorParamList>();

const ScanGenerateScreen = () => {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigatorParamList>>();
  return (
    <ScreenWrapper>
      <View
        style={{
          marginBottom: 8,
          paddingHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.text,
            fontFamily: FONTS.semiBold,
            fontSize: 18,
          }}>
          Hello, Leonidas
        </Text>
        <Pressable
          style={{padding: 4}}
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <Ionicons name="ios-settings-outline" color={COLORS.text} size={20} />
        </Pressable>
      </View>

      <ScanGenerateTabNavigator.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {backgroundColor: COLORS.primary},
          tabBarPressColor: COLORS.primary,
          tabBarLabelStyle: {color: COLORS.text, fontFamily: FONTS.semiBold},
        }}>
        <ScanGenerateTabNavigator.Screen
          name={'Scan'}
          component={ScanNavigation}
        />
        <ScanGenerateTabNavigator.Screen
          name={'Generate'}
          component={GenerateQRCodeNavigation}
        />
      </ScanGenerateTabNavigator.Navigator>
    </ScreenWrapper>
  );
};

export type AppStackNavigatorParamList = {
  Settings: undefined;
  ScanGenerate: undefined;
};

const AppStackNavigator =
  createNativeStackNavigator<AppStackNavigatorParamList>();

const MainNavigation = () => {
  return (
    <ScreenWrapper>
      <AppStackNavigator.Navigator
        screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
        <AppStackNavigator.Screen
          name="ScanGenerate"
          component={ScanGenerateScreen}
        />
        <AppStackNavigator.Screen name="Settings" component={SettingsScreen} />
      </AppStackNavigator.Navigator>
    </ScreenWrapper>
  );
};

export default MainNavigation;
