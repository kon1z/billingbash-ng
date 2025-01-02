import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IdentityUserDto } from '../../volo/abp/identity/models';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  apiName = 'Default';
  

  getListUser = (groupId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUserDto[]>({
      method: 'GET',
      url: `/api/app/group/user/${groupId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
