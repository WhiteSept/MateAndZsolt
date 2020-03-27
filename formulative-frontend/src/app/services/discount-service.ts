import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {DiscountModel} from "../model/discount-model";

@Injectable({
  providedIn: 'root',
})
export class DiscountService {

  discount = new Subject<DiscountModel>()

  constructor() {
  }

}
