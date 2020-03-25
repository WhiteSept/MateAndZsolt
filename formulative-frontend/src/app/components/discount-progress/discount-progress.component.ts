import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-progress',
  templateUrl: './discount-progress.component.html',
  styleUrls: ['./discount-progress.component.css']
})
export class DiscountProgressComponent implements OnInit {
  progress = 35;

  constructor() { }

  ngOnInit(): void {
  }

}
