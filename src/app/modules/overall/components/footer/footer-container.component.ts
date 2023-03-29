import { Component } from '@angular/core';

import { UnsubscribeDirective } from '../../../shared/directives/unsubscribe';

@Component({
  selector: 'app-footer-container',
  template: `<app-footer></app-footer>`,
})
export class FooterContainerComponent extends UnsubscribeDirective {}
