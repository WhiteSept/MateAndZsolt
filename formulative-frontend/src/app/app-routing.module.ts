import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainInsuranceComponent} from "./components/main-insurance/main-insurance.component";


const routes: Routes = [
  {path: "", component: MainInsuranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
