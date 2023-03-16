import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './modules/overall/pages/error-page/error-page.component';
import { DashboardPageContainerComponent } from './modules/overall/pages/dashboard-page/dashboard-page-container.component';
import {DiscountsModule} from "./modules/discounts/discounts.module";

const routes: Routes = [
  { path: '', component: DashboardPageContainerComponent },
  { path: 'sign', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path: 'account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)},
  { path: 'discounts', loadChildren: () => import('./modules/discounts/discounts.module').then(m => m.DiscountsModule)},
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
