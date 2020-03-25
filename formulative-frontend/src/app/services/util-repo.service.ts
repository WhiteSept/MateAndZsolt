import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilRepoService {

  numOfInsureds: any;

  constructor() {
    this.numOfInsureds =[
      {name: '1 person', value: 1},
      {name: '2 person', value: 2},
      {name: '3 person', value: 3},
      {name: '4 person', value: 4},
      {name: '5 person', value: 5},
    ]
  }

  getNumberOfInsured(){
    return this.numOfInsureds;
  };
}
