import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainInsuranceComponent} from './components/main-insurance/main-insurance.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {Ng5SliderModule} from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    MainInsuranceComponent,
    ProgressBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


