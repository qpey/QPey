import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ScreenWrapper, Text} from '../components';

import useAuth from '../hooks/useAuth';

const Settings = () => {
  const auth = useAuth();
  return (
    <ScreenWrapper style={{padding: 8}}>
      <Text>Settings</Text>
      <Text
        onPress={() => {
          auth.signOut();
        }}>
        Logout
      </Text>
    </ScreenWrapper>
  );
};

export default Settings;

const styles = StyleSheet.create({});
