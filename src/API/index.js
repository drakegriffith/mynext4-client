import axios from 'axios';

export let API;

export function init_api(token, options) {
  const apiOptions = {
    baseURL: 'https://app.mynext4.com',
    timeout: 30000, // ms
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...((options || {}).headers || {})
    },
    ...(options || {}),
  };
  API = axios.create(apiOptions);

  // Example of a response interceptor -- simply prints the error the console
  // Can delete, leaving it here in case you need it
  API.interceptors.response.use(
    (res) => res,
    (error) => {
      console.log(`[ERROR] ${error}`);
      return Promise.reject(error);
    }
  );
}

