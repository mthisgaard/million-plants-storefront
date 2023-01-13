import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'million-plants.myshopify.com',
    storefrontToken: import.meta.env.PUBLIC_API_ACCESS_TOKEN,
    storefrontApiVersion: '2022-07',
  },
});
