import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

const KEY = 'AUTHTOKEN';

const storeToken = async (authToken: string) => {
  try {
    await AsyncStorage.setItem(KEY, authToken);
  } catch (error: any) {
    console.log('Error storing token', error.message);
  }
};

const getToken = async () => {
  try {
    return await AsyncStorage.getItem(KEY);
  } catch (error: any) {
    console.log('Error fetching token', error.message);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (error: any) {
    console.log('Error removing token', error.message);
  }
};

const getUser = async (): Promise<null | {}> => {
  const authToken = await getToken();
  return authToken ? jwtDecode(authToken) : null;
};

export default {getUser, getToken, removeToken, storeToken};
