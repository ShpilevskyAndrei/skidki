import { Component } from '@angular/core';

import { UnsubscribeDirective } from "../../../shared/directives/unsubscribe";

@Component({
  selector: 'app-sign-up-company-page-container',
  template: `<app-sign-up-company-page></app-sign-up-company-page>`,
})
export class SignUpCompanyPageContainerComponent extends UnsubscribeDirective {}
