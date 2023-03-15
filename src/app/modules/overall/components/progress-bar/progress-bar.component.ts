import { Component, Input } from '@angular/core';

import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() public isProgressBarWorks?: number | null;

  public constructor(public loadingService: ProgressBarService) {}
}
