import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Page } from '../../enum/page';
import { UtilRepoService } from '../../services/util-repo.service';

@Component({
  selector: 'app-main-insurance',
  templateUrl: './main-insurance.component.html',
  styleUrls: ['./main-insurance.component.css'],
})


export class MainInsuranceComponent implements OnInit {

  insuranceForm: FormGroup;
  numberOfInsuredValues: any[];
  typeOfFrequency: any[];
  policyDiscounts: any[];
  paymentMethods: any [];
  model: NgbDateStruct;

  constructor(private formBuilder: FormBuilder, private utilRepoService: UtilRepoService) {
    this.insuranceForm = this.formBuilder.group({});
    this.numberOfInsuredValues = this.utilRepoService.getNumberOfInsured();
    this.typeOfFrequency = this.utilRepoService.getTypeOfFrequency();
    this.policyDiscounts = this.utilRepoService.getPolicyDiscounts();
    this.paymentMethods = this.utilRepoService.getPaymentMethods();
  }

  ngOnInit(): void {
    this.utilRepoService.progress.next(Page.FIRST);
  }
}
