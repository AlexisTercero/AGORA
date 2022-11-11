import { create } from 'apisauce';
import autoStorage from '../auth/storage';

const apiClient = create({
  baseURL: 'http://192.168.0.127:9000/api/',
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = autoStorage.getToken();
  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;
});

export default apiClient;
