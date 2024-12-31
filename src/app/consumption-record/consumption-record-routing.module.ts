import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumptionRecordListComponent } from './consumption-record-list/consumption-record-list.component';
import { ConsumptionRecordCreateComponent } from './consumption-record-create/consumption-record-create.component';
import { ConsumptionRecordUpdateComponent } from './consumption-record-update/consumption-record-update.component';
import { ConsumptionRecordDetailComponent } from './consumption-record-detail/consumption-record-detail.component';

const routes: Routes = [
  { path: '', component: ConsumptionRecordListComponent },
  { path: 'create', component: ConsumptionRecordCreateComponent },
  { path: 'update/:id', component: ConsumptionRecordUpdateComponent },
  { path: 'detail/:id', component: ConsumptionRecordDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumptionRecordRoutingModule { }
