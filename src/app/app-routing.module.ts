import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './modules/overall/pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/overall/overall.module').then((m) => m.OverallModule),
  },
  {
    path: 'sign',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'discounts',
    loadChildren: () =>
      import('./modules/discounts/discounts.module').then(
        (m) => m.DiscountsModule
      ),
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
