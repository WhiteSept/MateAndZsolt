import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Page } from '../enum/page';
import { MainInsuranceModel } from '../model/main-insurance-model';

@Injectable({
    providedIn: 'root',
})
export class UtilRepoService {

    progress = new Subject<Page>();


    numOfInsureds: any [];
    typeOfFrequency: any [];
    policyDiscounts: any [];
    paymentMethods: any [];
    customerDiscount: any[];
    campaignDiscount: any[];
    discounts: any [];

    constructor() {
        this.numOfInsureds = [
            {name: '1 person', value: 1},
            {name: '2 person', value: 2},
            {name: '3 person', value: 3},
            {name: '4 person', value: 4},
            {name: '5 person', value: 5},
        ];

        this.typeOfFrequency = [
            {name: 'Year', value: 1},
            {name: 'Half', value: 2},
            {name: 'Quarter', value: 3},
            {name: 'Month', value: 4},
        ];
        this.discounts = [
            'Family discount', 'Charge frequency discount', 'Payment method discount', 'Policy discount', 'Campaign discount', 'Customer discount',
        ];
        this.policyDiscounts = [
            {name: '1%', value: 0.01},
            {name: '2%', value: 0.02},
            {name: '3%', value: 0.03},
            {name: '4%', value: 0.04},
            {name: '5%', value: 0.05},
            {name: '6%', value: 0.06},
            {name: '7%', value: 0.07},
            {name: '8%', value: 0.08},
            {name: '9%', value: 0.09},
            {name: '10%', value: 0.1},
        ];

        this.paymentMethods = [
            {name: 'cash', value: 1},
            {name: 'bank', value: 1},
            {name: 'direct bank', value: 1},
            {name: 'direct same bank', value: 2},
        ];

        this.campaignDiscount = [
            {name: 'true', value: 1},
            {name: 'false', value: 2},
        ];

        this.customerDiscount = [
            {name: 'true', value: 1},
            {name: 'false', value: 2},
        ];
    }

    getNumberOfInsured() {
        return this.numOfInsureds;
    };

    getTypeOfFrequency() {
        return this.typeOfFrequency;
    }

    getPolicyDiscounts() {
        return this.policyDiscounts;
    }

    getPaymentMethods() {
        return this.paymentMethods;
    }

    getCustomerDiscount() {
        return this.customerDiscount;
    }

    getCampaignDiscount() {
        return this.campaignDiscount;
    }

    findValues(formValue) {
        for (let disc of this.campaignDiscount) {
            if (disc.name == formValue.campaignDisc.toString()) {
                formValue.campaignDisc = disc.value;
            }
        }
        for (let type of this.typeOfFrequency) {
            if (type.name == formValue.chargeFreq) {
                formValue.campaignDisc = type.value;
            }
            console.log(formValue.chargeFreq);
        }
        for (let insured of  this.numOfInsureds) {
            if (insured.name == formValue.numberOfIns) {
                formValue.numberOfIns = insured.value;
            }
        }
        for (let customer of this.customerDiscount) {
            if (customer.name == formValue.customerDisc.toString()) {
                formValue.customerDisc = customer.value;
            }
        }
        for (let payment of this.paymentMethods) {
            if (payment.name == formValue.paymentMethod) {
                formValue.paymentMethod = payment.value;
            }
        }
        for (let policy of this.policyDiscounts) {
            if (policy.name == formValue.policyDisc) {
                formValue.policyDisc = policy.value;
            }
        }

    }
}
