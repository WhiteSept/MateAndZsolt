import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainInsuranceComponent} from './components/main-insurance/main-insurance.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {Ng5SliderModule} from 'ng5-slider';
import { SliderComponent } from './components/slider/slider.component';
import { AdditionalInsuranceComponent } from './components/additional-insurance/additional-insurance.component';
import { DiscountProgressComponent } from './components/discount-progress/discount-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInsuranceComponent,
    ProgressBarComponent,
    FooterComponent,
    SliderComponent,
    SliderComponent,
    AdditionalInsuranceComponent,
    DiscountProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng5SliderModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


