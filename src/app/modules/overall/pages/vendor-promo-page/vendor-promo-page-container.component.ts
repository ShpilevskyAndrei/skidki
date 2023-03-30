import { Component } from '@angular/core';

import { UnsubscribeDirective } from '../../../shared/directives/unsubscribe';

@Component({
  selector: 'app-vendor-promo-page-container',
  template: `<app-vendor-promo-page></app-vendor-promo-page>`,
})
export class VendorPromoPageContainerComponent extends UnsubscribeDirective {}
