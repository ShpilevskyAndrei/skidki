import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-user-form',
  templateUrl: './sign-up-user-form.component.html',
  styleUrls: ['./sign-up-user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpUserFormComponent {
  public isPasswordHidden = true;
  public isRepeatPasswordHidden = true;
}
