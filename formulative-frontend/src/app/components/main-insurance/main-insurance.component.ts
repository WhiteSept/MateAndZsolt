import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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


    constructor(private formBuilder: FormBuilder, private utilRepoService: UtilRepoService) {
        this.insuranceForm = this.formBuilder.group({});
        this.numberOfInsuredValues = this.utilRepoService.getNumberOfInsured();
        this.typeOfFrequency = this.utilRepoService.getTypeOfFrequency();
    }

    ngOnInit(): void {
        this.utilRepoService.progress.next(Page.FIRST);
    }
}
