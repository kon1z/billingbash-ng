import { AfterViewInit, Component } from '@angular/core';
import { BillService } from '@proxy/application/app-services';
import { ConsumptionRecordDto } from '@proxy/application/dtos';
import { Router } from '@angular/router';
import { LocalizationService } from '@abp/ng.core';
import { PaymentMethod, paymentMethodOptions } from '@proxy/bills/enums';
import { IdentityUserDto } from '@proxy/volo/abp/identity';

@Component({
  selector: 'app-consumption-record-list',
  templateUrl: './consumption-record-list.component.html',
  styleUrl: './consumption-record-list.component.scss'
})
export class ConsumptionRecordListComponent implements AfterViewInit {
  constructor(
    private billService: BillService,
    private router: Router,
    private localizationService: LocalizationService
  ) {
  }

  consumptionRecordDtos: ConsumptionRecordDto[] = new Array<ConsumptionRecordDto>();
  totalCount: number = 0;
  skipCount: number = 0;
  maxResultCount: number = 20;

  paymentMethodOptions: { value: number; text: string }[] = [];

  getPaymentMethodOptions(paymentMethod: PaymentMethod): string {
    return this.paymentMethodOptions.find(option => option.value === paymentMethod).text;
  }

  getJoinerNames(users: IdentityUserDto[]): string {
    return users.map(user => user.userName).join(', ');
  }


  ngAfterViewInit(): void {
    this.paymentMethodOptions = paymentMethodOptions.map(options => ({
      ...options,
      text: this.localizationService.instant(`PaymentMethod.${options.key}`)
    }));

    this.billService.getListConsumptionRecord({
      skipCount: this.skipCount,
      maxResultCount: this.maxResultCount
    })
      .subscribe(res => {
        this.consumptionRecordDtos = res.items;
        this.totalCount = res.totalCount;
      });
  }

  query() {
    this.billService.getListConsumptionRecord({
      skipCount: this.skipCount,
      maxResultCount: this.maxResultCount
    })
      .subscribe(res => {
        this.consumptionRecordDtos = res.items;
        this.totalCount = res.totalCount;

        console.log(res.items);
      });
  }

  clear() {
    this.consumptionRecordDtos = [];
    this.totalCount = 0;
    this.skipCount = 0;
    this.maxResultCount = 20;
  }

  create() {
    this.router.navigate(['/consumption-record/create'])
      .then(() => {
      });
  }

  detail(id: number) {
    this.router.navigate(['/consumption-record/detail', id])
      .then(() => {
      });
  }

  nextPage() {
    if (this.skipCount + this.maxResultCount >= this.totalCount) {
      this.skipCount = this.totalCount;
    } else {
      this.skipCount += this.maxResultCount;
    }

    this.billService.getListConsumptionRecord({
      skipCount: this.skipCount,
      maxResultCount: this.maxResultCount
    })
      .subscribe(res => {
        this.consumptionRecordDtos = [...this.consumptionRecordDtos, ...res.items];
        this.totalCount = res.totalCount;
      });
  }

  update(id: number) {
    this.router.navigate(['/consumption-record/update', id])
      .then(() => {
      });
  }

  delete(id: number) {
    this.billService.deleteConsumption(id).subscribe(res => {
      this.consumptionRecordDtos.splice(this.consumptionRecordDtos.findIndex(dto => dto.id === id), 1);
      this.totalCount--;
    });
  }


}
