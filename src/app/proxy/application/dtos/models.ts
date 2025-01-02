import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { PaymentMethod } from '../../bills/enums/payment-method.enum';
import type { IdentityUserDto } from '../../volo/abp/identity/models';

export interface ConsumptionRecordDto extends EntityDto<number> {
  consumptionDate?: string;
  consumptionAmount: number;
  consumptionType?: string;
  merchantInformation?: string;
  product?: string;
  remarks?: string;
  classificationTag?: string;
  paymentMethod: PaymentMethod;
  joiners: IdentityUserDto[];
}

export interface CreateConsumptionRecordRequest {
  consumptionDate?: string;
  consumptionAmount: number;
  consumptionType?: string;
  merchantInformation?: string;
  product?: string;
  remarks?: string;
  classificationTag?: string;
  paymentMethod: PaymentMethod;
  joinerUserIds: string[];
}

export interface GetListConsumptionRecordRequest extends PagedAndSortedResultRequestDto {
}
