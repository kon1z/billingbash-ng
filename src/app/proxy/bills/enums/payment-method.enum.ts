import { mapEnumToOptions } from '@abp/ng.core';

export enum PaymentMethod {
  Alipay = 0,
  WeChatPay = 1,
  Cash = 2,
}

export const paymentMethodOptions = mapEnumToOptions(PaymentMethod);
