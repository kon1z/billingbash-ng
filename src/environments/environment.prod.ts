import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BillingBash',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44382/',
    redirectUri: baseUrl,
    clientId: 'BillingBash_App',
    responseType: 'code',
    scope: 'offline_access BillingBash',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44382',
      rootNamespace: 'Kon.BillingBash',
    },
  },
} as Environment;
