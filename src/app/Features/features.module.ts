import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './home/components/main/main.component';
import { SharedModule } from '../Shared/shared.module';
import { ProductslistComponent } from './home/components/main/productslist/productslist.component';



@NgModule({
  declarations: [
    MainComponent,
    ProductslistComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class FeaturesModule { }
