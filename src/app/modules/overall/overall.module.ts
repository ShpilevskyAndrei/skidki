import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { OverallRoutingModule } from './overall-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HeaderContainerComponent } from './components/header/header-container.component';
import { DashboardPageContainerComponent } from './pages/dashboard-page/dashboard-page-container.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SharedModule } from '../shared/shared.module';
import { ClickOutsideDirective } from '../shared/directives/click-outside.directive';
import { FooterComponent } from './components/footer/footer.component';
import { FooterContainerComponent } from './components/footer/footer-container.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserPromoPageComponent } from './pages/user-promo-page/user-promo-page.component';
import { VendorPromoPageComponent } from './pages/vendor-promo-page/vendor-promo-page.component';
import { EmployerPromoPageComponent } from './pages/employer-promo-page/employer-promo-page.component';
import { EmployerPromoPageContainerComponent } from './pages/employer-promo-page/employer-promo-page-container.component';
import { UserPromoPageContainerComponent } from './pages/user-promo-page/user-promo-page-container.component';
import { VendorPromoPageContainerComponent } from './pages/vendor-promo-page/vendor-promo-page-container.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderContainerComponent,
    FooterComponent,
    FooterContainerComponent,
    DashboardPageComponent,
    DashboardPageContainerComponent,
    ErrorPageComponent,
    ProgressBarComponent,
    ClickOutsideDirective,
    UserPromoPageComponent,
    VendorPromoPageComponent,
    EmployerPromoPageComponent,
    EmployerPromoPageContainerComponent,
    UserPromoPageContainerComponent,
    VendorPromoPageContainerComponent,
  ],
  imports: [
    CommonModule,
    OverallRoutingModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
    MatDialogModule,
  ],
  bootstrap: [],
  exports: [HeaderContainerComponent, FooterContainerComponent],
})
export class OverallModule {}
