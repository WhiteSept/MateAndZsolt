import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Options} from "ng5-slider";
import {UtilRepoService} from '../../services/util-repo.service';

@Component({
  selector: 'app-main-insurance',
  templateUrl: './main-insurance.component.html',
  styleUrls: ['./main-insurance.component.css']
})
export class MainInsuranceComponent implements OnInit {

  insuranceForm: FormGroup;
  numberOfInsuredValues: any[];
  typeOfFrequency: any[];


  constructor(private formBuilder: FormBuilder, private utilRepoService: UtilRepoService) {
    this.insuranceForm = this.formBuilder.group({});
    this.numberOfInsuredValues = this.utilRepoService.getNumberOfInsured();
    this.typeOfFrequency = this.utilRepoService.getTypeOfFrequency()
  }

  ngOnInit(): void {
  }

  nextPage() {
    this.utilRepoService.progress.next([0, 1, 0]);
  }
  prevPage() {
    this.utilRepoService.progress.next([1, 0, 0]);
  }
}
