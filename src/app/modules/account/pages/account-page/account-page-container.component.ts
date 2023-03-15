import { Component } from '@angular/core';

import { UnsubscribeDirective } from "../../../shared/directives/unsubscribe";

@Component({
  selector: 'app-account-page-container',
  template: `<app-account-page></app-account-page>`,
  styleUrls: ['./account-page-container.component.scss']
})
export class AccountPageContainerComponent extends UnsubscribeDirective {}
