import Client from './base';

const RESOURCE_ROUTE = '/encrypt';

// operate
const encrypt = (data: any) => Client.post(`${RESOURCE_ROUTE}/`, data);

export default {
  encrypt,
};
