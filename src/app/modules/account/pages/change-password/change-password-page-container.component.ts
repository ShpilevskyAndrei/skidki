import { Component } from '@angular/core';

import { UnsubscribeDirective } from '../../../shared/directives/unsubscribe';

@Component({
  selector: 'app-change-password-page-container',
  template: `<app-change-password-page></app-change-password-page>`,
})
export class ChangePasswordPageContainerComponent extends UnsubscribeDirective {}
