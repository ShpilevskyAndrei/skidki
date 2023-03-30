import { ChangeDetectionStrategy, Component } from '@angular/core';

import { APP_NAME } from '../../../shared/constants/app-name';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public appName = APP_NAME;
}
