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

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './pages/sign-in-page/sign-in.component';
import { SignUpComponent } from './pages/sign-up-page/sign-up.component';
import { SignUpContainerComponent } from "./pages/sign-up-page/sign-up-container.component";
import { SignInContainerComponent } from "./pages/sign-in-page/sign-in-container.component";

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SignInContainerComponent,
    SignUpContainerComponent
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
  ],
})
export class AuthModule {}
