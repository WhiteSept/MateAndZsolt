import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  value: number = 3;
  options: Options = {
    floor: 3,
    ceil: 35,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
