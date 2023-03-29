import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpContainerComponent } from './pages/sign-up-page/sign-up-container.component';
import { SignInContainerComponent } from './pages/sign-in-page/sign-in-container.component';
import { SignUpUserPageContainerComponent } from './pages/sign-up-user-page/sign-up-user-page-container.component';
import { SignUpCompanyPageContainerComponent } from './pages/sign-up-company-page/sign-up-company-page-container.component';

const routes: Routes = [
  { path: 'in', component: SignInContainerComponent },
  { path: 'up', component: SignUpContainerComponent },
  { path: 'up/user', component: SignUpUserPageContainerComponent },
  { path: 'up/company', component: SignUpCompanyPageContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
