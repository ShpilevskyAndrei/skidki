import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiscountsPageContainerComponent } from "./pages/discounts-page/discounts-page-container.component";

const routes: Routes = [
  {
    path: '', component: DiscountsPageContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscountsRoutingModule { }
