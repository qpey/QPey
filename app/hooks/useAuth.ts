import React from 'react';
import {AuthContextType} from '../context/auth';
import {AuthContext} from '../context/AuthContext';
import authStorage from '../utils/authStorage';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const {user, setUser} = React.useContext(AuthContext) as AuthContextType;

  const signIn = async (authToken: string) => {
    await authStorage.storeToken(authToken);
    setUser(jwtDecode(authToken));
  };

  const signOut = async () => {
    await authStorage.removeToken();
    setUser(null);
  };

  return {user, setUser, signIn, signOut};
};

export default useAuth;
