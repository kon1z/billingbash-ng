import { Component } from '@angular/core';
import { BillService } from '@proxy/application/app-services';

@Component({
  selector: 'app-consumption-record-list',
  templateUrl: './consumption-record-list.component.html',
  styleUrl: './consumption-record-list.component.scss'
})
export class ConsumptionRecordListComponent {
  constructor(
    private billService: BillService
  ) {
  }
}
