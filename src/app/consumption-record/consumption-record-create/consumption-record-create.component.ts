import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BillService, GroupService } from '@proxy/application/app-services';
import { IdentityUserDto } from '@proxy/volo/abp/identity';

@Component({
  selector: 'app-consumption-record-create',
  templateUrl: './consumption-record-create.component.html',
  styleUrl: './consumption-record-create.component.scss'
})
export class ConsumptionRecordCreateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private billService: BillService,
    private groupService: GroupService
  ) {
  }

  formGroup: FormGroup;
  users: IdentityUserDto[];

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      consumptionAmount: new FormControl('', [Validators.required]),
      consumptionDate: new FormControl('', [Validators.required]),
      paymentMethod: new FormControl(''),
      remarks: new FormControl(''),
      joiners: new FormControl('', [Validators.required])
    });

    this.groupService.getListUser('37baf063-7c13-4c61-be3c-657bb1d44bf0')
      .subscribe(res => {
        this.users = res;
        console.log(res);
      });
  }

  submit() {
    this.billService.createConsumptionRecord({
      classificationTag: '',
      consumptionAmount: this.formGroup.get('consumptionAmount').value,
      consumptionDate: this.formGroup.get('consumptionDate').value,
      consumptionType: '',
      joinerUserIds: this.formGroup.get('joiners').value,
      merchantInformation: '',
      paymentMethod: this.formGroup.get('paymentMethod').value,
      product: 'NULL',
      remarks: this.formGroup.get('remarks').value

    }).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
