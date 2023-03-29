import { Component } from '@angular/core';

import { UnsubscribeDirective } from '../../../shared/directives/unsubscribe';

@Component({
  selector: 'app-account-page-container',
  template: `<app-account-page></app-account-page>`,
})
export class AccountPageContainerComponent extends UnsubscribeDirective {}
