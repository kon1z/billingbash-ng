import { Environment } from '@abp/ng.core';

const baseUrl = 'http://konsoft.top:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BillingBash',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://konsoft.top:8443/',
    redirectUri: baseUrl,
    clientId: 'BillingBash_App',
    responseType: 'code',
    scope: 'offline_access BillingBash',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://konsoft.top:8443',
      rootNamespace: 'Kon.BillingBash',
    },
  },
} as Environment;
