import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './pages/sign-in-page/sign-in.component';
import { SignUpComponent } from './pages/sign-up-page/sign-up.component';
import { SignUpContainerComponent } from './pages/sign-up-page/sign-up-container.component';
import { SignInContainerComponent } from './pages/sign-in-page/sign-in-container.component';
import { SignUpUserFormComponent } from './components/sign-up-user-form/sign-up-user-form.component';
import { SignUpUserPageComponent } from './pages/sign-up-user-page/sign-up-user-page.component';
import { SignUpCompanyPageComponent } from './pages/sign-up-company-page/sign-up-company-page.component';
import { SignUpCompanyPageContainerComponent } from './pages/sign-up-company-page/sign-up-company-page-container.component';
import { SignUpUserPageContainerComponent } from './pages/sign-up-user-page/sign-up-user-page-container.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignInContainerComponent,
    SignUpComponent,
    SignUpContainerComponent,
    SignUpUserFormComponent,
    SignUpUserPageComponent,
    SignUpCompanyPageContainerComponent,
    SignUpCompanyPageComponent,
    SignUpUserPageContainerComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
})
export class AuthModule {}
