import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountPageContainerComponent } from "./pages/account-page/account-page-container.component";
import { AccountPageComponent } from "./pages/account-page/account-page.component";
import { ChangePasswordPageContainerComponent } from "./pages/change-password/change-password-page-container.component";
import { ChangePasswordPageComponent } from "./pages/change-password/change-password-page.component";

@NgModule({
  declarations: [
    AccountPageContainerComponent,
    AccountPageComponent,
    ChangePasswordPageContainerComponent,
    ChangePasswordPageComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
