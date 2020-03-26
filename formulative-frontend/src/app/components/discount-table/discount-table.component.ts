import { Component, OnInit } from '@angular/core';
import { UtilRepoService } from '../../services/util-repo.service';

@Component({
    selector: 'app-discount-table',
    templateUrl: './discount-table.component.html',
    styleUrls: ['./discount-table.component.css'],
})
export class DiscountTableComponent implements OnInit {

    discount: string[];

    constructor(private utilRepoService: UtilRepoService) {
        this.discount = utilRepoService.discounts;
    }

    ngOnInit(): void {
    }

}
