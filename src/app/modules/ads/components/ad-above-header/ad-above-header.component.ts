import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ad-above-header',
  templateUrl: './ad-above-header.component.html',
  styleUrls: ['./ad-above-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdAboveHeaderComponent {}
