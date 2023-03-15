import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  public static passwordsMatching(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;

    if (password === repeatPassword && !!password && !!repeatPassword) {
      return null;
    }

    return { passwordsNotMatching: true };
  }
}
