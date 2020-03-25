import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilRepoService {

  numOfInsureds: any;
  typeOfFrequency: any;

  constructor() {
    this.numOfInsureds = [
      {name: '1 person', value: 1},
      {name: '2 person', value: 2},
      {name: '3 person', value: 3},
      {name: '4 person', value: 4},
      {name: '5 person', value: 5},
    ],
      this.typeOfFrequency = [
        {name: 'Year', value: 1},
        {name: 'Half', value: 2},
        {name: 'Quarter', value: 3},
        {name: 'Month', value: 4}
      ]

  }

  getNumberOfInsured() {
    return this.numOfInsureds;
  };

  getTypeOfFrequency() {
    return this.typeOfFrequency;
  }
}
