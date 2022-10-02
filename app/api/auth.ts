import Client from './base';

const RESOURCE_ROUTE = '/auth';

// register
const registerUser = (userDetails: {phone: string; password: string}) =>
  Client.post(`${RESOURCE_ROUTE}/signup/`, userDetails);

// login
const loginUser = (userDetails: {phone: string; password: string}) =>
  Client.post(`${RESOURCE_ROUTE}/signin/`, userDetails);

// get current user
const getCurrentUser = () => Client.get(`${RESOURCE_ROUTE}/current-user/`);

// ping server
const pingServer = () => Client.get(`${RESOURCE_ROUTE}/ping/`);

export default {
  getCurrentUser,
  loginUser,
  pingServer,
  registerUser,
};
