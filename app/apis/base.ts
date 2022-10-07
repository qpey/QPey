import {create} from 'apisauce';
import authStorage from '../utils/authStorage';

const baseURL = 'https://qpey.herokuapp.com/api/v1';

const client = create({
  baseURL,
});

client.addAsyncRequestTransform(async request => {
  const authToken = await authStorage.getToken();
  if (!authToken) {
    return;
  }
  request.headers.Authorization = `Bearer ${authToken}`;
});
export default client;
