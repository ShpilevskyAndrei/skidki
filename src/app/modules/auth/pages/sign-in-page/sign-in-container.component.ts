import { Component } from '@angular/core';

import { UnsubscribeDirective } from "../../../shared/directives/unsubscribe";

@Component({
  selector: 'app-sign-in-container-page',
  template: `
    <app-sign-in-page></app-sign-in-page>
  `,
  styleUrls: ['./sign-in-container.component.scss'],
})
export class SignInContainerComponent extends UnsubscribeDirective {}
