import { Component } from '@angular/core';

import { UnsubscribeDirective } from '../../../shared/directives/unsubscribe';

@Component({
  selector: 'app-dashboard-container-page',
  template: `<app-dashboard-page></app-dashboard-page>`,
})
export class DashboardPageContainerComponent extends UnsubscribeDirective {}
