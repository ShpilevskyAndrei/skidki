import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpContainerComponent } from "./pages/sign-up-page/sign-up-container.component";
import { SignInContainerComponent } from "./pages/sign-in-page/sign-in-container.component";

const routes: Routes = [
  { path: 'in', component: SignInContainerComponent },
  { path: 'up', component: SignUpContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

