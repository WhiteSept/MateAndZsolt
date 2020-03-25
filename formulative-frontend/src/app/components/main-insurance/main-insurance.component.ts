import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Options} from "ng5-slider";

@Component({
  selector: 'app-main-insurance',
  templateUrl: './main-insurance.component.html',
  styleUrls: ['./main-insurance.component.css']
})
export class MainInsuranceComponent implements OnInit {

  insuranceForm: FormGroup;

  value: number = 123;
  options: Options = {
    floor: 0,
    ceil: 250
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
