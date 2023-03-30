import { ChangeDetectionStrategy, Component } from '@angular/core';

import { APP_NAME } from '../../../shared/constants/app-name';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  public isPasswordHidden = true;
  public appName = APP_NAME;
}
