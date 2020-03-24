import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-main-insurance',
  templateUrl: './main-insurance.component.html',
  styleUrls: ['./main-insurance.component.css']
})
export class MainInsuranceComponent implements OnInit {

  insuranceForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
