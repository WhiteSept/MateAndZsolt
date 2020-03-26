import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-circle',
  templateUrl: './percent-circle.component.html',
  styleUrls: ['./percent-circle.component.css']
})
export class PercentCircleComponent implements OnInit {
  progress = 35;
  constructor() { }

  ngOnInit(): void {
  }

}
