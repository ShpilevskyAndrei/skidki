import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountsRoutingModule } from './discounts-routing.module';
import { DiscountsPageComponent } from "./pages/discounts-page/discounts-page.component";
import { DiscountsPageContainerComponent } from "./pages/discounts-page/discounts-page-container.component";

@NgModule({
  declarations: [DiscountsPageComponent, DiscountsPageContainerComponent],
  imports: [
    CommonModule,
    DiscountsRoutingModule
  ]
})
export class DiscountsModule { }
