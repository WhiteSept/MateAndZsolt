import { Component, OnInit } from '@angular/core';
import { UtilRepoService } from '../../services/util-repo.service';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {

    constructor(private utilRepoService: UtilRepoService) {
    }


    isFirstPage: boolean;
    isSecondPage: boolean;
    isThirdPage: boolean;
    pages: boolean[] = [this.isFirstPage, this.isSecondPage, this.isThirdPage];
    activePage: number[];

    ngOnInit(): void {
        this.utilRepoService.progress.subscribe((data) => {
            if (data === 'first') {
                this.isFirstPage = true;
                this.isSecondPage = false;
                this.isThirdPage = false;
            }
            if (data === 'second') {
                this.isSecondPage = true;
                this.isFirstPage = false;
                this.isThirdPage = false;
            }
            if (data === 'third') {
                this.isFirstPage = false;
                this.isSecondPage = false;
                this.isThirdPage = true;
            }
        });

    }
}
