import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageContainerComponent } from './pages/dashboard-page/dashboard-page-container.component';
import { VendorPromoPageContainerComponent } from './pages/vendor-promo-page/vendor-promo-page-container.component';
import { UserPromoPageContainerComponent } from './pages/user-promo-page/user-promo-page-container.component';
import { EmployerPromoPageContainerComponent } from './pages/employer-promo-page/employer-promo-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageContainerComponent,
    pathMatch: 'full',
  },
  { path: 'for-vendor', component: VendorPromoPageContainerComponent },
  { path: 'for-user', component: UserPromoPageContainerComponent },
  { path: 'for-employer', component: EmployerPromoPageContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverallRoutingModule {}
