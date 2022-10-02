import {create} from 'apisauce';

const baseURL = 'https://qpey.herokuapp.com/api/v1';

const client = create({
  baseURL,
});

// client.addAsyncRequestTransform(request => {});

export default client;
