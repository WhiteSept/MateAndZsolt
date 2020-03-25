import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Options} from "ng5-slider";

@Component({
  selector: 'app-main-insurance',
  templateUrl: './main-insurance.component.html',
  styleUrls: ['./main-insurance.component.css']
})
export class MainInsuranceComponent implements OnInit {

  insuranceForm: FormGroup;



  constructor(private formBuilder: FormBuilder) {
    this.insuranceForm = this.formBuilder.group({

    });
  }

  ngOnInit(): void {
  }

}
