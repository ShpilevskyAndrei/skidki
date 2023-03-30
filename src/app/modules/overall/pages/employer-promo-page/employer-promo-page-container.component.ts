import { Component } from '@angular/core';

import { UnsubscribeDirective } from '../../../shared/directives/unsubscribe';

@Component({
  selector: 'app-employer-promo-page-container',
  template: `<app-employer-promo-page></app-employer-promo-page>`,
})
export class EmployerPromoPageContainerComponent extends UnsubscribeDirective {}
