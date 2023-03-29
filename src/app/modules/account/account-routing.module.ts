import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountPageContainerComponent } from './pages/account-page/account-page-container.component';
import { ChangePasswordPageContainerComponent } from './pages/change-password/change-password-page-container.component';

const routes: Routes = [
  {
    path: 'info',
    component: AccountPageContainerComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordPageContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
