import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  public userRole!: FormGroup;

  public constructor(
    private router: Router,
    private toastService: AgroexToastService
  ) {}

  public ngOnInit(): void {
    this.userRole = new FormGroup({
      role: new FormControl('', Validators.required),
    });
  }

  public continueSignUp(): void {
    const role = this.userRole.controls['role'].getRawValue();

    if (role === 'user') {
      void this.router.navigate([`${this.router.url}/user`]);
    } else if (role === 'company') {
      void this.router.navigate([`${this.router.url}/company`]);
    } else {
      this.toastService.addToast({
        toastType: ToastType.Warning,
        title: 'Вы не выбрали роль',
      });
    }
  }
}
