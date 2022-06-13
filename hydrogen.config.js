import { defineConfig } from '@shopify/hydrogen/config';
import {
  CookieSessionStorage,
  PerformanceMetricsServerAnalyticsConnector,
  ShopifyServerAnalyticsConnector,
} from '@shopify/hydrogen';

export default defineConfig({
  shopify: {
    storeDomain: 'asuman-emporium.myshopify.com',
    storefrontToken: '2081c5b74106b34effed85fcd7b8ebfd',
    storefrontApiVersion: '2022-04',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
  serverAnalyticsConnectors: [
    PerformanceMetricsServerAnalyticsConnector,
    ShopifyServerAnalyticsConnector,
  ],
});
