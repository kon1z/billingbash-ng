import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumptionRecordRoutingModule } from './consumption-record-routing.module';
import { ConsumptionRecordListComponent } from './consumption-record-list/consumption-record-list.component';
import { ConsumptionRecordCreateComponent } from './consumption-record-create/consumption-record-create.component';
import { ConsumptionRecordUpdateComponent } from './consumption-record-update/consumption-record-update.component';
import { ConsumptionRecordDetailComponent } from './consumption-record-detail/consumption-record-detail.component';
import { CoreModule } from '@abp/ng.core';


@NgModule({
  declarations: [
    ConsumptionRecordListComponent,
    ConsumptionRecordCreateComponent,
    ConsumptionRecordUpdateComponent,
    ConsumptionRecordDetailComponent
  ],
  imports: [
    CommonModule,
    ConsumptionRecordRoutingModule,
    CoreModule
  ]
})
export class ConsumptionRecordModule {
}
