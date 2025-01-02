import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ConsumptionRecordDto, CreateConsumptionRecordRequest, GetListConsumptionRecordRequest } from '../dtos/models';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  apiName = 'Default';
  

  createConsumptionRecord = (request: CreateConsumptionRecordRequest, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ConsumptionRecordDto>({
      method: 'POST',
      url: '/api/app/bill/consumption-record',
      body: request,
    },
    { apiName: this.apiName,...config });
  

  deleteConsumption = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/bill/${id}/consumption`,
    },
    { apiName: this.apiName,...config });
  

  getListConsumptionRecord = (request: GetListConsumptionRecordRequest, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ConsumptionRecordDto>>({
      method: 'GET',
      url: '/api/app/bill/consumption-record',
      params: { sorting: request.sorting, skipCount: request.skipCount, maxResultCount: request.maxResultCount },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
