import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MainNavigation from './app/navigation/MainNavigation';
import AuthNavigation from './app/navigation/AuthNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
