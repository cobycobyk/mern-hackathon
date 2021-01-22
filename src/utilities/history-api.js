import sendRequest from './send-request';

const BASE_URL = '/api/orders';

//retrieve all paid orders for logged in user
export function getOrders() {
  return sendRequest(`${BASE_URL}`);
}