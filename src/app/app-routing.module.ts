import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './modules/overall/pages/error-page/error-page.component';
import { DashboardPageContainerComponent } from './modules/overall/pages/dashboard-page/dashboard-page-container.component';

const routes: Routes = [
  { path: '', component: DashboardPageContainerComponent },
  { path: 'sign', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path: 'account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)},
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
