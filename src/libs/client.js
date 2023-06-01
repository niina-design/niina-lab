import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'niina-lab',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.API_KEY,
});