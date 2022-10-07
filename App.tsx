import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MainNavigation from './app/navigation/MainNavigation';
import AuthNavigation from './app/navigation/AuthNavigation';
import authStorage from './app/utils/authStorage';
import AppLoading from './app/components/AppLoading';
import {AuthContext} from './app/context/AuthContext';

const App = () => {
  const [user, setUser] = React.useState<any | null>(null);
  const [isReady, setIsReady] = React.useState<boolean>(false);

  const restoreToken = async () => {
    const restoredUser = await authStorage.getUser();
    if (!restoredUser) {
      return;
    }
    setUser(restoredUser);
  };

  if (!isReady) {
    return (
      <AppLoading onFinish={() => setIsReady(true)} startAsync={restoreToken} />
    );
  }

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <React.Fragment>
          {user ? <MainNavigation /> : <AuthNavigation />}
        </React.Fragment>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
