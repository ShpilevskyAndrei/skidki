import { Component } from '@angular/core';

import { UnsubscribeDirective } from '../../../shared/directives/unsubscribe';

@Component({
  selector: 'app-sign-up-container-page',
  template: ` <app-sign-up-page></app-sign-up-page> `,
})
export class SignUpContainerComponent extends UnsubscribeDirective {}
