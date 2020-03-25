import {Component, OnInit} from '@angular/core';
import {UtilRepoService} from "../../services/util-repo.service";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor(private utilRepoService: UtilRepoService) {
  }


  isFirstPage: boolean = true;
  isSecondPage: boolean = false;
  isThirdPage: boolean = false;
  pages: boolean[] = [this.isFirstPage, this.isSecondPage, this.isThirdPage]
  activePage: number[];

  ngOnInit(): void {

    this.utilRepoService.progress.subscribe((data) => {
        this.activePage = data;
        console.log(this.activePage)
        this.setPages(this.activePage)
      },
    );
  }


  setPages(data: number[]) {
    for (let i = 0; i < data.length; i++) {
      this.pages[i] = data[i] === 1;
    }
  }
}
