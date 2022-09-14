import React from 'react';
// import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import MainNavigation from './app/navigation/MainNavigation';
import AuthNavigation from './app/navigation/AuthNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default App;
