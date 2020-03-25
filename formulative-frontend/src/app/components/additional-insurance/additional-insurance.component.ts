import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilRepoService } from '../../services/util-repo.service';

@Component({
    selector: 'app-additional-insurance',
    templateUrl: './additional-insurance.component.html',
    styleUrls: ['./additional-insurance.component.css'],
})
export class AdditionalInsuranceComponent implements OnInit {

    additionalInsuranceForm: FormGroup;

    constructor(private utilRepoService: UtilRepoService, private formBuilder: FormBuilder, private router: Router) {
        this.additionalInsuranceForm = this.formBuilder.group({});
    }

    ngOnInit(): void {
        this.utilRepoService.progress.next('second');
    }

    nextPage() {

    }

    prevPage() {
        this.router.navigate(['']);
    }
}
