import { Component } from '@angular/core';

import { UnsubscribeDirective } from '../../../shared/directives/unsubscribe';

@Component({
  selector: 'app-sign-up-user-page-container',
  template: `<app-sign-up-user-page></app-sign-up-user-page>`,
})
export class SignUpUserPageContainerComponent extends UnsubscribeDirective {}
