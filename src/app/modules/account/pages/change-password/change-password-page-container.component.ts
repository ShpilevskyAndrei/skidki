import { Component } from '@angular/core';

import { UnsubscribeDirective } from "../../../shared/directives/unsubscribe";

@Component({
  selector: 'app-change-password-page-container',
  template: `<app-change-password-page></app-change-password-page>`,
  styleUrls: ['./change-password-page-container.component.scss']
})
export class ChangePasswordPageContainerComponent extends UnsubscribeDirective {}
