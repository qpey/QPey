import Client from './base';

const RESOURCE_ROUTE = '/decrypt';

// operate
const decrypt = (data: any) => Client.post(`${RESOURCE_ROUTE}/`, data);

export default {
  decrypt,
};
