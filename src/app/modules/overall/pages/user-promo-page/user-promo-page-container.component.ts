import { Component } from '@angular/core';

import { UnsubscribeDirective } from '../../../shared/directives/unsubscribe';

@Component({
  selector: 'app-user-promo-page-container',
  template: `<app-user-promo-page></app-user-promo-page>`,
})
export class UserPromoPageContainerComponent extends UnsubscribeDirective {}
