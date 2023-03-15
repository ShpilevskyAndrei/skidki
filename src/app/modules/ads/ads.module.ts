import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdAboveHeaderComponent } from './components/ad-above-header/ad-above-header.component';

@NgModule({
  declarations: [AdAboveHeaderComponent],
  imports: [CommonModule],
  exports: [AdAboveHeaderComponent],
})
export class AdsModule {}
