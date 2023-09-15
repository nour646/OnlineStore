import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MainComponent } from '../main/main.component';

import { Routes ,RouterModule } from '@angular/router';
import { ProvidedServicesComponent } from '../provided-services/provided-services.component';


const routes:Routes = [
  {path: '', component: MainComponent}
]

@NgModule({
  declarations: [
    ProductCardComponent,
    MainComponent,
    ProvidedServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
