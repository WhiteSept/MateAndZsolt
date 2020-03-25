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

  value: number = 10;
  options: Options = {
    floor: 3,
    
    ceil: 35
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
